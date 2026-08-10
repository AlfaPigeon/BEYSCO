---
name: Nexus Integrator
colors:
  surface: '#f9f9fc'
  surface-dim: '#dadadc'
  surface-bright: '#f9f9fc'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f6'
  surface-container: '#eeeef0'
  surface-container-high: '#e8e8ea'
  surface-container-highest: '#e2e2e5'
  on-surface: '#1a1c1e'
  on-surface-variant: '#444650'
  inverse-surface: '#2f3133'
  inverse-on-surface: '#f0f0f3'
  outline: '#747781'
  outline-variant: '#c4c6d2'
  surface-tint: '#3f5c9e'
  primary: '#001842'
  on-primary: '#ffffff'
  primary-container: '#002b6b'
  on-primary-container: '#7895da'
  inverse-primary: '#b0c6ff'
  secondary: '#0060ac'
  on-secondary: '#ffffff'
  secondary-container: '#68abff'
  on-secondary-container: '#003e73'
  tertiary: '#151a1e'
  on-tertiary: '#ffffff'
  tertiary-container: '#2a2f33'
  on-tertiary-container: '#92969b'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d9e2ff'
  primary-fixed-dim: '#b0c6ff'
  on-primary-fixed: '#001945'
  on-primary-fixed-variant: '#244485'
  secondary-fixed: '#d4e3ff'
  secondary-fixed-dim: '#a4c9ff'
  on-secondary-fixed: '#001c39'
  on-secondary-fixed-variant: '#004883'
  tertiary-fixed: '#dfe3e8'
  tertiary-fixed-dim: '#c3c7cc'
  on-tertiary-fixed: '#171c20'
  on-tertiary-fixed-variant: '#42474b'
  background: '#f9f9fc'
  on-background: '#1a1c1e'
  surface-variant: '#e2e2e5'
typography:
  headline-xl:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
  button:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  section-padding: 120px
---

## Brand & Style
The brand personality for this design system is **Sophisticated, Visionary, and Methodical**. As a Technology Integrator, the UI must bridge the gap between complex AI infrastructure and human-centric decision-making. 

The aesthetic follows a **Corporate Modern** style with a focus on **Precision Minimalism**. This is achieved through expansive whitespace, high-contrast typography, and subtle technical accents like fine-line geometric patterns that echo the orbital motifs in the logo. The emotional response should be one of absolute trust, stability, and forward-thinking innovation.

## Colors
The palette is rooted in the deep "Midnight Navy" derived from the logo typography, symbolizing authority and depth.

- **Primary (#002B6B):** Used for core branding, primary actions, and deep backgrounds to anchor the layout.
- **Secondary (#4A90E2):** A bright "Orbital Blue" used for highlights, progress indicators, and active states, providing a high-tech energy.
- **Tertiary (#F0F4F9):** A "Cloud Tint" used for large surface areas and background containers to maintain a clean, airy feel.
- **Neutrals:** A range of grays from Charcoal (#1A1C1E) for body text to Slate (#64748B) for secondary information.

The default color mode is **Light**, prioritizing clarity and readability, though the system is architected to support a high-contrast dark mode for technical dashboards.

## Typography
The typography system uses a tri-font hierarchy to communicate both "Professionalism" and "Technical Prowess."

- **Hanken Grotesk** is used for headlines to provide a sharp, contemporary edge. It feels engineered and precise.
- **Inter** handles the heavy lifting of body copy, offering unparalleled readability for long-form technical documentation.
- **JetBrains Mono** is utilized sparingly for labels, metadata, and data points to emphasize the AI and integration aspect of the business.

Maintain generous line-heights to support the "white space" brand value. Headlines should use tighter letter-spacing to feel more impactful and "locked-in."

## Layout & Spacing
This design system utilizes a **12-column fixed grid** for desktop and a **4-column fluid grid** for mobile. 

The layout philosophy is defined by **Vertical Breathability**. High-level sections are separated by massive 120px padding blocks to ensure the user is never overwhelmed by information. Content should be grouped logically in "cards" or "modules" that respect a strictly 8px-based spacing scale. 

On mobile, margins compress to 20px, and complex data tables should reflow into card-based lists to maintain legibility.

## Elevation & Depth
Depth is conveyed through **Tonal Layering** and **Micro-Shadows** rather than heavy skeuomorphism. 

The background is typically the Tertiary "Cloud Tint." Elevated elements (cards, modals) use pure White (#FFFFFF). To separate them, use an extremely subtle ambient shadow: `0 4px 20px rgba(0, 43, 107, 0.04)`. Note the slight Primary color tint in the shadow to keep the palette cohesive.

For high-tech accents, use **Low-Contrast Outlines** (1px solid #E2E8F0) on secondary containers to define structure without adding visual weight.

## Shapes
The shape language is **Technical and Structured**. We use a "Soft" roundedness (4px - 8px) to avoid the UI feeling too clinical or sharp, while remaining firmly professional. 

Large-scale containers like "Feature Hero" sections should use a `rounded-xl` (12px) treatment, while functional elements like buttons and input fields use a standard `rounded-md` (4px). Interactive elements should never be fully pill-shaped, as that leans too "consumer-social" for an enterprise integrator.

## Components

### Buttons
- **Primary:** Solid Primary Navy with White text. Sharp 4px corners. High-contrast hover state (slight lighten).
- **Secondary:** Ghost style with Primary Navy border and text. 
- **Tertiary:** JetBrains Mono text with an arrow icon, no border.

### Input Fields
- White background with a 1px Slate border. On focus, the border transitions to Secondary Blue with a 2px outer glow (Secondary color at 10% opacity).

### Cards
- Pure White background, subtle 4px corner radius, and the defined ambient shadow. Used for case studies and service offerings.

### Data Chips
- Small, uppercase JetBrains Mono labels. Used for categorizing technology stacks (e.g., "AI", "CLOUDOPS"). Light Blue background with Dark Blue text.

### Geometric Patterns
- Use "Orbital Lines"—very thin, 0.5px light gray lines forming concentric circles or grids—as background watermarks to add a sense of "Architecture" to empty states or hero headers.