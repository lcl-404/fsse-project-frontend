import { createFileRoute } from '@tanstack/react-router'
import Login from "../../ui/page/LoginPage";

export const Route = createFileRoute('/login/')({
  component: Login,
})
