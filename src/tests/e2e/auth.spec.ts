import { test, expect } from '@playwright/test';

/**
 * Playwright E2E Tests - Login & Authentication
 * Prepared by: Person 3 - Joe
 */

test.describe('Authentication Tests', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to login page before each test
    await page.goto('http://localhost:3000/login');
  });

  test('TC_AUTH_001: Valid login with correct credentials', async ({ page }) => {
    // Fill username
    await page.fill('input[name="username"]', 'testuser');
    
    // Fill password
    await page.fill('input[name="password"]', 'password123');
    
    // Click login button
    await page.click('button[type="submit"]');
    
    // Wait for navigation and verify
    await page.waitForURL('**/dashboard');
    await expect(page).toHaveURL(/.*dashboard/);
    
    // Check for welcome message
    await expect(page.locator('text=Welcome, testuser')).toBeVisible();
  });

  test('TC_AUTH_002: Invalid login with wrong password', async ({ page }) => {
    // Fill username
    await page.fill('input[name="username"]', 'testuser');
    
    // Fill wrong password
    await page.fill('input[name="password"]', 'wrongpassword');
    
    // Click login button
    await page.click('button[type="submit"]');
    
    // Check for error message
    await expect(page.locator('text=Invalid credentials')).toBeVisible();
    
    // Verify still on login page
    await expect(page).toHaveURL(/.*login/);
  });

  test('TC_AUTH_003: Invalid login with non-existent user', async ({ page }) => {
    // Fill non-existent username
    await page.fill('input[name="username"]', 'nonexistent@test.com');
    
    // Fill password
    await page.fill('input[name="password"]', 'anypassword');
    
    // Click login button
    await page.click('button[type="submit"]');
    
    // Check for user not found error
    await expect(page.locator('text=User not found')).toBeVisible();
  });

  test('TC_AUTH_004: Empty fields validation', async ({ page }) => {
    // Leave fields empty and click login
    await page.click('button[type="submit"]');
    
    // Check for validation error
    await expect(
      page.locator('text=Please fill all fields')
    ).toBeVisible();
  });
});

test.describe('Logout Tests', () => {
  test.beforeEach(async ({ page }) => {
    // Login first
    await page.goto('http://localhost:3000/login');
    await page.fill('input[name="username"]', 'testuser');
    await page.fill('input[name="password"]', 'password123');
    await page.click('button[type="submit"]');
    await page.waitForURL('**/dashboard');
  });

  test('TC_AUTH_005: Logout ends session', async ({ page }) => {
    // Click user menu
    await page.click('[data-testid="user-menu"]');
    
    // Click logout
    await page.click('button:has-text("Logout")');
    
    // Confirm logout if prompted
    if (await page.locator('[data-testid="confirm-logout"]').isVisible()) {
      await page.click('[data-testid="confirm-logout"]');
    }
    
    // Wait for redirect and verify
    await page.waitForURL('**/login');
    await expect(page).toHaveURL(/.*login/);
  });
});
