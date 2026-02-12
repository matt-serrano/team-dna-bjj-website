# Team DNA BJJ Website - Design System Documentation

## Overview
Modern, premium Brazilian Jiu-Jitsu gym website with a v0.dev-inspired aesthetic. Features light/dark mode, responsive design, and conversion-focused layouts.

## Color System

### Brand Colors
- **Electric Blue (Primary)**: `#0EA5E9` (light) / `#06B6D4` (dark)
- **Deep Red (Alternative)**: `#DC2626` (light) / `#EF4444` (dark)

### Theme Tokens
Both light and dark modes use CSS custom properties:
- `--accent-primary`: Main brand color (blue by default)
- `--accent-primary-hover`: Hover state
- `--accent-primary-foreground`: Text on brand color

To switch to red accent, update `--accent-primary` in theme.css.

## Typography

### Hierarchy
- **Hero Headlines**: 4xl to 7xl (responsive)
- **Section Titles**: 3xl to 5xl
- **Card Titles**: xl to 2xl
- **Body Text**: base (16px)
- **Captions**: sm to xs

### Font Weight
- Headings: 700 (bold)
- Buttons/Labels: 500-600 (medium/semibold)
- Body: 400 (normal)

## Components

### Button
**Variants**: primary, secondary, outline, ghost
**Sizes**: sm, md, lg
**Features**: Hover lift effect, shadow transitions

### Card
**Variants**: elevated, bordered, flat
**Features**: Hover elevation, rounded corners (2xl), optional hover animation

### Chip
**Variants**: default, primary, outline
**Sizes**: sm, md
**Features**: Active state, pill shape

### Input/Textarea
**Features**: Focus ring with brand color, border transitions, error states

### Modal (TrialModal)
**Features**: Backdrop blur, centered, responsive, Radix Dialog

## Layout Patterns

### Responsive Breakpoints
- Mobile: < 768px (390px design target)
- Tablet: 768px - 1024px
- Desktop: > 1024px (1440px design target)

### Spacing Scale
- Section padding: py-20 lg:py-32
- Card padding: p-6 to p-8
- Gap spacing: gap-4 to gap-12 (responsive)

### Border Radius
- Small: rounded-lg (0.5rem)
- Medium: rounded-xl (0.75rem)
- Large: rounded-2xl (1rem)
- Extra Large: rounded-3xl (1.5rem)

## Pages

### Home
**Sections**:
1. Hero with gradient background
2. Social proof bar
3. Programs grid (4 cards)
4. Why DNA BJJ (6 benefit cards)
5. How it works (3 steps)
6. Testimonials (3 cards)
7. FAQ preview (accordion)
8. Final CTA with gradient

### Program Template
**Sections**:
1. Hero with side image
2. What you'll learn (bullet grid)
3. Benefits (icon cards)
4. Who it's for (chip tags)
5. Schedule & pricing (2-column cards)
6. CTA

### Schedule
**Features**:
- Day tabs (Monday-Sunday)
- Filter chips (Kids, Adult, Women's)
- Class cards with time, program, instructor
- Book trial CTA per class

### Pricing
**Features**:
- Billing toggle (Monthly/6-Month/Yearly)
- 3-tier pricing cards
- Popular badge on Premium
- Feature comparison table

### Team
**Features**:
- Coach cards with image, rank, specialty
- Hover image scale effect
- Philosophy section

### Contact
**Features**:
- Contact info cards with icons
- Contact form
- Map placeholder
- Hours of operation

### FAQ
**Features**:
- Categorized questions (5 categories)
- Accordion UI (Radix)
- Numbered category headers

## Interactions

### Hover Effects
- Cards: Lift and shadow increase
- Buttons: Color darken, shadow expand
- Links: Color change to brand color

### Animations
Motion/React used for:
- Fade in on scroll (sections)
- Stagger animations (card grids)
- Smooth transitions

### Theme Toggle
- Persists to localStorage
- Respects system preference
- Smooth transition between modes

## Conversion Features

### CTAs
**Primary**: "Book a Free Trial"
- Appears in header
- Hero sections on all pages
- Trial modal with form

**Secondary**: 
- "View Schedule"
- "Contact Us"
- "Explore Program"

### Trust Signals
- Social proof bar
- Testimonials with 5-star ratings
- Coach credentials
- FAQ section

## Dark Mode Design

### Enhancements
- Deeper shadows removed (replaced with subtle borders)
- Brand colors adjusted for better contrast
- Glassmorphism effects on cards
- Gradient backgrounds more subtle

## Accessibility

- Semantic HTML
- Focus states on interactive elements
- ARIA labels where needed
- Color contrast meets WCAG AA
- Keyboard navigation support (Radix primitives)

## Mobile Optimizations

- Hamburger menu on mobile
- Stacked layouts on small screens
- Touch-friendly button sizes (min 44x44)
- Reduced motion respected
- Optimized image loading

## Performance Considerations

- Lazy loading with scroll animations
- Optimized images from Unsplash
- CSS transitions (GPU accelerated)
- Code splitting by route

## Future Enhancements

Potential additions:
- Video backgrounds in hero
- Gallery lightbox
- Blog system
- Member portal
- Online class booking integration
- Payment processing
