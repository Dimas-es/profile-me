'use client'

import React from 'react'

interface LoadingProps {
  size?: 'sm' | 'md' | 'lg'
  fullScreen?: boolean
}

export const Loading: React.FC<LoadingProps> = ({ size = 'md', fullScreen = false }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  }

  const containerClasses = fullScreen
    ? 'fixed inset-0 flex items-center justify-center bg-white dark:bg-gray-900 bg-opacity-75 dark:bg-opacity-75 z-50'
    : 'flex items-center justify-center p-4'

  return (
    <div className={containerClasses}>
      <div className={`${sizeClasses[size]} animate-spin`}>
        <div className="w-full h-full border-4 border-gray-200 dark:border-gray-700 rounded-full border-t-blue-600 dark:border-t-blue-400" />
      </div>
    </div>
  )
}

export const PageLoading = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
    <Loading size="lg" />
  </div>
)

export const SectionLoading = () => (
  <div className="w-full h-32 flex items-center justify-center">
    <Loading size="md" />
  </div>
) 