import Library, { Book } from '../../library/Library';

/**
 * Unit Tests - Library.ts
 * Prepared by: Person 4 - Nat
 * Framework: Jest + TypeScript
 */

describe('Library Class - Search & Filter', () => {
  let library: Library;

  beforeEach(() => {
    library = new Library();
  });

  describe('searchByTitle', () => {
    test('should find book by exact title', () => {
      const results = library.searchByTitle('The Great Gatsby');
      expect(results).toHaveLength(1);
      expect(results[0].title).toBe('The Great Gatsby');
    });

    test('should find book by partial title', () => {
      const results = library.searchByTitle('Great');
      expect(results).toHaveLength(1);
      expect(results[0].title).toBe('The Great Gatsby');
    });

    test('should be case-insensitive', () => {
      const results1 = library.searchByTitle('the great gatsby');
      const results2 = library.searchByTitle('THE GREAT GATSBY');
      expect(results1).toHaveLength(1);
      expect(results2).toHaveLength(1);
      expect(results1[0].id).toBe(results2[0].id);
    });

    test('should return empty array when no match', () => {
      const results = library.searchByTitle('NonExistentBook');
      expect(results).toHaveLength(0);
    });

    test('should handle special characters', () => {
      const results = library.searchByTitle('Mockingbird');
      expect(results).toHaveLength(1);
      expect(results[0].title).toContain('Mockingbird');
    });
  });

  describe('searchByAuthor', () => {
    test('should find books by author name', () => {
      const results = library.searchByAuthor('Harper Lee');
      expect(results).toHaveLength(1);
      expect(results[0].author).toBe('Harper Lee');
    });

    test('should be case-insensitive', () => {
      const results = library.searchByAuthor('harper lee');
      expect(results).toHaveLength(1);
    });

    test('should return empty when author not found', () => {
      const results = library.searchByAuthor('Unknown Author');
      expect(results).toHaveLength(0);
    });
  });

  describe('filterByCategory', () => {
    test('should filter books by category', () => {
      const results = library.filterByCategory('Fiction');
      expect(results.length).toBeGreaterThan(0);
      results.forEach((book) => {
        expect(book.category).toBe('Fiction');
      });
    });

    test('should return empty when category not found', () => {
      const results = library.filterByCategory('NonExistent');
      expect(results).toHaveLength(0);
    });
  });

  describe('getBookById', () => {
    test('should return book when ID exists', () => {
      const book = library.getBookById(1);
      expect(book).toBeDefined();
      expect(book?.id).toBe(1);
    });

    test('should return undefined when ID not found', () => {
      const book = library.getBookById(9999);
      expect(book).toBeUndefined();
    });
  });
});

describe('Library Class - Borrow & Return', () => {
  let library: Library;

  beforeEach(() => {
    library = new Library();
    // Register a test user
    library.registerUser('testuser', 'test@example.com');
  });

  describe('borrowBook', () => {
    test('should borrow book successfully', () => {
      const result = library.borrowBook('testuser', 1);
      expect(result.success).toBe(true);
      expect(result.message).toContain('successfully');
    });

    test('should fail if user not found', () => {
      const result = library.borrowBook('nonexistent', 1);
      expect(result.success).toBe(false);
      expect(result.message).toBe('User not found');
    });

    test('should fail if book not found', () => {
      const result = library.borrowBook('testuser', 9999);
      expect(result.success).toBe(false);
      expect(result.message).toBe('Book not found');
    });

    test('should fail if no copies available', () => {
      const result = library.borrowBook('testuser', 3); // Book 3 has 0 copies
      expect(result.success).toBe(false);
      expect(result.message).toBe('No copies available');
    });

    test('should fail if user already borrowed same book', () => {
      library.borrowBook('testuser', 1);
      const result = library.borrowBook('testuser', 1);
      expect(result.success).toBe(false);
      expect(result.message).toBe('You already borrowed this book');
    });

    test('should decrease available copies', () => {
      const bookBefore = library.getBookById(1);
      const copiesBefore = bookBefore?.copies || 0;

      library.borrowBook('testuser', 1);

      const bookAfter = library.getBookById(1);
      expect(bookAfter?.copies).toBe(copiesBefore - 1);
    });

    test('should add book to user borrowed list', () => {
      library.borrowBook('testuser', 1);
      const borrowed = library.getUserBorrowedBooks('testuser');
      expect(borrowed).toHaveLength(1);
      expect(borrowed[0].id).toBe(1);
    });
  });

  describe('returnBook', () => {
    test('should return book successfully', () => {
      library.borrowBook('testuser', 1);
      const result = library.returnBook('testuser', 1);
      expect(result.success).toBe(true);
    });

    test('should fail if user not found', () => {
      const result = library.returnBook('nonexistent', 1);
      expect(result.success).toBe(false);
      expect(result.message).toBe('User not found');
    });

    test('should fail if book not borrowed by user', () => {
      const result = library.returnBook('testuser', 2); // User didn't borrow book 2
      expect(result.success).toBe(false);
      expect(result.message).toBe('Book not borrowed by user');
    });

    test('should increase available copies', () => {
      library.borrowBook('testuser', 1);
      const bookBefore = library.getBookById(1);
      const copiesBefore = bookBefore?.copies || 0;

      library.returnBook('testuser', 1);

      const bookAfter = library.getBookById(1);
      expect(bookAfter?.copies).toBe(copiesBefore + 1);
    });

    test('should remove book from user borrowed list', () => {
      library.borrowBook('testuser', 1);
      expect(library.getUserBorrowedBooks('testuser')).toHaveLength(1);

      library.returnBook('testuser', 1);
      expect(library.getUserBorrowedBooks('testuser')).toHaveLength(0);
    });
  });
});

describe('Library Class - User Management', () => {
  let library: Library;

  beforeEach(() => {
    library = new Library();
  });

  describe('registerUser', () => {
    test('should register new user successfully', () => {
      const result = library.registerUser('newuser', 'new@example.com');
      expect(result.success).toBe(true);
    });

    test('should fail if username already exists', () => {
      library.registerUser('testuser', 'test@example.com');
      const result = library.registerUser('testuser', 'another@example.com');
      expect(result.success).toBe(false);
      expect(result.message).toBe('Username already exists');
    });
  });

  describe('getUser', () => {
    test('should return user if exists', () => {
      library.registerUser('testuser', 'test@example.com');
      const user = library.getUser('testuser');
      expect(user).toBeDefined();
      expect(user?.username).toBe('testuser');
    });

    test('should return undefined if user not found', () => {
      const user = library.getUser('nonexistent');
      expect(user).toBeUndefined();
    });
  });
});
