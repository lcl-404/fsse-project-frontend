import { useEffect, useRef, useState } from "react";
import ProductCard from "../../../components/common/product/ProductCard.tsx";
import { GetAllProductDto } from "../../../../data/product.type.ts";
import {Link} from "@tanstack/react-router";
import * as ProductApi from "../../../../api/productApi.ts";
import LoadingContainer from "../../../components/common/LoadingContainer";

const SCROLL_AMOUNT_RATIO = 0.8;
type ScrollDirection = "left" | "right";

export function ProductCarousel() {
  const [getAllProductDtoList, setGetAllProductDtoList] = useState<GetAllProductDto[] | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const carouselRef = useRef<HTMLDivElement>(null);

  const getAllProduct = async () => {
    const responseData = await ProductApi.getAllProduct();
    setGetAllProductDtoList(responseData);
    setIsLoading(false);
  }

  useEffect(() => {
    getAllProduct()
  }, []);

  const scroll = (direction: ScrollDirection) => {
    const el = carouselRef.current;
    if (!el) return;

    const scrollAmount = el.clientWidth * SCROLL_AMOUNT_RATIO;
    el.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const renderProductCarousel = () => {
    if (isLoading || !getAllProductDtoList) {
      return <LoadingContainer/>;
    } else {
      return getAllProductDtoList.filter(dto => dto.pid>20)
        .map((dto) => (
        <div key={dto.pid} className="carousel-item w-[20rem] flex-shrink-0">
          <ProductCard getAllProductDto={dto} />
        </div>
      ));
    }
  };

  return (
    <div className="bg-oyster py-10 px-2 relative dark:bg-darkcyan">
      <div className="mx-auto w-full px-5">
        <h1 className="text-newblue italic font-mono border-accent-content text-3xl mb-10 dark:text-lightyellow text-center">
          New Products
        </h1>

        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 btn btn-circle bg-opacity-80 hover:bg-opacity-100"
            aria-label="Scroll left"
          >
            ❮
          </button>

          <div
            ref={carouselRef}
            className="carousel flex overflow-x-auto max-w-full px-2 scroll-smooth space-x-6 scrollbar-hide"
          >
            {renderProductCarousel()}
          </div>

          <button
            onClick={() => scroll("right")}
            className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 btn btn-circle bg-opacity-80 hover:bg-opacity-100"
            aria-label="Scroll right"
          >
            ❯
          </button>
        </div>
      </div>
      <div className="flex mt-10 justify-center">
        <Link to="/products">
        <button className="btn h-10 w-50 bg-babyblue text-newblue dark:bg-newblue dark:text-lightyellow">
          Shop All
        </button>
        </Link>
      </div>
    </div>
  );
}