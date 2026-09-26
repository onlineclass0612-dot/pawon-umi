---
name: Pawon Umi Catering
colors:
  surface: '#fbf9f5'
  surface-dim: '#dbdad6'
  surface-bright: '#fbf9f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3ef'
  surface-container: '#efeeea'
  surface-container-high: '#eae8e4'
  surface-container-highest: '#e4e2de'
  on-surface: '#1b1c1a'
  on-surface-variant: '#4e4639'
  inverse-surface: '#30312e'
  inverse-on-surface: '#f2f0ed'
  outline: '#7f7667'
  outline-variant: '#d1c5b4'
  surface-tint: '#775a19'
  primary: '#775a19'
  on-primary: '#ffffff'
  primary-container: '#c5a059'
  on-primary-container: '#4e3700'
  inverse-primary: '#e9c176'
  secondary: '#665d58'
  on-secondary: '#ffffff'
  secondary-container: '#eaddd7'
  on-secondary-container: '#6a615c'
  tertiary: '#645e53'
  on-tertiary: '#ffffff'
  tertiary-container: '#aca497'
  on-tertiary-container: '#3f3a30'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdea5'
  primary-fixed-dim: '#e9c176'
  on-primary-fixed: '#261900'
  on-primary-fixed-variant: '#5d4201'
  secondary-fixed: '#ede0d9'
  secondary-fixed-dim: '#d1c4be'
  on-secondary-fixed: '#211a16'
  on-secondary-fixed-variant: '#4d4540'
  tertiary-fixed: '#eae1d3'
  tertiary-fixed-dim: '#cec5b8'
  on-tertiary-fixed: '#1f1b13'
  on-tertiary-fixed-variant: '#4b463c'
  background: '#fbf9f5'
  on-background: '#1b1c1a'
  surface-variant: '#e4e2de'
typography:
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '600'
    lineHeight: '1.25'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-md-mobile:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Source Serif 4
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Source Serif 4
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  body-sm:
    fontFamily: Source Serif 4
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: 0.05em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: 0.08em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 10px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  margin: 2rem
  space-xs: 0.375rem
  space-sm: 0.75rem
  space-md: 1.5rem
  space-lg: 2.5rem
  space-xl: 4rem
---

## Brand & Style

This design system establishes a refined, high-end digital presence for an artisanal catering service. The brand personality is rooted in understated luxury, culinary heritage, warm hospitality, and organic elegance. 

The target audience consists of discerning hosts, wedding planners, and corporate clients seeking bespoke dining experiences. The UI evokes feelings of anticipation, trust, exclusivity, and comforting warmth. 

We utilize a **Tactile / Minimalist** hybrid style: high-end editorial layouts paired with tactile surface finishes, delicate gold accents, and generous negative space reminiscent of fine stationery and artisanal menu design.

## Colors

The palette is anchored by a luxurious textured cream surface (`#FBF9F5`), offering a warm and welcoming canvas. Text and primary structural elements are rendered in a rich, deep espresso (`#2C2521`) to maintain exceptional legibility while avoiding the harshness of pure black. 

Warm champagne gold (`#C5A059`) serves as the primary accent, deployed selectively for interactive states, key borders, and focal headings. A secondary warm sand tone (`#E8DFD1`) provides subtle contrast for containers, dividers, and background segmentation.

## Typography

Typography bridges editorial sophistication and digital clarity. **Playfair Display** commands attention in headlines with its high-contrast editorial serifs. **Source Serif 4** provides an exceptionally readable, bookish narrative tone for body text, creating the feel of a curated menu or publication. **Plus Jakarta Sans** acts as a clean, geometric sans-serif for UI labels, pricing, and metadata, ensuring modern usability at small sizes.

## Layout & Spacing

We employ a **Fluid grid** system (12 columns on desktop, 6 on tablet, 4 on mobile) with generous outer margins to simulate the breathing room of high-end print collateral. 

Spacing is intentionally expansive to reinforce the luxury positioning. Section padding and component gaps scale gracefully using our tokenized rhythm (`space-xs` through `space-xl`), ensuring content never feels crowded. On mobile devices, outer margins collapse to 1rem while maintaining comfortable internal component spacing.

## Elevation & Depth

Depth is communicated through **Low-contrast outlines** and subtle **Tonal layers** rather than heavy drop shadows. 

Surfaces are separated by shifting between the base cream (`#FBF9F5`) and warm sand containers (`#E8DFD1`). Where borders are required, they use delicate 1px strokes in champagne gold (`#C5A059`) at reduced opacity or the deep espresso (`#2C2521`) at 15% tint. This keeps the interface feeling flat, curated, and paper-like.

## Shapes

The design system uses a **Soft** roundedness profile (`roundedness: 1`), featuring subtle radiuses (0.25rem for base elements, 0.5rem for cards, and 0.75rem for prominent containers). 

This gentle softening complements the botanical curves found in the brand's logo without slipping into casual or bubbly territory. Pill shapes (`3`) are strictly reserved for status badges and filtering chips.

## Components

### Buttons
- **Primary:** Champagne gold background (`#C5A059`) with deep espresso text (`#2C2521`), subtle hover darkening, and 0.25rem corner rounding.
- **Secondary:** Transparent background with a 1px champagne gold border and espresso text.
- **Ghost:** Text-only with an underline hover state.

### Input Fields
- Clean background surfaces in pure white or light cream, framed by a soft 1px border (`#E8DFD1`). Focus states elevate the border to champagne gold with a subtle 1px ring. Labels sit cleanly above fields in uppercase tracked-out `label-md`.

### Cards
- Used for menu items, packages, and testimonials. Rendered with a warm sand or cream background, soft 0.5rem rounding, and delicate 1px low-contrast borders. Generous internal padding allows imagery and typography to breathe.

### Chips & Badges
- Pill-shaped elements used for dietary tags (e.g., "Halal", "Gluten-Free", "Signature"). Soft tinted backgrounds with deep espresso text.

### Checkboxes & Radio Buttons
- Custom squared/circular indicators featuring champagne gold fill states when selected, paired with espresso borders.

### Specialized Components
- **Menu Item Rows:** Elegant two-column layouts featuring dotted leader lines connecting dish titles to prices.
- **Botanical Dividers:** Decorative rule lines accented with subtle leaf motifs or centered gold dots to separate editorial sections.