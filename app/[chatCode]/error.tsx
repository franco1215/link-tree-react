'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h2 className="text-lg sm:text-xl font-semibold text-[#111827] mb-3 sm:mb-4 text-center">Something went wrong!</h2>
      <button
        onClick={reset}
        className="px-3 sm:px-4 py-1.5 sm:py-2 bg-[#4F46E5] hover:bg-[#4F46E5]/90 text-white rounded-md text-[13px] sm:text-sm transition-colors"
      >
        Try again
      </button>
    </div>
  )
}

