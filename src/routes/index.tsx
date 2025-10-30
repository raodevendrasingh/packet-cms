import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <section className="py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-black text-white [letter-spacing:-0.05em]">
            Welcome
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mt-4">
            Your app is ready. Start building by editing
            <code className="ml-2 px-2 py-1 bg-lime-900/30 rounded text-lime-400">
              /src/routes/index.tsx
            </code>
            .
          </p>
        </div>
      </section>
    </div>
  )
}
