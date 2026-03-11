import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/forgot')({
  component: ForgotPassword,
})

function ForgotPassword() {
  return (
    <main className="min-h-screen bg-black text-zinc-100 flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-lg rounded-2xl border border-zinc-800 bg-zinc-950/80 backdrop-blur-lg p-8 shadow-2xl space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold bg-linear-to-r from-cyan-400 via-purple-400 to-blue-500 bg-clip-text text-transparent">
            Forgot your password?
          </h1>
          <p className="text-sm text-zinc-400">
            We’ll help you reset it. Confirm below to proceed to the reset flow.
          </p>
        </div>

        <div className="rounded-lg border border-zinc-800 bg-zinc-900/60 p-4 text-sm text-zinc-300 space-y-2">
          <p>
            Make sure you still have access to your email. We’ll send a secure link
            to finish resetting your password.
          </p>
          <p className="text-xs text-zinc-500">
            If you remember your password, you can go back to sign in instead.
          </p>
        </div>

        <div className="space-y-3">
          <button className="w-full bg-zinc-100 text-black font-semibold py-3 rounded-lg hover:bg-zinc-200 active:translate-y-px transition">
            Yes, I forgot my password
          </button>
          <Link
            to="/"
            className="block w-full text-center text-sm text-zinc-400 hover:text-zinc-200 underline underline-offset-4 transition"
          >
            Go back to sign in
          </Link>
        </div>
      </div>
    </main>
  )
}