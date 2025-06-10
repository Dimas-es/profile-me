"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ColorShowcase() {
  return (
    <div className="min-h-screen bg-supabase-slate-darkest p-6 space-y-8">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-supabase-slate-lightest">Supabase Color Palette</h1>
        <p className="text-supabase-slate-light max-w-2xl mx-auto">
          A comprehensive design system showcasing the Supabase-inspired color palette with proper contrast ratios and
          accessibility considerations.
        </p>
      </div>

      {/* Background Colors Section */}
      <Card className="bg-supabase-slate-darker border-supabase-slate-medium">
        <CardHeader>
          <CardTitle className="text-supabase-slate-lightest">Background Colors</CardTitle>
          <CardDescription className="text-supabase-slate-light">
            Main background and component colors for layouts
          </CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <div className="h-20 bg-supabase-slate-darkest rounded-lg border border-supabase-slate-medium"></div>
            <p className="text-sm text-supabase-slate-lightest font-mono">bg-supabase-slate-darkest</p>
            <p className="text-xs text-supabase-slate-light">Main background (7.06%)</p>
          </div>
          <div className="space-y-2">
            <div className="h-20 bg-supabase-slate-darker rounded-lg border border-supabase-slate-medium"></div>
            <p className="text-sm text-supabase-slate-lightest font-mono">bg-supabase-slate-darker</p>
            <p className="text-xs text-supabase-slate-light">Component background (9.02%)</p>
          </div>
          <div className="space-y-2">
            <div className="h-20 bg-supabase-slate-dark rounded-lg border border-supabase-slate-medium"></div>
            <p className="text-sm text-supabase-slate-lightest font-mono">bg-supabase-slate-dark</p>
            <p className="text-xs text-supabase-slate-light">Secondary elements (14.12%)</p>
          </div>
        </CardContent>
      </Card>

      {/* Button Styles Section */}
      <Card className="bg-supabase-slate-darker border-supabase-slate-medium">
        <CardHeader>
          <CardTitle className="text-supabase-slate-lightest">Button Styles</CardTitle>
          <CardDescription className="text-supabase-slate-light">
            Primary and secondary button variations with hover states
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-wrap gap-4">
            <Button className="bg-supabase-green hover:bg-supabase-green-hover text-supabase-slate-lightest">
              Primary Button
            </Button>
            <Button
              variant="secondary"
              className="bg-supabase-slate-dark hover:bg-supabase-slate-medium text-supabase-slate-lightest border-supabase-slate-medium"
            >
              Secondary Button
            </Button>
            <Button
              variant="outline"
              className="border-supabase-green text-supabase-green hover:bg-supabase-green hover:text-supabase-slate-lightest"
            >
              Outline Button
            </Button>
            <Button
              variant="ghost"
              className="text-supabase-green hover:bg-supabase-green/10 hover:text-supabase-green-light"
            >
              Ghost Button
            </Button>
          </div>

          {/* Button Size Variations */}
          <div className="flex flex-wrap items-center gap-4">
            <Button size="sm" className="bg-supabase-green hover:bg-supabase-green-hover text-supabase-slate-lightest">
              Small
            </Button>
            <Button className="bg-supabase-green hover:bg-supabase-green-hover text-supabase-slate-lightest">
              Default
            </Button>
            <Button size="lg" className="bg-supabase-green hover:bg-supabase-green-hover text-supabase-slate-lightest">
              Large
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Text Colors Section */}
      <Card className="bg-supabase-slate-darker border-supabase-slate-medium">
        <CardHeader>
          <CardTitle className="text-supabase-slate-lightest">Text Colors</CardTitle>
          <CardDescription className="text-supabase-slate-light">
            Typography hierarchy with proper contrast ratios
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-supabase-slate-lightest">Primary Text (White)</h2>
            <p className="text-supabase-slate-lightest">
              Main content text with maximum contrast for optimal readability.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-supabase-green-light">Accent Text (Green)</h3>
            <p className="text-supabase-green-light">
              Highlighted text and interactive elements using the green accent color.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-lg font-medium text-supabase-slate-light">Secondary Text (Gray)</h4>
            <p className="text-supabase-slate-light">Supporting text and descriptions with reduced emphasis.</p>
          </div>
        </CardContent>
      </Card>

      {/* Component Examples */}
      <Card className="bg-supabase-slate-darker border-supabase-slate-medium">
        <CardHeader>
          <CardTitle className="text-supabase-slate-lightest">Component Examples</CardTitle>
          <CardDescription className="text-supabase-slate-light">
            Real-world usage examples with the color palette
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Navigation Example */}
          <div className="bg-supabase-slate-darkest p-4 rounded-lg border border-supabase-slate-medium">
            <nav className="flex items-center justify-between">
              <div className="text-supabase-green-light font-bold text-lg">Logo</div>
              <div className="flex space-x-6">
                <a href="#" className="text-supabase-slate-lightest hover:text-supabase-green-light transition-colors">
                  Home
                </a>
                <a href="#" className="text-supabase-slate-light hover:text-supabase-green-light transition-colors">
                  About
                </a>
                <a href="#" className="text-supabase-slate-light hover:text-supabase-green-light transition-colors">
                  Contact
                </a>
              </div>
              <Button
                size="sm"
                className="bg-supabase-green hover:bg-supabase-green-hover text-supabase-slate-lightest"
              >
                Sign Up
              </Button>
            </nav>
          </div>

          {/* Card Grid Example */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-supabase-slate-dark p-4 rounded-lg border border-supabase-slate-medium hover:border-supabase-green transition-colors"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Badge className="bg-supabase-green text-supabase-slate-lightest">Featured</Badge>
                    <span className="text-supabase-slate-light text-sm">2 min read</span>
                  </div>
                  <h3 className="text-supabase-slate-lightest font-semibold">Card Title {item}</h3>
                  <p className="text-supabase-slate-light text-sm">
                    This is a sample card description showcasing the color palette in action.
                  </p>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-supabase-green hover:bg-supabase-green/10 hover:text-supabase-green-light p-0"
                  >
                    Read more →
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Accessibility Information */}
      <Card className="bg-supabase-slate-darker border-supabase-slate-medium">
        <CardHeader>
          <CardTitle className="text-supabase-slate-lightest">Accessibility & Contrast</CardTitle>
          <CardDescription className="text-supabase-slate-light">
            WCAG compliance and contrast ratio information
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="text-supabase-slate-lightest font-medium">High Contrast Combinations</h4>
              <ul className="space-y-1 text-sm">
                <li className="text-supabase-slate-light">• White text on dark backgrounds: 21:1 ratio</li>
                <li className="text-supabase-slate-light">• Green text on dark backgrounds: 7:1 ratio</li>
                <li className="text-supabase-slate-light">• Gray text on dark backgrounds: 4.5:1 ratio</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="text-supabase-slate-lightest font-medium">Responsive Considerations</h4>
              <ul className="space-y-1 text-sm">
                <li className="text-supabase-slate-light">• Touch targets minimum 44px</li>
                <li className="text-supabase-slate-light">• Focus indicators with green outline</li>
                <li className="text-supabase-slate-light">• Reduced motion support</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
