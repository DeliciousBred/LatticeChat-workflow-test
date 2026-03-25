import { BsIncognito } from 'react-icons/bs'
import { EncryptedText } from '../../ui/encrypted-text'

export function EmptyState() {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
      {/* Ambient background layers */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.12),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(168,85,247,0.12),transparent_40%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.05))] dark:bg-[linear-gradient(to_bottom,transparent,rgba(255,255,255,0.03))]"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-xl flex-col items-center px-8 py-12 text-center">
        {/* Icon badge */}
        <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-3xl border border-(--line) bg-(--surface-strong) shadow-[0_12px_30px_rgba(0,0,0,0.08)] dark:shadow-[0_12px_30px_rgba(0,0,0,0.35)]">
          <BsIncognito className="text-[32px] text-zinc-500 dark:text-zinc-300" />
        </div>

        {/* Title */}
        <h1 className="mb-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          <EncryptedText
            text="Welcome to LatticeChat."
            encryptedClassName="text-(--text-secondary)"
            className="bg-linear-to-r from-cyan-400 via-purple-400 to-blue-500 bg-clip-text text-transparent animate-gradient"
            revealDelayMs={32}
          />
        </h1>

        <p className="text-zinc-400 text-base leading-relaxed">
          End-to-end encrypted messaging powered by
          <span className="text-zinc-200 font-semibold">
            {' '}
            post-quantum cryptography
          </span>
          .
        </p>

        <p className="text-black-500 text-sm leading-relaxed">
          Key exchange uses the
          <span className="text-purple-400 font-semibold">
            {' '}
            Kyber lattice algorithm
          </span>
          , designed to remain secure even against future quantum computers.
        </p>

        <div className="flex gap-4 justify-center pt-2 text-[12px] font-mono text-black-500">
          <span className="border border-zinc-800 px-2 py-1 rounded">E2EE</span>
          <span className="border border-zinc-800 px-2 py-1 rounded">
            Post-Quantum
          </span>
          <span className="border border-zinc-800 px-2 py-1 rounded">
            Kyber KEM
          </span>
        </div>
      </div>
    </div>
  )
}