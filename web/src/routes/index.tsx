import { createFileRoute } from '@tanstack/react-router'
import Auth from '../app/auth'

export const Route = createFileRoute('/')({
  component: Auth,
})