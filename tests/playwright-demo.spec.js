const { test, expect } = require('@playwright/test');

test.describe('API Test Demo with Playwright', () => {
  test('OpenLibrary API Test', async ({ request }) => {
    // Make API request using Playwright's request context
    const response = await request.get('https://openlibrary.org/authors/OL1A.json');
    
    // Assert response status
    expect(response.status()).toBe(200);
    
    // Parse response data
    const data = await response.json();
    
    // Assert specific fields
    expect(data.personal_name).toBe('Sachi Rautroy');
    expect(data.alternate_names).toContain('Yugashrashta Sachi Routray');
    expect(data.key).toBe('/authors/OL1A');
    
    console.log('✅ API Test completed successfully');
    console.log(`📊 Author: ${data.personal_name}`);
    console.log(`🔑 Key: ${data.key}`);
    console.log(`📝 Alternate names count: ${data.alternate_names.length}`);
  });

  test('Service NSW Website Check', async ({ page }) => {
    // Navigate to Service NSW website
    await page.goto('https://www.service.nsw.gov.au');
    
    // Wait for page to load
    await page.waitForLoadState('networkidle');
    
    // Assert page title
    await expect(page).toHaveTitle(/Service NSW/);
    
    // Take screenshot for report
    await page.screenshot({ path: 'reports/screenshots/service-nsw-homepage.png' });
    
    console.log('✅ UI Test completed successfully');
    console.log('📸 Screenshot saved to reports/screenshots/');
  });
});
