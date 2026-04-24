---
name: Aspirant Excellence
colors:
  surface: '#faf8ff'
  surface-dim: '#d9d9e5'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3fe'
  surface-container: '#ededf9'
  surface-container-high: '#e7e7f3'
  surface-container-highest: '#e1e2ed'
  on-surface: '#191b23'
  on-surface-variant: '#434655'
  inverse-surface: '#2e3039'
  inverse-on-surface: '#f0f0fb'
  outline: '#737686'
  outline-variant: '#c3c6d7'
  surface-tint: '#0053db'
  primary: '#004ac6'
  on-primary: '#ffffff'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#b4c5ff'
  secondary: '#4b41e1'
  on-secondary: '#ffffff'
  secondary-container: '#645efb'
  on-secondary-container: '#fffbff'
  tertiary: '#943700'
  on-tertiary: '#ffffff'
  tertiary-container: '#bc4800'
  on-tertiary-container: '#ffede6'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#e2dfff'
  secondary-fixed-dim: '#c3c0ff'
  on-secondary-fixed: '#0f0069'
  on-secondary-fixed-variant: '#3323cc'
  tertiary-fixed: '#ffdbcd'
  tertiary-fixed-dim: '#ffb596'
  on-tertiary-fixed: '#360f00'
  on-tertiary-fixed-variant: '#7d2d00'
  background: '#faf8ff'
  on-background: '#191b23'
  surface-variant: '#e1e2ed'
typography:
  h1:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  h2:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  h3:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: 0em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0em
  label-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.02em
  button:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.01em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  container-max: 1280px
  gutter: 24px
---

## Brand & Style

This design system is built on the pillars of accessibility, clarity, and aspiration. Targeting students from diverse economic backgrounds, the UI removes visual noise to minimize cognitive load, ensuring that the path to learning is frictionless. The style merges **Modern Minimalism** with **Subtle Glassmorphism** to create a "premium-lite" feel—it looks sophisticated and high-end but remains deeply intuitive and friendly. 

The emotional response should be one of calm confidence. By utilizing expansive whitespace and a soft, airy palette, the platform transforms the often-stressful experience of competitive exam preparation into an organized, manageable journey. It feels less like a daunting institutional tool and more like a supportive personal mentor.

## Colors

The palette is anchored by a high-trust **Soft Blue** primary and a deep **Indigo** secondary, creating a professional academic atmosphere. The background remains a cool, off-white (#F8FAFC) to reduce eye strain during long study sessions. 

The **Green** accent is used strategically for "success states," progress completion, and "correct answer" feedback, providing positive reinforcement. **Error Red** is reserved strictly for critical alerts and incorrect attempts. For glassmorphic elements, use a high-transparency white with a 12px-20px backdrop blur to maintain legibility while adding depth.

## Typography

This design system utilizes **Inter** for its exceptional readability on digital screens and its neutral, systematic character. The hierarchy is intentionally "high," meaning there is a significant contrast between headlines and body text to help students scan content quickly. 

Headlines use tighter letter-spacing and heavier weights to anchor sections, while body text uses a generous 1.6x line height to improve reading stamina during complex lessons. All labels and functional text use a medium weight to ensure they are distinguishable from content.

## Layout & Spacing

The design system employs a **12-column fixed grid** for desktop, centering the content to create a focused, premium feel. For tablet and mobile, the grid transitions to a fluid model with 16px lateral margins. 

The spacing rhythm is strictly based on an **8px linear scale**. Use "lg" (48px) spacing between major sections and "md" (24px) for padding within cards. This generous use of space prevents the interface from feeling cluttered, which is vital for students dealing with dense educational material.

## Elevation & Depth

Depth is achieved through **Ambient Shadows** and **Tonal Layers** rather than heavy borders. 
- **Level 1 (Cards):** Use a very soft, diffused shadow: `0 4px 20px rgba(37, 99, 235, 0.04)`.
- **Level 2 (Modals/Overlays):** Use a slightly more pronounced shadow with a hint of the primary color: `0 12px 40px rgba(37, 99, 235, 0.08)`.
- **Glassmorphism:** Navigation bars and floating action panels use a 70% white fill with a `backdrop-filter: blur(16px)` and a subtle 1px white border (10% opacity) to create a sense of lightness and layering without adding visual weight.

## Shapes

The shape language is friendly and modern. A standard corner radius of **8px (0.5rem)** is used for interactive elements like buttons and input fields. Larger containers and cards use **16px (1rem)** to soften the overall appearance of the platform. Elements should never have sharp 90-degree corners, as rounded corners are perceived as more approachable and less intimidating for younger learners.

## Components

- **Buttons:** Primary buttons use a solid #2563EB fill with white text and a subtle 8px radius. Secondary buttons should be "ghost" style with an Indigo outline.
- **Input Fields:** Use a subtle light gray background (#F1F5F9) instead of a heavy border. On focus, transition to a white background with a 1px Blue border and a soft glow.
- **Cards:** White background, 16px radius, and Level 1 ambient shadow. Content within cards should have a minimum of 24px internal padding.
- **Progress Bars:** Use the Accent Green for completed sections. The track should be a very light version of the primary blue (#DBEAFE).
- **Chips:** Used for "Subject Tags" (Physics, Chemistry, Biology). These should have a light tinted background (e.g., light blue background with dark blue text) and a pill-shaped radius.
- **Study Mode Toggle:** A prominent glassmorphic toggle that simplifies the UI further by hiding sidebars to help the student focus on a specific video or text.