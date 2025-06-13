/**
 * Utility functions for responsive design
 */

// Breakpoint values in pixels
export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
}

/**
 * Hook to detect current breakpoint
 * @returns Object with boolean values for each breakpoint
 */
export function useBreakpoints() {
  if (typeof window === "undefined") {
    return {
      isSm: false,
      isMd: false,
      isLg: false,
      isXl: false,
      is2xl: false,
      current: "xs",
    }
  }

  const width = window.innerWidth

  return {
    isSm: width >= breakpoints.sm,
    isMd: width >= breakpoints.md,
    isLg: width >= breakpoints.lg,
    isXl: width >= breakpoints.xl,
    is2xl: width >= breakpoints["2xl"],
    current:
      width >= breakpoints["2xl"]
        ? "2xl"
        : width >= breakpoints.xl
          ? "xl"
          : width >= breakpoints.lg
            ? "lg"
            : width >= breakpoints.md
              ? "md"
              : width >= breakpoints.sm
                ? "sm"
                : "xs",
  }
}

/**
 * Get responsive value based on breakpoint
 * @param values Object with values for each breakpoint
 * @param defaultValue Default value if no breakpoint matches
 * @returns The value for the current breakpoint
 */
export function getResponsiveValue(values: Record<string, any>, defaultValue: any = null) {
  const { current } = useBreakpoints()

  return values[current] || defaultValue
}
