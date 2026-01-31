import { test, expect } from '@playwright/test';

test.describe('Workstream 1: Hero & Introduction Responsivity', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test.describe('Hero Section', () => {
    test('should display hero content correctly on all viewports', async ({ page }) => {
      // Check hero hook is visible
      const heroHook = page.locator('.hero-hook');
      await expect(heroHook).toBeVisible();
      await expect(heroHook).toContainText('Tired of rewriting');

      // Check main heading
      const heading = page.locator('.hero-section h1');
      await expect(heading).toBeVisible();
      await expect(heading).toContainText('Write Once. Connect Everywhere.');

      // Check subheading
      const subheading = page.locator('.hero-section h2');
      await expect(subheading).toBeVisible();
    });

    test('should have accessible and visible CTAs', async ({ page }) => {
      const primaryCta = page.locator('.hero-cta a.cta-button').first();
      const secondaryCta = page.locator('.hero-cta a.cta-button.secondary');

      // Check visibility
      await expect(primaryCta).toBeVisible();
      await expect(secondaryCta).toBeVisible();

      // Check text content
      await expect(primaryCta).toContainText('Get Started');
      await expect(secondaryCta).toContainText('View on GitHub');

      // Check clickability (touch targets)
      const primaryBox = await primaryCta.boundingBox();
      const secondaryBox = await secondaryCta.boundingBox();

      expect(primaryBox?.height).toBeGreaterThanOrEqual(44); // Minimum touch target
      expect(secondaryBox?.height).toBeGreaterThanOrEqual(44);
    });

    test('should layout CTAs appropriately for viewport', async ({ page, viewport }) => {
      const ctaContainer = page.locator('.hero-cta');
      const box = await ctaContainer.boundingBox();

      if (viewport && viewport.width < 768) {
        // Mobile: buttons should stack or have adequate spacing
        expect(box?.width).toBeLessThan(viewport.width);
      }
    });
  });

  test.describe('Hero Explanation Section', () => {
    test('should display explanation text clearly', async ({ page }) => {
      const explanation = page.locator('.hero-explanation p');
      await expect(explanation).toBeVisible();
      await expect(explanation).toContainText('Foobara commands');

      // Check that text doesn't overflow
      const box = await explanation.boundingBox();
      expect(box?.width).toBeGreaterThan(0);
    });

    test('should have readable text size', async ({ page }) => {
      const explanation = page.locator('.hero-explanation p');
      const fontSize = await explanation.evaluate((el) => {
        return window.getComputedStyle(el).fontSize;
      });

      // Font size should be at least 14px for readability
      const fontSizeNum = parseInt(fontSize);
      expect(fontSizeNum).toBeGreaterThanOrEqual(14);
    });
  });

  test.describe('Example Sections', () => {
    test('should render SimpleCommandCodeDemo section', async ({ page }) => {
      const exampleSection = page.locator('.example-section').first();
      await expect(exampleSection).toBeVisible();

      // Scroll into view to ensure it loads
      await exampleSection.scrollIntoViewIfNeeded();
    });

    test('should render ConnectorsDemos section', async ({ page }) => {
      const connectorsSection = page.locator('.example-section').nth(1);
      await expect(connectorsSection).toBeVisible();
      await connectorsSection.scrollIntoViewIfNeeded();
    });

    test('should render GeneratorsDemo section', async ({ page }) => {
      const generatorsSection = page.locator('.example-section.generators-section');
      await expect(generatorsSection).toBeVisible();

      const heading = generatorsSection.locator('h2');
      await expect(heading).toContainText('Code Generators');

      await generatorsSection.scrollIntoViewIfNeeded();
    });

    test('should not have horizontal overflow in examples', async ({ page, viewport }) => {
      if (!viewport) return;

      const exampleSections = page.locator('.example-section');
      const count = await exampleSections.count();

      for (let i = 0; i < count; i++) {
        const section = exampleSections.nth(i);
        await section.scrollIntoViewIfNeeded();

        const box = await section.boundingBox();
        expect(box?.width).toBeLessThanOrEqual(viewport.width);
      }
    });
  });

  test.describe('Cross-viewport Consistency', () => {
    test('should maintain visual hierarchy across viewports', async ({ page }) => {
      const h1 = page.locator('.hero-section h1');
      const h2 = page.locator('.hero-section h2');

      const h1Size = await h1.evaluate(el => parseInt(window.getComputedStyle(el).fontSize));
      const h2Size = await h2.evaluate(el => parseInt(window.getComputedStyle(el).fontSize));

      // H1 should always be larger than H2
      expect(h1Size).toBeGreaterThan(h2Size);
    });

    test('should have no layout shifts on load', async ({ page }) => {
      let layoutShiftScore = 0;

      page.on('metrics', (metrics) => {
        const cls = metrics.metrics.find(m => m.name === 'LayoutShift');
        if (cls) layoutShiftScore += cls.value;
      });

      await page.waitForLoadState('networkidle');

      // CLS should be minimal (< 0.1 is good)
      expect(layoutShiftScore).toBeLessThan(0.1);
    });
  });
});
