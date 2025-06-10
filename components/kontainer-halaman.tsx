import type { KontainerHalamanProps } from "@/types/komponen"

/**
 * Komponen kontainer halaman yang membungkus konten dengan styling konsisten
 *
 * @component
 * @param {KontainerHalamanProps} props - Properti komponen
 * @param {ReactNode} props.children - Konten yang akan ditampilkan di dalam kontainer
 * @returns {JSX.Element} Komponen kontainer halaman
 *
 * @example
 * ```tsx
 * <KontainerHalaman>
 *   <KontenHalaman />
 * </KontainerHalaman>
 * ```
 */
export function KontainerHalaman({ children }: KontainerHalamanProps) {
  return <div className="bg-bg-component border-[2px] rounded-md shadow-sm p-3 sm:p-6" style={{ borderColor: 'hsl(0, 0%, 22%)' }}>{children}</div>
}
