/**
 * Page Object Model - Login Page
 * Prepared by: Person 3 - Joe
 * 
 * This file helps organize Playwright selectors and actions for the login page
 * Following best practice: Page Object Model pattern
 */

import { Page, Locator } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  
  // Selectors
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;
  readonly successMessage: Locator;
  readonly forgotPasswordLink: Locator;
  readonly signUpLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('input[name="username"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.loginButton = page.locator('button[type="submit"]');
    this.errorMessage = page.locator('[data-testid="error-message"]');
    this.successMessage = page.locator('[data-testid="success-message"]');
    this.forgotPasswordLink = page.locator('a:has-text("Forgot Password")');
    this.signUpLink = page.locator('a:has-text("Sign Up")');
  }

  /**
   * Navigate to login page
   */
  async goto() {
    await this.page.goto('http://localhost:3000/login');
  }

  /**
   * Fill username and password, then login
   */
  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  /**
   * Get error message text
   */
  async getErrorMessage(): Promise<string | null> {
    return await this.errorMessage.textContent();
  }

  /**
   * Check if error message is visible
   */
  async isErrorVisible(): Promise<boolean> {
    return await this.errorMessage.isVisible();
  }

  /**
   * Check if login button is enabled
   */
  async isLoginButtonEnabled(): Promise<boolean> {
    return !(await this.loginButton.isDisabled());
  }
}

export class DashboardPage {
  readonly page: Page;
  readonly welcomeMessage: Locator;
  readonly userMenu: Locator;
  readonly logoutButton: Locator;
  readonly searchBox: Locator;

  constructor(page: Page) {
    this.page = page;
    this.welcomeMessage = page.locator('[data-testid="welcome-message"]');
    this.userMenu = page.locator('[data-testid="user-menu"]');
    this.logoutButton = page.locator('button:has-text("Logout")');
    this.searchBox = page.locator('input[placeholder="Search books..."]');
  }

  /**
   * Check if user is logged in (welcome message visible)
   */
  async isLoggedIn(): Promise<boolean> {
    return await this.welcomeMessage.isVisible();
  }

  /**
   * Logout user
   */
  async logout() {
    await this.userMenu.click();
    await this.logoutButton.click();
  }

  /**
   * Search for a book
   */
  async searchBook(query: string) {
    await this.searchBox.fill(query);
    await this.searchBox.press('Enter');
  }
}

export class BookDetailPage {
  readonly page: Page;
  readonly bookTitle: Locator;
  readonly bookAuthor: Locator;
  readonly borrowButton: Locator;
  readonly availabilityStatus: Locator;
  readonly addToWishlistButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.bookTitle = page.locator('[data-testid="book-title"]');
    this.bookAuthor = page.locator('[data-testid="book-author"]');
    this.borrowButton = page.locator('button:has-text("Borrow")');
    this.availabilityStatus = page.locator('[data-testid="availability"]');
    this.addToWishlistButton = page.locator('button:has-text("Add to Wishlist")');
  }

  /**
   * Check if book is available
   */
  async isAvailable(): Promise<boolean> {
    const status = await this.availabilityStatus.textContent();
    return status?.includes('Available') || false;
  }

  /**
   * Borrow the book
   */
  async borrowBook() {
    await this.borrowButton.click();
  }

  /**
   * Add to wishlist
   */
  async addToWishlist() {
    await this.addToWishlistButton.click();
  }

  /**
   * Get book title
   */
  async getTitle(): Promise<string | null> {
    return await this.bookTitle.textContent();
  }
}
