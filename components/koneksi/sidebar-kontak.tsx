import { Instagram, Twitter, Dribbble, Linkedin } from "lucide-react"

/**
 * Komponen sidebar untuk informasi kontak dan media sosial
 *
 * @component
 * @returns {JSX.Element} Komponen sidebar kontak
 *
 * @example
 * ```tsx
 * <SidebarKontak />
 * ```
 */
export function SidebarKontak() {
  return (
    <div className="space-y-6">
      {/* Contact/Follow Me Section */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h3 className="font-semibold text-gray-900 mb-4">Contact/Follow Me</h3>

        <div className="space-y-3">
          {/* Instagram */}
          <a
            href="#"
            className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors"
            aria-label="Follow on Instagram"
          >
            <Instagram className="h-5 w-5" />
            <span className="text-sm">@myinstagram</span>
          </a>

          {/* Twitter */}
          <a
            href="#"
            className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors"
            aria-label="Follow on Twitter"
          >
            <Twitter className="h-5 w-5" />
            <span className="text-sm">@mytwitter</span>
          </a>

          {/* Dribbble */}
          <a
            href="#"
            className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors"
            aria-label="Follow on Dribbble"
          >
            <Dribbble className="h-5 w-5" />
            <span className="text-sm">@mydribbble</span>
          </a>

          {/* LinkedIn */}
          <a
            href="#"
            className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors"
            aria-label="Connect on LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
            <span className="text-sm">@myportfolio</span>
          </a>
        </div>
      </div>

      {/* Additional Info Card */}
      <div className="bg-slate-600 text-white rounded-lg p-6">
        <h4 className="font-medium mb-2">Connections listed out</h4>
        <p className="text-sm text-slate-200">on separate tab</p>
      </div>
    </div>
  )
}
