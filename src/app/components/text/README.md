# Typography & Text Components Guide

## Overview

This guide explains how to use the **semantic text components** to ensure all text in your Figma design:
- ✅ **Matches design exactly** - All colors, sizes, weights, and line heights match the Figma system
- ✅ **Is searchable** - Browser search (Ctrl+F) and search engines can find the text
- ✅ **Is accessible** - Screen readers understand the content hierarchy
- ✅ **Is semantic** - Proper HTML tags for meaning and SEO

---

## File Structure

```
src/
├── styles/
│   └── typography.ts                 # All text style definitions
├── app/components/text/
│   ├── SemanticText.tsx              # Reusable text components
│   ├── TextExamples.tsx              # Usage examples
│   └── README.md                     # This file
```

---

## Core Components

### 1. **Heading** - For titles and section headers
```tsx
import { Heading } from "@/app/components/text/SemanticText";

// Main page title (h1)
<Heading level={1} variant="4xl">
  Page Title
</Heading>

// Section heading (h2)
<Heading level={2} variant="4xl">
  Section Title
</Heading>

// Subsection (h3)
<Heading level={3} variant="xl">
  Subsection
</Heading>
```

**Available Variants:**
- `"4xl"` - Large main headings (text-4xl)
- `"3xl"` - Large white headings (text-3xl)
- `"xl"` - Medium headings (text-xl)
- `"dark900"` - Dark neutral headings
- `"purple800"` - Purple branded headings
- `"white4xl"` - White large headings

**Why it matters:**
- ✅ Uses semantic `<h1>` to `<h6>` tags
- ✅ Screen readers understand hierarchy
- ✅ Search engines crawl heading structure
- ✅ Text is searchable in browser

---

### 2. **BodyText** - For paragraphs and main content
```tsx
import { BodyText } from "@/app/components/text/SemanticText";

// Standard paragraph
<BodyText variant="lg">
  Your main content here
</BodyText>

// With whitespace control
<BodyText variant="lg" className="max-w-2xl">
  Longer paragraphs...
</BodyText>
```

**Available Variants:**
- `"lg"` - Large body text (neutral-700)
- `"base"` - Base body text (stone-500)
- `"lgRose"` - Rose-colored body text
- `"lgStone"` - Stone-colored large text
- `"light"` - Light weight body text
- `"extraLight"` - Extra light weight
- `"lgNeutral"` - Neutral large text
- `"white"` - White body text

**Why it matters:**
- ✅ Uses semantic `<p>` tags
- ✅ Matches all design colors and weights exactly
- ✅ Text is fully searchable
- ✅ Screen readers handle paragraphs properly

---

### 3. **LinkText** - For clickable links
```tsx
import { LinkText } from "@/app/components/text/SemanticText";

// Internal link
<LinkText variant="cta" href="/page">
  Learn more
</LinkText>

// External link with new tab
<LinkText 
  variant="cta" 
  href="https://example.com"
  target="_blank"
  rel="noopener noreferrer"
>
  Visit external site
</LinkText>
```

**Available Variants:**
- `"cta"` - Call-to-action (rose-950)
- `"ctaRed"` - Red CTA (red-700)
- `"linkBase"` - Base link (purple-950)
- `"loginLink"` - Login link (rose-950)
- `"lg"` - Large link (white)

**Why it matters:**
- ✅ Uses semantic `<a>` tag
- ✅ Search engines follow and index links
- ✅ Proper link semantics for screen readers
- ✅ Supports all accessibility features (title, target, rel)

---

### 4. **Caption** - For labels, metadata, footnotes
```tsx
import { Caption } from "@/app/components/text/SemanticText";

// Small label (generic)
<Caption variant="small">
  Posted on January 2, 2026
</Caption>

// Label for form input
<Caption as="label" htmlFor="email">
  Email Address
</Caption>

// Section caption
<Caption variant="caption">
  How will the work spread in the past and coming years
</Caption>
```

**Available Variants & Elements:**
- `variant="small"` + `as="span"` - Generic small text
- `variant="smallLight"` + `as="label"` - Light label text
- `variant="caption"` + `as="span"` - Caption/subtitle text
- `as="label"` - For form labels (use with `htmlFor`)

**Why it matters:**
- ✅ Uses semantic `<small>`, `<label>` tags
- ✅ Form labels associated with inputs for accessibility
- ✅ Metadata is still searchable
- ✅ Clear visual hierarchy

---

### 5. **MetadataText** - For dates, credits, footnotes
```tsx
import { MetadataText } from "@/app/components/text/SemanticText";

// Published date
<MetadataText 
  variant="extraLight"
  type="date"
  dateTime="2026-01-02"
>
  Posted on January 2, 2026
</MetadataText>

// Credit/author
<MetadataText variant="smallLight" type="credit">
  Design with ♥ by Adnan Akhras
</MetadataText>

// Footnote
<MetadataText variant="extraLight" type="footnote">
  Additional information
</MetadataText>
```

**Types:**
- `type="date"` - Uses semantic `<time>` tag with `dateTime` attribute
- `type="credit"` - Uses `<small>` tag
- `type="footnote"` - Uses `<small>` tag

**Why it matters:**
- ✅ `<time>` tag understood by browsers and search engines
- ✅ Metadata properly marked up for machines
- ✅ Text is searchable and accessible
- ✅ Dates are indexable with proper datetime format

---

### 6. **Statistic** - For numbers and statistics
```tsx
import { Statistic } from "@/app/components/text/SemanticText";

// Large statistic
<Statistic 
  number="40"
  label="millions job opening now"
  numberVariant="5xl"
  labelVariant="base"
/>
```

