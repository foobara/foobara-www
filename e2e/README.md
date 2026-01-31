# E2E Responsivity Testing with Playwright

## Overview

This directory contains end-to-end tests for foobara-www, organized into 3 workstreams focused on testing responsivity across mobile (375px), tablet (768px), and desktop (1440px) viewports.

## Workstreams

### Workstream 1: Hero & Introduction
**File:** `workstream-1-hero-introduction.spec.ts`

Tests responsivity of:
- Hero section (heading, CTAs, hook text)
- Hero explanation section
- Example sections (SimpleCommandCodeDemo, ConnectorsDemos, GeneratorsDemo)

**Focus areas:**
- Layout and text readability
- Button accessibility and touch targets
- Code demo rendering
- Visual hierarchy consistency

### Workstream 2: Interactive Content
**File:** `workstream-2-interactive-content.spec.ts`

Tests responsivity of:
- Interactive flow diagram section
- Before/after comparison section
- Features section (command-centric + discoverability equation)

**Focus areas:**
- Interactive elements and animations
- Touch targets for mobile/tablet
- Visual comparisons and layouts
- Diagram scaling and aspect ratios

### Workstream 3: Engagement & Conversion
**File:** `workstream-3-engagement-conversion.spec.ts`

Tests responsivity of:
- Benefits section (why developers choose Foobara)
- Tools section (9 tool items)
- CTA section (final call-to-action)
- Community section (Discord, GitHub, YouTube links)

**Focus areas:**
- Grid layouts adaptation
- Link accessibility
- CTA button prominence
- Community links visibility
- Conversion flow optimization

## Running Tests

### Install Playwright browsers (first time only)
```bash
npx playwright install
```

### Run all E2E tests
```bash
npm run test:e2e
```

### Run specific workstream
```bash
npm run test:e2e:workstream1  # Hero & Introduction
npm run test:e2e:workstream2  # Interactive Content
npm run test:e2e:workstream3  # Engagement & Conversion
```

### Run with UI mode (recommended for development)
```bash
npm run test:e2e:ui
```

### Run in headed mode (see browser)
```bash
npm run test:e2e:headed
```

### View test report
```bash
npm run test:e2e:report
```

## Test Configuration

Tests run across 3 viewport configurations:
- **Mobile Chrome**: 375x667 (iPhone 12)
- **Tablet**: 768x1024 (iPad Pro)
- **Desktop**: 1440x900 (Desktop Chrome)

## What Gets Tested

### Responsivity
- Layout adaptation across viewports
- No horizontal overflow
- Proper stacking on mobile
- Side-by-side layouts on desktop

### Accessibility
- Touch target sizes (minimum 44x44px)
- Text readability (minimum font sizes)
- Keyboard accessibility
- External link security (rel="noopener noreferrer")

### Performance
- Layout shifts (CLS)
- Image loading
- Animation smoothness

### Visual
- Visual hierarchy consistency
- Grid layout adaptation
- Text overflow prevention
- Aspect ratio maintenance

## Development Workflow

1. **Write/update component code**
2. **Run tests in UI mode** to see live results: `npm run test:e2e:ui`
3. **Fix any failing tests** by adjusting CSS or component logic
4. **Run full test suite** before committing: `npm run test:e2e`
5. **View report** if needed: `npm run test:e2e:report`

## CI/CD Integration

Tests are configured to run in CI with:
- 2 retries on failure
- Single worker (sequential execution)
- HTML reporter output
- Screenshots on failure
- Trace on first retry

## Minimum Requirements

- Node.js 16+
- Playwright 1.58+
- React app running on http://localhost:3000

## Tips

- Use `test.skip()` for viewport-specific tests that don't apply
- Add `test.slow()` for tests that need extra time
- Use `page.pause()` in UI mode to debug
- Check `playwright-report/` for detailed failure info
- Screenshots are saved in `test-results/` on failure
