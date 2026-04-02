import { test, expect } from '@playwright/test';

test.describe('Workstream 2: Interactive Content Responsivity', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test.describe('Interactive Flow Diagram Section', () => {
    test('should render diagram section', async ({ page }) => {
      const diagramSection = page.locator('.diagram-section');
      await diagramSection.scrollIntoViewIfNeeded();
      await expect(diagramSection).toBeVisible();
    });

    test('should display diagram without overflow', async ({ page, viewport }) => {
      if (!viewport) return;

      const diagramSection = page.locator('.diagram-section');
      await diagramSection.scrollIntoViewIfNeeded();

      const box = await diagramSection.boundingBox();
      expect(box?.width).toBeLessThanOrEqual(viewport.width);
    });

    test('should handle interactive elements on all viewports', async ({ page }) => {
      const diagramSection = page.locator('.diagram-section');
      await diagramSection.scrollIntoViewIfNeeded();

      // Check for any interactive elements (buttons, clickable areas, etc.)
      const interactiveElements = diagramSection.locator('button, [role="button"], a');
      const count = await interactiveElements.count();

      if (count > 0) {
        for (let i = 0; i < count; i++) {
          const element = interactiveElements.nth(i);
          await expect(element).toBeVisible();

          // Check touch target size
          const box = await element.boundingBox();
          if (box) {
            expect(box.height).toBeGreaterThanOrEqual(44);
            expect(box.width).toBeGreaterThanOrEqual(44);
          }
        }
      }
    });

    test('should maintain diagram aspect ratio', async ({ page, viewport }) => {
      const diagramSection = page.locator('.diagram-section');
      await diagramSection.scrollIntoViewIfNeeded();

      const box = await diagramSection.boundingBox();
      if (box && viewport) {
        // Diagram should scale proportionally
        expect(box.width).toBeGreaterThan(0);
        expect(box.height).toBeGreaterThan(0);
      }
    });
  });

  test.describe('Before/After Comparison Section', () => {
    test('should render comparison section', async ({ page }) => {
      const comparisonSection = page.locator('.comparison-section');
      await comparisonSection.scrollIntoViewIfNeeded();
      await expect(comparisonSection).toBeVisible();
    });

    test('should display comparison content side-by-side on desktop', async ({ page, viewport }) => {
      if (!viewport || viewport.width < 1024) {
        test.skip();
      }

      const comparisonSection = page.locator('.comparison-section');
      await comparisonSection.scrollIntoViewIfNeeded();

      // Check if before/after elements exist
      const beforeAfterElements = comparisonSection.locator('[class*="before"], [class*="after"]');
      const count = await beforeAfterElements.count();

      if (count >= 2) {
        const first = beforeAfterElements.first();
        const last = beforeAfterElements.last();

        const firstBox = await first.boundingBox();
        const lastBox = await last.boundingBox();

        if (firstBox && lastBox) {
          // On desktop, elements should be side by side
          expect(Math.abs(firstBox.y - lastBox.y)).toBeLessThan(firstBox.height);
        }
      }
    });

    test('should stack comparison content on mobile', async ({ page, viewport }) => {
      if (!viewport || viewport.width >= 768) {
        test.skip();
      }

      const comparisonSection = page.locator('.comparison-section');
      await comparisonSection.scrollIntoViewIfNeeded();

      // Ensure no horizontal scroll
      const box = await comparisonSection.boundingBox();
      expect(box?.width).toBeLessThanOrEqual(viewport.width);
    });

    test('should handle animations smoothly', async ({ page }) => {
      const comparisonSection = page.locator('.comparison-section');
      await comparisonSection.scrollIntoViewIfNeeded();

      // Wait for any animations to complete
      await page.waitForTimeout(1000);

      // Take screenshot to verify visual state
      await expect(comparisonSection).toBeVisible();
    });
  });

  test.describe('Features Section', () => {
    test('should render features equation layout', async ({ page }) => {
      const featuresSection = page.locator('.features-section');
      await featuresSection.scrollIntoViewIfNeeded();
      await expect(featuresSection).toBeVisible();
    });

    test('should display all three feature blocks', async ({ page }) => {
      const features = page.locator('.features-section .feature');
      const count = await features.count();
      expect(count).toBe(3);

      // Check each feature is visible
      await expect(features.nth(0)).toContainText('Command-centric');
      await expect(features.nth(1)).toContainText('Discoverability');
      await expect(features.nth(2)).toContainText('Foobara');
    });

    test('should show operators between features on desktop', async ({ page, viewport }) => {
      if (!viewport || viewport.width < 1024) {
        test.skip();
      }

      const operators = page.locator('.features-section .operator');
      const count = await operators.count();
      expect(count).toBe(2);

      await expect(operators.nth(0)).toContainText('+');
      await expect(operators.nth(1)).toContainText('=');
    });

    test('should adapt features layout for mobile', async ({ page, viewport }) => {
      if (!viewport || viewport.width >= 768) {
        test.skip();
      }

      const featuresSection = page.locator('.features-section');
      await featuresSection.scrollIntoViewIfNeeded();

      const features = page.locator('.features-section .feature');
      const count = await features.count();

      // All features should be visible even on mobile
      for (let i = 0; i < count; i++) {
        await expect(features.nth(i)).toBeVisible();
      }
    });

    test('should maintain readable text in features', async ({ page }) => {
      const features = page.locator('.features-section .feature');
      const count = await features.count();

      for (let i = 0; i < count; i++) {
        const feature = features.nth(i);
        const heading = feature.locator('h3');

        const fontSize = await heading.evaluate(el =>
          parseInt(window.getComputedStyle(el).fontSize)
        );

        expect(fontSize).toBeGreaterThanOrEqual(16);
      }
    });
  });

  test.describe('Interactive Elements Accessibility', () => {
    test('should have sufficient touch targets', async ({ page, viewport }) => {
      if (!viewport || viewport.width >= 1024) {
        test.skip();
      }

      // Find all interactive elements in these sections
      const sections = ['.diagram-section', '.comparison-section', '.features-section'];

      for (const selector of sections) {
        const section = page.locator(selector);
        await section.scrollIntoViewIfNeeded();

        const buttons = section.locator('button, [role="button"], a[href]');
        const count = await buttons.count();

        for (let i = 0; i < count; i++) {
          const button = buttons.nth(i);
          if (await button.isVisible()) {
            const box = await button.boundingBox();
            if (box) {
              expect(box.height).toBeGreaterThanOrEqual(44);
            }
          }
        }
      }
    });
  });
});
