import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import ProductCard from "../../../components/common/ProductCard";
import { GetAllProductDto } from "../../../../data/product.type.ts";
import * as ProductApi from "../../../../api/productApi.ts";
import LoadingContainer from "../../../components/common/LoadingContainer";

export function ProductShowcase() {
  const [products, setProducts] = useState<GetAllProductDto[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        const responseData = await ProductApi.getAllProduct();
        // Filter and take first 5 products where pid > 20
        setProducts(responseData.filter(dto => dto.pid > 20).slice(0, 5));
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className="bg-oyster py-10 px-2 dark:bg-darkcyan">
      <div className="mx-auto w-full max-w-screen-2xl px-4">
        <h2 className="text-newblue italic font-mono border-accent-content text-3xl mb-10 dark:text-lightyellow text-center">
          New Products
        </h2>

        {isLoading ? (
          <LoadingContainer />
        ) : products.length > 0 ? (
          <div className="flex flex-col items-center md:flex-row-reverse md:justify-center md:items-stretch gap-6 overflow-x-visible md:overflow-x-auto">
            {products.map((product) => (
              <ProductCard key={product.pid} getAllProductDto={product} />
            ))}
          </div>
        ) : (
          <div className="w-full text-center text-lg py-10">
            Something went wrong, please try again later!
          </div>
        )}

        <div className="flex mt-10 justify-center">
          <Link
            to="/products"
            className="btn h-10 w-50 bg-babyblue text-newblue dark:bg-newblue dark:text-lightyellow hover:scale-105 transition-transform"
            aria-label="View all products"
          >
            Shop All
          </Link>
        </div>
      </div>
    </section>
  );
}