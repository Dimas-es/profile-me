import ColorShowcase from "@/components/examples/color-showcase"
import UtilityClasses from "@/components/examples/utility-classes"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ColorSystemPage() {
  return (
    <div className="min-h-screen bg-supabase-slate-darkest">
      <Tabs defaultValue="showcase" className="w-full">
        <div className="bg-supabase-slate-darker border-b border-supabase-slate-medium sticky top-0 z-10">
          <div className="container mx-auto px-6 py-4">
            <TabsList className="bg-supabase-slate-dark border border-supabase-slate-medium">
              <TabsTrigger
                value="showcase"
                className="data-[state=active]:bg-supabase-green data-[state=active]:text-supabase-slate-lightest text-supabase-slate-light"
              >
                Color Showcase
              </TabsTrigger>
              <TabsTrigger
                value="utilities"
                className="data-[state=active]:bg-supabase-green data-[state=active]:text-supabase-slate-lightest text-supabase-slate-light"
              >
                Utility Classes
              </TabsTrigger>
            </TabsList>
          </div>
        </div>

        <TabsContent value="showcase" className="mt-0">
          <ColorShowcase />
        </TabsContent>

        <TabsContent value="utilities" className="mt-0">
          <UtilityClasses />
        </TabsContent>
      </Tabs>
    </div>
  )
}
