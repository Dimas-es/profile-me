"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function UtilityClasses() {
  const colorClasses = [
    {
      category: "Background Colors",
      classes: [
        { name: "bg-supabase-slate-darkest", value: "hsl(0deg 0% 7.06%)", description: "Main page background" },
        { name: "bg-supabase-slate-darker", value: "hsl(0deg 0% 9.02%)", description: "Card/component background" },
        { name: "bg-supabase-slate-dark", value: "hsl(0deg 0% 14.12%)", description: "Secondary elements" },
        { name: "bg-supabase-green", value: "hsl(154.9deg 100% 19.22%)", description: "Primary buttons" },
        { name: "bg-supabase-green-hover", value: "hsl(154.9deg 100% 22%)", description: "Button hover state" },
      ],
    },
    {
      category: "Text Colors",
      classes: [
        { name: "text-supabase-slate-lightest", value: "hsl(0deg 0% 98.04%)", description: "Primary text" },
        { name: "text-supabase-green-light", value: "hsl(153.1deg 60.17% 52.75%)", description: "Accent text" },
        { name: "text-supabase-slate-light", value: "hsl(0deg 0% 53.73%)", description: "Secondary text" },
      ],
    },
    {
      category: "Border Colors",
      classes: [
        { name: "border-supabase-slate-medium", value: "hsl(0deg 0% 17.25%)", description: "Default borders" },
        { name: "border-supabase-green", value: "hsl(154.9deg 100% 19.22%)", description: "Accent borders" },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-supabase-slate-darkest p-6 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-supabase-slate-lightest">Tailwind Utility Classes</h1>
        <p className="text-supabase-slate-light max-w-2xl mx-auto">
          Complete reference for all custom Tailwind CSS utility classes in the Supabase color palette.
        </p>
      </div>

      {colorClasses.map((category) => (
        <Card key={category.category} className="bg-supabase-slate-darker border-supabase-slate-medium">
          <CardHeader>
            <CardTitle className="text-supabase-slate-lightest">{category.category}</CardTitle>
            <CardDescription className="text-supabase-slate-light">
              Available utility classes for {category.category.toLowerCase()}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {category.classes.map((classItem) => (
                <div
                  key={classItem.name}
                  className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-supabase-slate-darkest rounded-lg border border-supabase-slate-medium"
                >
                  <div className="space-y-1">
                    <code className="text-supabase-green-light font-mono text-sm bg-supabase-slate-dark px-2 py-1 rounded">
                      {classItem.name}
                    </code>
                    <p className="text-supabase-slate-light text-sm">{classItem.description}</p>
                  </div>
                  <div className="flex items-center space-x-3 mt-2 md:mt-0">
                    <div
                      className="w-12 h-12 rounded border border-supabase-slate-medium"
                      style={{ backgroundColor: classItem.value }}
                    ></div>
                    <code className="text-supabase-slate-light text-xs font-mono">{classItem.value}</code>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}

      {/* Usage Examples */}
      <Card className="bg-supabase-slate-darker border-supabase-slate-medium">
        <CardHeader>
          <CardTitle className="text-supabase-slate-lightest">Usage Examples</CardTitle>
          <CardDescription className="text-supabase-slate-light">
            Code examples showing how to use these utility classes
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-supabase-slate-lightest font-semibold">Basic Layout</h3>
            <pre className="bg-supabase-slate-darkest p-4 rounded-lg border border-supabase-slate-medium overflow-x-auto">
              <code className="text-supabase-green-light text-sm">
                {`<div className="bg-supabase-slate-darkest min-h-screen">
  <header className="bg-supabase-slate-darker border-b border-supabase-slate-medium">
    <nav className="text-supabase-slate-lightest p-4">
      Navigation content
    </nav>
  </header>
  <main className="p-6">
    <h1 className="text-supabase-slate-lightest text-3xl font-bold">
      Page Title
    </h1>
    <p className="text-supabase-slate-light mt-2">
      Supporting text content
    </p>
  </main>
</div>`}
              </code>
            </pre>
          </div>

          <div className="space-y-4">
            <h3 className="text-supabase-slate-lightest font-semibold">Interactive Components</h3>
            <pre className="bg-supabase-slate-darkest p-4 rounded-lg border border-supabase-slate-medium overflow-x-auto">
              <code className="text-supabase-green-light text-sm">
                {`<button className="bg-supabase-green hover:bg-supabase-green-hover 
                   text-supabase-slate-lightest px-4 py-2 rounded-lg 
                   transition-colors duration-200">
  Primary Action
</button>

<button className="bg-supabase-slate-dark hover:bg-supabase-slate-medium 
                   text-supabase-slate-lightest border border-supabase-slate-medium 
                   px-4 py-2 rounded-lg transition-colors duration-200">
  Secondary Action
</button>`}
              </code>
            </pre>
          </div>

          <div className="space-y-4">
            <h3 className="text-supabase-slate-lightest font-semibold">Responsive Design</h3>
            <pre className="bg-supabase-slate-darkest p-4 rounded-lg border border-supabase-slate-medium overflow-x-auto">
              <code className="text-supabase-green-light text-sm">
                {`<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <div className="bg-supabase-slate-darker border border-supabase-slate-medium 
                  rounded-lg p-4 hover:border-supabase-green transition-colors">
    <h3 className="text-supabase-slate-lightest font-semibold mb-2">
      Card Title
    </h3>
    <p className="text-supabase-slate-light text-sm">
      Card description text
    </p>
    <a href="#" className="text-supabase-green-light hover:text-supabase-green 
                           inline-block mt-3 text-sm transition-colors">
      Learn more →
    </a>
  </div>
</div>`}
              </code>
            </pre>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
