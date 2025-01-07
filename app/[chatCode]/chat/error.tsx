'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      <h2 className="text-xl font-semibold text-[#111827] mb-4">Something went wrong!</h2>
      <button
        onClick={reset}
        className="px-4 py-2 bg-[#4F46E5] hover:bg-[#4F46E5]/90 text-white rounded-md"
      >
        Try again
      </button>
    </div>
  )
}

