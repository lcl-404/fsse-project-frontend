import {Link} from "@tanstack/react-router";

export default function BackToProductsNav() {
  return (
    <nav className="bg-babyblue text-newblue dark:text-lightyellow dark:bg-base-100">
      <div className="container mx-auto px-38 py-3">
        <Link to="/products" className="font-mono">
          ← Back to products
        </Link>
      </div>
    </nav>
  )
}