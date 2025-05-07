import { useEffect, useState } from "react";
import QuantitySelector from "../../../components/common/QuantitySelector";
import { ProductDetailsDto } from "../../../../data/product.type.ts";
import LoadingContainer from "../../../components/common/LoadingContainer";
import {Link, useNavigate, useParams} from "@tanstack/react-router";
import * as ProductApi from "../../../../api/productApi.ts";
import * as CartItemApi from "../../../../api/cartItemApi.ts";
import { EffectiveStockDto } from "../../../../data/effectiveStock.type.ts";
import {useAuthStore} from "../../../../store/useAuthStore.ts";
import {useCartStore} from "../../../../store/useCartStore.ts";


export default function ProductDetailContainer() {
  const { pid } = useParams({ from: "/products/$pid" });
  const [productDetailsDto, setProductDetailsDto] = useState<ProductDetailsDto>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [effectiveStock, setEffectiveStock] = useState<EffectiveStockDto>();
  const [isAddingToCart, setIsAddingToCart] = useState<boolean>(false);
  const [addToCartSuccess, setAddToCartSuccess] = useState<boolean>(false);
  const loginUser = useAuthStore((state) => state.loginUser);
  const { triggerCartUpdate } = useCartStore(); // 👈 Get the trigger



  const navigate = useNavigate({ from: `/products/$pid` });

  const [quantity, setQuantity] = useState<number>(1);
  const [stockIsLoading, setStockIsLoading] = useState(true);


  // Calculate effective stock (total stock minus items in cart)
  const getProductByPid = async () => {
    try {
      const responseData = await ProductApi.getProductByPid(pid);
      setProductDetailsDto(responseData);
      if (loginUser === null) {
        setStockIsLoading(false);
      }
      setIsLoading(false);
    } catch {
      navigate({ to: "/error" });
    }
  };


  const getEffectiveStock = async (pid: number) => {
    try {
      setStockIsLoading(true);
      const stock = await CartItemApi.getEffectiveStock(pid);
      setEffectiveStock(stock);
    } catch (err) {
      console.error("Could not fetch effective stock:", err);
    } finally {
      setStockIsLoading(false);
    }
  };


  useEffect(() => {
    if (pid) {
      getProductByPid(); // Fetch product details on initial load
    }
  }, [pid]);

  useEffect(() => {
    if (productDetailsDto && loginUser !== null) {
      getEffectiveStock(productDetailsDto.pid);
    }
  }, [productDetailsDto, loginUser]);

// Trigger once product details are fetched

  if (isLoading) {
    return <LoadingContainer />;
  }

  const availableStock = loginUser !== null
    ? (effectiveStock?.effectiveStock ?? 0)
    : (productDetailsDto?.stock ?? 0);


  const quantityDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevState) => prevState - 1);
    }
  };

  const quantityIncrement = () => {
    if (availableStock > 0) {
      if (quantity < availableStock) {
        setQuantity((prev) => prev + 1);
      }
    }
  };

  const handleAddToCart = async () => {
    try {
      setIsAddingToCart(true);
      if (productDetailsDto) {
        await CartItemApi.putCartItem(productDetailsDto.pid, quantity);
        await getEffectiveStock(productDetailsDto.pid); // 👈 Re-fetch effective stock after adding
      }
      triggerCartUpdate();
      setIsAddingToCart(false);
      setAddToCartSuccess(true);
      setTimeout(() => {
        setAddToCartSuccess(false);
      }, 1000);
    } catch (error) {
      console.error("Error occurred:", error);
      setIsAddingToCart(false);
      navigate({ to: "/error" });
    }
  };

  const renderAddToCartBtn = () => {
    if (!productDetailsDto) return null;

    if (availableStock < 1) {
      return (
        <button className="btn bg-babyblue text-newblue" disabled={true}>
          Out of Stock
        </button>
      );
    }

    if (addToCartSuccess) {
      return (
        <button className="btn bg-babyblue text-newblue" disabled={true}>
          Added!
        </button>
      );
    }

    if (isAddingToCart) {
      return (
        <button className="btn bg-babyblue text-newblue" disabled={true}>
          <span className="loading loading-dots loading-sm"></span>
          Adding
        </button>
      );
    }

    if (!loginUser){
      return (
        <Link to="/login">
        <button className="btn bg-babyblue text-newblue">
          Login to add to cart
        </button>
        </Link>
      );
    }

    return (
      <button className="btn bg-babyblue text-newblue" onClick={handleAddToCart}>
        Add to Cart
      </button>
    );
  };

  const renderProductDetails = () => {
    if (isLoading || !productDetailsDto) {
      return <LoadingContainer />;
    } else {
      return (
        <>
          <div className="shadow-lg p-4 card w-full lg:w-1/2 h-[20rem] sm:h-[24rem] lg:h-[32rem] flex items-center justify-center overflow-hidden bg-white dark:bg-base-100">
            <img
              src={productDetailsDto.imageUrl}
              alt={productDetailsDto.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="shadow-lg card w-full lg:w-1/2 h-[20rem] sm:h-[24rem] lg:h-[32rem] flex flex-col justify-between bg-white dark:bg-base-100 p-6">
            <div className="flex flex-col gap-7">
              <h1 className="text-3xl font-bold text-newblue dark:text-lightyellow">
                {productDetailsDto.name}
              </h1>
              <p className="text-2xl font-semibold text-newblue dark:text-lightyellow">
                ${productDetailsDto.price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                {productDetailsDto.description}
              </p>
              <label htmlFor="quantity" className="mr-3 font-medium">
                Quantity:
              </label>
              <QuantitySelector
                quantity={quantity}
                quantityDecrement={quantityDecrement}
                quantityIncrement={quantityIncrement}
                isLoading={isAddingToCart}
                disableIncrement={availableStock === 0 || quantity >= availableStock}
              />

              <span className="text-sm text-gray-500">
              {stockIsLoading
                ? "Checking stock..."
                : availableStock === 0
                  ? "Currently not in stock"
                  : availableStock - quantity > 0
                    ? `${availableStock} available`
                    : "That's the last one in stock!"}
              </span>


            </div>
            {/* Add to Cart Button */}
            {renderAddToCartBtn()}
          </div>
        </>
      );
    }
  };

  return (
    <div className="bg-oyster dark:bg-darkcyan min-h-3/4 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-6 items-center">
          {renderProductDetails()}
        </div>
      </div>
    </div>
  );
}
