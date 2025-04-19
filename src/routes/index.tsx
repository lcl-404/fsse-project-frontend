import {createFileRoute} from "@tanstack/react-router";
import NavList from "../ui/components/common/NavList";
import Landing from "../ui/components/page/landing";

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <>
    <NavList/>
   <Landing/>
  </>
)
}