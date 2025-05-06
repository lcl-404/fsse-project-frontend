import {createFileRoute} from "@tanstack/react-router";

import Home from "../ui/page/HomePage";

export const Route = createFileRoute('/')({
  component: Home,
})

