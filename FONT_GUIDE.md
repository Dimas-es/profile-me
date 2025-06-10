# Professional Font Guide

This guide explains the font choices and implementation for our design system.

## Font Selection

Our design system uses a carefully selected combination of system fonts for optimal performance and professional appearance:

### Headings (h1, h2)
- **Primary**: Georgia
- **Fallbacks**: Times New Roman, Times, serif
- **Characteristics**: Elegant, professional serif font with excellent readability for headings

### Subheadings and Body (h3-h6, p)
- **Primary**: System UI fonts (-apple-system, BlinkMacSystemFont, etc.)
- **Fallbacks**: Segoe UI, Roboto, Helvetica Neue, sans-serif
- **Characteristics**: Clean, modern sans-serif fonts optimized for screen reading

## Font Implementation

### System Font Stack

We use a "system font stack" approach that leverages the native fonts already installed on users' devices. This provides several benefits:

1. **Performance**: No external font files to download
2. **Familiarity**: Users see fonts they're already comfortable with
3. **Consistency**: Fonts match the user's operating system aesthetic
4. **Accessibility**: System fonts are designed for optimal readability

### Typography Scale

Our typography follows a professional scale with appropriate sizing and spacing:

| Element | Mobile | Tablet | Desktop | Weight | Line Height |
|---------|--------|--------|---------|--------|------------|
| h1      | 1.5rem | 1.875rem | 3rem    | 600    | 1.2        |
| h2      | 1.25rem | 1.5rem  | 2.25rem | 500    | 1.3        |
| h3      | 1.125rem | 1.25rem | 1.875rem | 600    | 1.4        |
| h4      | 1rem   | 1.125rem | 1.5rem  | 500    | 1.4        |
| p       | 0.875rem | 1rem   | 1rem    | 400    | 1.6        |

## Font Customization

If you want to use custom web fonts in production:

1. Add the font files to your project's `/public/fonts` directory
2. Create a `fonts.css` file with proper `@font-face` declarations
3. Import this CSS file in your `app/layout.tsx`
4. Update the font-family references in `globals.css`

Example `@font-face` declaration:

\`\`\`css
@font-face {
  font-family: 'CustomFont';
  src: url('/fonts/CustomFont-Regular.woff2') format('woff2'),
       url('/fonts/CustomFont-Regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
\`\`\`

## Accessibility Considerations

- Our font sizes scale appropriately on different devices
- Line heights are optimized for readability
- Font weights provide sufficient contrast
- Letter spacing is adjusted for optimal legibility
