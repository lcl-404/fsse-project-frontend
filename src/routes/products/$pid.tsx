import {createFileRoute} from "@tanstack/react-router";
import ProductDetail from "../../ui/page/ProductDetailsPage";

export const Route = createFileRoute('/products/$pid')({
  component: ProductDetail,
})
