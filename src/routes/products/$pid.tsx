import {createFileRoute} from "@tanstack/react-router";
import ProductDetail from "../../ui/page/ProductDetails";

export const Route = createFileRoute('/products/$pid')({
  component: ProductDetail,
})
