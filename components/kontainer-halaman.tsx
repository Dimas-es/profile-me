import type { KontainerHalamanProps } from "@/types"

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
  return <div className="bg-main-primary">{children}</div>
}
