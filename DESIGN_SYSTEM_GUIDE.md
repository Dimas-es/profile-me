# Professional Design System Guide

## 🎨 Typography System

### Font Pairing Strategy
- **Primary Font**: Inter (Sans-serif) - Body text, UI elements, navigation
- **Secondary Font**: Playfair Display (Serif) - Headings, brand elements, emphasis
- **Monospace Font**: JetBrains Mono - Code, technical content

### Typography Classes
\`\`\`html
<!-- Headings -->
<h1 class="heading-1">Main Page Title</h1>
<h2 class="heading-2">Section Heading</h2>
<h3 class="heading-3">Subsection Heading</h3>
<h4 class="heading-4">Component Title</h4>
<h5 class="heading-5">Small Heading</h5>
<h6 class="heading-6">Label Heading</h6>

<!-- Body Text -->
<p class="body-text">Standard paragraph text</p>
<p class="body-text-large">Emphasized paragraph text</p>
<p class="body-text-small">Secondary information text</p>
\`\`\`

### Font Integration
\`\`\`css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;500;600;700&display=swap');
\`\`\`

## 🎯 Color System

### Primary Palette
- `bg-main`: hsl(0deg 0% 7.06%) - Main background
- `bg-component`: hsl(0deg 0% 9.02%) - Component backgrounds
- `bg-secondary`: hsl(0deg 0% 14.12%) - Secondary surfaces
- `text-primary`: hsl(0deg 0% 98.04%) - Primary text
- `text-secondary`: hsl(0deg 0% 53.73%) - Secondary text
- `text-accent`: hsl(153.1deg 60.17% 52.75%) - Accent text
- `action-primary`: hsl(154.9deg 100% 19.22%) - Primary actions
- `border-primary`: hsl(0deg 0% 17.25%) - Borders

### Usage Examples
\`\`\`html
<!-- Backgrounds -->
<div class="bg-bg-main">Main background</div>
<div class="bg-bg-component">Component background</div>
<div class="bg-bg-secondary">Secondary background</div>

<!-- Text Colors -->
<p class="text-text-primary">Primary text</p>
<p class="text-text-secondary">Secondary text</p>
<p class="text-text-accent">Accent text</p>

<!-- Borders -->
<div class="border border-border-primary">Primary border</div>
<div class="border border-border-secondary">Secondary border</div>
\`\`\`

## 🔘 Button System

### Button Variants
\`\`\`html
<!-- Primary Actions -->
<button class="btn-primary">Primary Action</button>
<button class="btn-secondary">Secondary Action</button>
<button class="btn-outline">Outline Button</button>
<button class="btn-ghost">Ghost Button</button>
<button class="btn-danger">Danger Action</button>

<!-- Button Sizes -->
<button class="btn-primary btn-sm">Small</button>
<button class="btn-primary btn-md">Medium</button>
<button class="btn-primary btn-lg">Large</button>
<button class="btn-primary btn-xl">Extra Large</button>
\`\`\`

## 📦 Card System

### Card Variants
\`\`\`html
<!-- Card Types -->
<div class="card-primary">Standard card content</div>
<div class="card-secondary">Secondary card content</div>
<div class="card-elevated">Elevated card content</div>
<div class="card-interactive">Interactive card content</div>
<div class="card-minimal">Minimal card content</div>
\`\`\`

## 📝 Input System

### Input Variants
\`\`\`html
<!-- Input Types -->
<input class="input-
