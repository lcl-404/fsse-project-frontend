import { createFileRoute } from '@tanstack/react-router'
import ProductListing from "../../ui/page/ProductListingPage"

export const Route = createFileRoute('/products/')({
  component: ProductListing,
})