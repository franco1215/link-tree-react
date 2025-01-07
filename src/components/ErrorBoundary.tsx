import React, { ErrorInfo, ReactNode } from 'react'

interface ErrorBoundaryProps {
  children: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
          <h2 className="text-xl font-semibold text-[#111827] mb-4">Something went wrong!</h2>
          <button
            onClick={() => this.setState({ hasError: false })}
            className="px-4 py-2 bg-[#4F46E5] hover:bg-[#4F46E5]/90 text-white rounded-md"
          >
            Try again
          </button>
        </div>
      )
    }

    return this.props.children
  }
}

