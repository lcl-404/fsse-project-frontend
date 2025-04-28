import { createFileRoute } from '@tanstack/react-router'
import ErrorPage from "../../ui/page/Error";

export const Route = createFileRoute('/error/')({
  component: ErrorPage,
})

