# Source Code - Library.ts (Person 3 & 4 work here)

This class will be used by both:
- **Person 4:** Unit tests (Jest)
- **Person 3:** Playwright tests (E2E automation)

---

export interface Book {
  id: number;
  title: string;
  author: string;
  isbn: string;
  category: string;
  available: boolean;
  copies: number;
  dueDate?: string;
}

export interface User {
  id: number;
  username: string;
  email: string;
  borrowedBooks: Book[];
  borrowLimit: number;
}

export class Library {
  private books: Book[] = [];
  private users: Map<string, User> = new Map();
  private borrowHistory: Map<string, any[]> = new Map();

  /**
   * Initialize library with sample data
   */
  constructor() {
    this.initializeBooks();
  }

  private initializeBooks(): void {
    this.books = [
      {
        id: 1,
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        isbn: '978-0743273565',
        category: 'Fiction',
        available: true,
        copies: 3,
      },
      {
        id: 2,
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        isbn: '978-0061120084',
        category: 'Fiction',
        available: true,
        copies: 2,
      },
      {
        id: 3,
        title: 'Clean Code',
        author: 'Robert C. Martin',
        isbn: '978-0132350884',
        category: 'Programming',
        available: false,
        copies: 0,
      },
    ];
  }

  // ==================== SEARCH & FILTER ====================

  /**
   * Search books by title (case-insensitive)
   */
  searchByTitle(title: string): Book[] {
    return this.books.filter((book) =>
      book.title.toLowerCase().includes(title.toLowerCase())
    );
  }

  /**
   * Search books by author (case-insensitive)
   */
  searchByAuthor(author: string): Book[] {
    return this.books.filter((book) =>
      book.author.toLowerCase().includes(author.toLowerCase())
    );
  }

  /**
   * Filter books by category
   */
  filterByCategory(category: string): Book[] {
    return this.books.filter((book) => book.category === category);
  }

  /**
   * Get book by ID
   */
  getBookById(id: number): Book | undefined {
    return this.books.find((book) => book.id === id);
  }

  // ==================== BORROW / RETURN ====================

  /**
   * Borrow a book for a user
   */
  borrowBook(userId: string, bookId: number): {
    success: boolean;
    message: string;
  } {
    const user = this.users.get(userId);
    if (!user) {
      return { success: false, message: 'User not found' };
    }

    const book = this.getBookById(bookId);
    if (!book) {
      return { success: false, message: 'Book not found' };
    }

    if (book.copies <= 0) {
      return { success: false, message: 'No copies available' };
    }

    if (user.borrowedBooks.some((b) => b.id === bookId)) {
      return { success: false, message: 'You already borrowed this book' };
    }

    if (user.borrowedBooks.length >= user.borrowLimit) {
      return {
        success: false,
        message: `Reached maximum borrow limit (${user.borrowLimit})`,
      };
    }

    // Borrow successful
    book.copies--;
    if (book.copies === 0) {
      book.available = false;
    }

    const dueDate = new Date();
    dueDate.setDate(dueDate.getDate() + 14); // 14-day borrow period

    const borrowedBook: Book = { ...book, dueDate: dueDate.toISOString() };
    user.borrowedBooks.push(borrowedBook);

    // Log history
    if (!this.borrowHistory.has(userId)) {
      this.borrowHistory.set(userId, []);
    }
    this.borrowHistory.get(userId)!.push({
      bookId,
      action: 'borrow',
      date: new Date(),
      dueDate,
    });

    return { success: true, message: 'Book borrowed successfully' };
  }

  /**
   * Return a book
   */
  returnBook(userId: string, bookId: number): {
    success: boolean;
    message: string;
    fine?: number;
  } {
    const user = this.users.get(userId);
    if (!user) {
      return { success: false, message: 'User not found' };
    }

    const bookIndex = user.borrowedBooks.findIndex((b) => b.id === bookId);
    if (bookIndex === -1) {
      return { success: false, message: 'Book not borrowed by user' };
    }

    const borrowedBook = user.borrowedBooks[bookIndex];
    user.borrowedBooks.splice(bookIndex, 1);

    // Check for overdue
    const dueDate = new Date(borrowedBook.dueDate!);
    const returnDate = new Date();
    let fine = 0;

    if (returnDate > dueDate) {
      const daysOverdue = Math.floor(
        (returnDate.getTime() - dueDate.getTime()) / (1000 * 60 * 60 * 24)
      );
      fine = daysOverdue * 0.5; // $0.50 per day
    }

    // Restore book availability
    const originalBook = this.getBookById(bookId);
    if (originalBook) {
      originalBook.copies++;
      originalBook.available = true;
    }

    // Log history
    if (!this.borrowHistory.has(userId)) {
      this.borrowHistory.set(userId, []);
    }
    this.borrowHistory.get(userId)!.push({
      bookId,
      action: 'return',
      date: new Date(),
      fine,
    });

    const message = fine > 0
      ? `Book returned. Fine: $${fine.toFixed(2)}`
      : 'Book returned successfully';

    return { success: true, message, fine };
  }

  /**
   * Get user's borrowed books
   */
  getUserBorrowedBooks(userId: string): Book[] {
    const user = this.users.get(userId);
    return user ? user.borrowedBooks : [];
  }

  // ==================== USER MANAGEMENT ====================

  /**
   * Register a new user
   */
  registerUser(username: string, email: string): {
    success: boolean;
    message: string;
  } {
    if (this.users.has(username)) {
      return { success: false, message: 'Username already exists' };
    }

    const newUser: User = {
      id: this.users.size + 1,
      username,
      email,
      borrowedBooks: [],
      borrowLimit: 10,
    };

    this.users.set(username, newUser);
    return { success: true, message: 'User registered successfully' };
  }

  /**
   * Get user by username
   */
  getUser(username: string): User | undefined {
    return this.users.get(username);
  }

  /**
   * Get borrow history for user
   */
  getBorrowHistory(userId: string): any[] {
    return this.borrowHistory.get(userId) || [];
  }

  // ==================== UTILITY ====================

  /**
   * Get all books
   */
  getAllBooks(): Book[] {
    return this.books;
  }

  /**
   * Get available books count
   */
  getAvailableBooksCount(): number {
    return this.books.filter((book) => book.available).length;
  }
}

export default Library;
