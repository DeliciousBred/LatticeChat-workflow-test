import { createFileRoute } from '@tanstack/react-router'
import Sidebar from '../components/app/sidebar'

function RouteComponent() {
  return (
    <main className="flex h-screen bg-(--bg-base) text-(--sea-ink) overflow-hidden">
      <Sidebar />
    </main>
  )
}

export const Route = createFileRoute('/app')({
  component: RouteComponent,
})
