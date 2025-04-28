import { createFileRoute } from '@tanstack/react-router'
import Login from "../../ui/page/Login";

export const Route = createFileRoute('/login/')({
  component: Login,
})
