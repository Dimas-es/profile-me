'use client'

import dynamic from 'next/dynamic'
import { Loading } from './loading'

interface DynamicImportOptions {
  loading?: 'page' | 'section' | 'none'
  ssr?: boolean
}

export function dynamicImport<T extends React.ComponentType<any>>(
  importFunc: () => Promise<{ default: T }>,
  options: DynamicImportOptions = { loading: 'section', ssr: true }
) {
  const { loading = 'section', ssr = true } = options

  const LoadingComponent = () => {
    switch (loading) {
      case 'page':
        return <Loading size="lg" fullScreen />
      case 'section':
        return <Loading size="md" />
      default:
        return null
    }
  }

  return dynamic(importFunc, {
    loading: LoadingComponent,
    ssr
  })
}

// Example usage:
// const HeavyComponent = dynamicImport(() => import('./HeavyComponent'), { loading: 'section' }) 