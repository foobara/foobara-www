import { test, expect } from '@playwright/test';

test.describe('Workstream 3: Engagement & Conversion Responsivity', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test.describe('Benefits Section', () => {
    test('should render benefits section', async ({ page }) => {
      const benefitsSection = page.locator('.benefits-section');
      await benefitsSection.scrollIntoViewIfNeeded();
      await expect(benefitsSection).toBeVisible();

      const heading = benefitsSection.locator('h2');
      await expect(heading).toContainText('Why Developers Choose Foobara');
    });

    test('should display all three benefit items', async ({ page }) => {
      const benefits = page.locator('.benefits-section .benefit-item');
      const count = await benefits.count();
      expect(count).toBe(3);

      await expect(benefits.nth(0)).toContainText('Ship Faster');
      await expect(benefits.nth(1)).toContainText('Code That Communicates');
      await expect(benefits.nth(2)).toContainText('Future-Proof Your Code');
    });

    test('should use grid layout appropriately', async ({ page, viewport }) => {
      if (!viewport) return;

      const benefitsSection = page.locator('.benefits-section');
      await benefitsSection.scrollIntoViewIfNeeded();

      const benefits = page.locator('.benefits-section .benefit-item');
      const firstBox = await benefits.first().boundingBox();
      const lastBox = await benefits.last().boundingBox();

      if (viewport.width >= 1024 && firstBox && lastBox) {
        // Desktop: benefits should be in a row
        expect(Math.abs(firstBox.y - lastBox.y)).toBeLessThan(firstBox.height);
      } else if (viewport.width < 768 && firstBox && lastBox) {
        // Mobile: benefits should stack
        expect(lastBox.y).toBeGreaterThan(firstBox.y + firstBox.height);
      }
    });
  });

  test.describe('Tools Section', () => {
    test('should render tools section', async ({ page }) => {
      const toolsSection = page.locator('.tools-section');
      await toolsSection.scrollIntoViewIfNeeded();
      await expect(toolsSection).toBeVisible();

      const heading = toolsSection.locator('h2');
      await expect(heading).toContainText('Everything You Need to Build');
    });

    test('should display all 9 tool items', async ({ page }) => {
      const tools = page.locator('.tools-section .tool-item');
      const count = await tools.count();
      expect(count).toBe(9);

      // Verify key tools
      const toolsSection = page.locator('.tools-section');
      await expect(toolsSection).toContainText('Commands');
      await expect(toolsSection).toContainText('Models & Entities');
      await expect(toolsSection).toContainText('Command Connectors');
      await expect(toolsSection).toContainText('Code Generators');
    });

    test('should adapt grid for viewport size', async ({ page, viewport }) => {
      if (!viewport) return;

      const toolsSection = page.locator('.tools-section');
      await toolsSection.scrollIntoViewIfNeeded();

      const tools = page.locator('.tools-section .tool-item');
      const firstBox = await tools.first().boundingBox();
      const secondBox = await tools.nth(1).boundingBox();

      if (!firstBox || !secondBox) return;

      if (viewport.width >= 1024) {
        // Desktop: multiple columns
        const onSameRow = Math.abs(firstBox.y - secondBox.y) < 50;
        expect(onSameRow).toBeTruthy();
      } else if (viewport.width < 768) {
        // Mobile: single column
        expect(secondBox.y).toBeGreaterThan(firstBox.y);
      }
    });

    test('should have readable tool descriptions', async ({ page }) => {
      const tools = page.locator('.tools-section .tool-item');
      const count = await tools.count();

      for (let i = 0; i < count; i++) {
        const tool = tools.nth(i);
        await tool.scrollIntoViewIfNeeded();

        const description = tool.locator('p');
        const fontSize = await description.evaluate(el =>
          parseInt(window.getComputedStyle(el).fontSize)
        );

        expect(fontSize).toBeGreaterThanOrEqual(14);
      }
    });
  });

  test.describe('CTA Section', () => {
    test('should render final CTA section', async ({ page }) => {
      const ctaSection = page.locator('.cta-section');
      await ctaSection.scrollIntoViewIfNeeded();
      await expect(ctaSection).toBeVisible();

      const heading = ctaSection.locator('h2');
      await expect(heading).toContainText('Ready to Build Something');
    });

    test('should display both CTA buttons', async ({ page }) => {
      const ctaSection = page.locator('.cta-section');
      await ctaSection.scrollIntoViewIfNeeded();

      const buttons = ctaSection.locator('.cta-button');
      const count = await buttons.count();
      expect(count).toBe(2);

      await expect(buttons.nth(0)).toContainText('Get Started');
      await expect(buttons.nth(1)).toContainText('Watch Intro Video');
    });

    test('should have prominent, accessible CTAs', async ({ page }) => {
      const ctaSection = page.locator('.cta-section');
      await ctaSection.scrollIntoViewIfNeeded();

      const buttons = ctaSection.locator('.cta-button');

      for (let i = 0; i < await buttons.count(); i++) {
        const button = buttons.nth(i);
        await expect(button).toBeVisible();

        const box = await button.boundingBox();
        if (box) {
          expect(box.height).toBeGreaterThanOrEqual(44);
          expect(box.width).toBeGreaterThanOrEqual(100);
        }
      }
    });

    test('should center CTA on all viewports', async ({ page }) => {
      const ctaSection = page.locator('.cta-section');
      await ctaSection.scrollIntoViewIfNeeded();

      const textAlign = await ctaSection.evaluate(el =>
        window.getComputedStyle(el).textAlign
      );

      expect(textAlign).toBe('center');
    });
  });

  test.describe('Community Section', () => {
    test('should render community section', async ({ page }) => {
      const communitySection = page.locator('.community-section');
      await communitySection.scrollIntoViewIfNeeded();
      await expect(communitySection).toBeVisible();

      const heading = communitySection.locator('h2');
      await expect(heading).toContainText('Join the Community');
    });

    test('should display all community links', async ({ page }) => {
      const communityLinks = page.locator('.community-section .community-link');
      const count = await communityLinks.count();
      expect(count).toBe(3);

      await expect(communityLinks.nth(0)).toContainText('Discord');
      await expect(communityLinks.nth(1)).toContainText('GitHub');
      await expect(communityLinks.nth(2)).toContainText('YouTube');
    });

    test('should have working external links', async ({ page }) => {
      const communityLinks = page.locator('.community-section .community-link');

      for (let i = 0; i < await communityLinks.count(); i++) {
        const link = communityLinks.nth(i);
        const href = await link.getAttribute('href');

        expect(href).toBeTruthy();
        expect(href?.startsWith('http')).toBeTruthy();

        // Check target="_blank" for external links
        const target = await link.getAttribute('target');
        expect(target).toBe('_blank');

        // Check rel attribute for security
        const rel = await link.getAttribute('rel');
        expect(rel).toContain('noopener noreferrer');
      }
    });

    test('should adapt community links layout', async ({ page, viewport }) => {
      if (!viewport) return;

      const communitySection = page.locator('.community-section');
      await communitySection.scrollIntoViewIfNeeded();

      const links = page.locator('.community-section .community-link');

      for (let i = 0; i < await links.count(); i++) {
        const link = links.nth(i);
        await expect(link).toBeVisible();

        const box = await link.boundingBox();
        if (box) {
          // Links should have adequate touch targets
          expect(box.height).toBeGreaterThanOrEqual(44);
        }
      }
    });
  });

  test.describe('Conversion Flow', () => {
    test('should have clear path from benefits to CTA', async ({ page }) => {
      // Scroll through the conversion flow
      const benefitsSection = page.locator('.benefits-section');
      await benefitsSection.scrollIntoViewIfNeeded();
      await expect(benefitsSection).toBeVisible();

      const toolsSection = page.locator('.tools-section');
      await toolsSection.scrollIntoViewIfNeeded();
      await expect(toolsSection).toBeVisible();

      const ctaSection = page.locator('.cta-section');
      await ctaSection.scrollIntoViewIfNeeded();
      await expect(ctaSection).toBeVisible();

      // CTA should be prominent
      const ctaButton = ctaSection.locator('.cta-button').first();
      const backgroundColor = await ctaButton.evaluate(el =>
        window.getComputedStyle(el).backgroundColor
      );

      // Should have a background color (not transparent)
      expect(backgroundColor).not.toBe('rgba(0, 0, 0, 0)');
    });

    test('should maintain engagement on scroll', async ({ page, viewport }) => {
      if (!viewport) return;

      // Scroll to bottom
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

      // Community section should be visible at bottom
      const communitySection = page.locator('.community-section');
      await expect(communitySection).toBeInViewport();

      // CTA should be easily accessible (scroll up a bit to verify it's nearby)
      await page.evaluate(() => window.scrollBy(0, -200));
      const ctaSection = page.locator('.cta-section');
      await expect(ctaSection).toBeInViewport();
    });
  });

  test.describe('Performance & UX', () => {
    test('should load all images in engagement sections', async ({ page }) => {
      const sections = [
        '.benefits-section',
        '.tools-section',
        '.cta-section',
        '.community-section'
      ];

      for (const selector of sections) {
        const section = page.locator(selector);
        await section.scrollIntoViewIfNeeded();

        const images = section.locator('img');
        const count = await images.count();

        for (let i = 0; i < count; i++) {
          const img = images.nth(i);
          // Check if image loaded successfully
          const naturalWidth = await img.evaluate((el: HTMLImageElement) => el.naturalWidth);
          expect(naturalWidth).toBeGreaterThan(0);
        }
      }
    });

    test('should have no accessibility violations in CTAs', async ({ page }) => {
      const ctaButtons = page.locator('.cta-button');

      for (let i = 0; i < await ctaButtons.count(); i++) {
        const button = ctaButtons.nth(i);

        // Should have text content
        const text = await button.textContent();
        expect(text?.trim().length).toBeGreaterThan(0);

        // Should be keyboard accessible (either button or link)
        const tagName = await button.evaluate(el => el.tagName.toLowerCase());
        expect(['a', 'button']).toContain(tagName);
      }
    });
  });
});