**Why it matters:**
- ✅ Pairs number with label semantically
- ✅ Uses aria-label for screen readers
- ✅ Numbers and labels are both searchable
- ✅ Structured data for search engines

---

### 7. **ButtonText** - For button labels (non-interactive)
```tsx
import { ButtonText } from "@/app/components/text/SemanticText";

// Inside a button element
<button className="bg-red-600 px-6 py-3">
  <ButtonText variant="register">
    Get Started
  </ButtonText>
</button>
```

**Note:** This is for the text *inside* buttons. The actual `<button>` element should be your interaction element.

---

### 8. **DisplayText** - For large decorative or display typography
```tsx
import { DisplayText } from "@/app/components/text/SemanticText";

// Large display number
<DisplayText variant="5xl">
  80
</DisplayText>

// Decorative display text
<DisplayText variant="5xlNeutral" role="presentation">
  Featured
</DisplayText>
```

**Variants:**
- `"5xl"` - Rose-100 display text
- `"5xlNeutral"` - Neutral-700 display text

---

## Implementation Guide for Home.tsx

### Step 1: Import Components
At the top of your Home.tsx file:

```tsx
import {
  Heading,
  BodyText,
  Caption,
  LinkText,
  MetadataText,
  Statistic,
} from "@/app/components/text/SemanticText";
```

### Step 2: Replace Text Components

**Before (Figma-generated, not searchable):**
```tsx
function WhyChooseUsSection() {
  return (
    <div>
      <div className="...">
        <p className="font-['Poppins:Regular',sans-serif] text-4xl text-neutral-800 ...">
          Why Choose us
        </p>
      </div>
    </div>
  );
}
```

**After (Semantic, searchable, accessible):**
```tsx
function WhyChooseUsSection() {
  return (
    <section>
      <Heading level={2} variant="4xl" className="mb-6">
        Why Choose us
      </Heading>
      
      <BodyText variant="lg">
        Career-oriented certifications
      </BodyText>
      <BodyText variant="lg">
        Online learning and exams
      </BodyText>
      <BodyText variant="lg">
        Structured certification pathways
      </BodyText>
    </section>
  );
}
```

### Step 3: Update Section Containers
Replace `<div>` with semantic sections:

```tsx
// ❌ Not semantic
<div className="...">
  <div className="...">Title</div>
  <div className="...">Content</div>
</div>

// ✅ Semantic
<section className="...">
  <Heading level={2} variant="4xl">Title</Heading>
  <BodyText variant="lg">Content</BodyText>
</section>
```

### Step 4: Navigation Structure
Replace Figma nav text with semantic links:

```tsx
// Navigation items
<nav>
  <LinkText variant="linkBase" href="/certifications">
    Certifications
  </LinkText>
  <LinkText variant="linkBase" href="/about">
    About
  </LinkText>
  <LinkText variant="linkBase" href="/insights">
    Insights
  </LinkText>
</nav>
```

### Step 5: Cards and Sections
Structure each card properly:

```tsx
{/* Feature Card */}
<article className="p-6 border rounded-lg">
  <Heading level={3} variant="xl">
    Career-oriented certifications
  </Heading>
  <BodyText variant="lg">
    Description here...
  </BodyText>
</article>
```

---

## Accessibility Checklist

- ✅ Use `<h1>` for page title, `<h2>` for sections, `<h3>` for subsections
- ✅ Use `<p>` for paragraphs, not `<div>`
- ✅ Use `<a>` for links, not `<button>`
- ✅ Use `<section>`, `<article>`, `<nav>` instead of nested `<div>`
- ✅ Use `<label>` with `htmlFor` for form fields
- ✅ Use `<time>` for dates with `dateTime` attribute
- ✅ All text uses Poppins font from typography system
- ✅ All colors match the design system (no custom colors)

---

## Search & SEO Benefits

1. **Text Crawlability**
   - All text in semantic HTML is crawled by search engines
   - No hidden or decorative text is missed

2. **Heading Structure**
   - H1 for main title (occurs once per page)
   - H2 for major sections
   - H3 for subsections
   - Clear hierarchy helps search ranking

3. **Link Following**
   - Search engines follow `<a>` tags
   - All CTAs are discoverable

4. **Metadata**
   - `<time>` tags help with date-based content
   - Proper semantic tagging helps machine understanding

5. **Browser Search (Ctrl+F)**
   - All text is findable
   - Users can search within the page

---

## Browser Compatibility

All components are built with standard React and Tailwind CSS:
- ✅ Works in all modern browsers
- ✅ No special polyfills needed
- ✅ Styling matches original Figma design
- ✅ Responsive and mobile-friendly

---

## Maintenance

To add new text styles:

1. Add to `typography.ts` in the `textStyles` object
2. Export if needed in a new getter function
3. Create new variant in relevant component
4. Use throughout components

Example:
```tsx
// In typography.ts
newStyle: {
  color: "text-custom-900",
  size: "text-2xl",
  weight: "font-bold",
  font: "font-['Poppins']",
  leading: "leading-8",
  className: "text-custom-900 text-2xl font-bold font-['Poppins'] leading-8",
}

// In SemanticText.tsx
<Heading variant="newStyle">Custom Heading</Heading>
```

---

## Examples

See `TextExamples.tsx` for complete working examples of:
- ✅ Hero sections
- ✅ Feature cards
- ✅ Contact sections
- ✅ Process steps
- ✅ Statistics sections
- ✅ Footer layouts
- ✅ Blog articles
- ✅ Certification cards

---

## Questions?

- All text styles match the Figma design provided at project start
- Typography is defined once, used everywhere (DRY principle)
- Components are tree-shakeable and small
- No performance impact - just semantically correct HTML + Tailwind

**Result:** Your website is now searchable, accessible, and design-perfect! 🚀
