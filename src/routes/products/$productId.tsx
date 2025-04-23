import {createFileRoute, useLocation} from "@tanstack/react-router";
import NavList from "../../ui/components/common/NavList";

export const Route = createFileRoute('/products/$productId')({
  component: ProductDetail,
})


function ProductDetail() {
  const {productId} = Route.useParams();
  const location = useLocation();

  return (
    <div className="bg-oyster h-screen">
      <NavList/>
      <h1>Product Listing Page!</h1>
      <h2>The pid is {productId}</h2>
      <h3>Pathname: {location.pathname} </h3>
    </div>
  )
}