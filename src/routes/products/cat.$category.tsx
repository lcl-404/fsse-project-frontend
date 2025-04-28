import { createFileRoute } from '@tanstack/react-router'
import ProductListing from "../../ui/page/ProductListing"

export const Route = createFileRoute('/products/cat/$category')({
  component: ProductListing,
})
