import {useEffect, useState} from 'react';
import QuantitySelector from "../../../components/common/QuantitySelector";
import {ProductDetailsDto} from "../../../../data/product.type.ts";
import LoadingContainer from "../../../components/common/LoadingContainer";
import {useNavigate, useParams} from "@tanstack/react-router";
import * as ProductApi from "../../../../api/productApi.ts";

export default function ProductDetailContainer() {
  const {pid} = useParams({from: '/products/$pid'});
  const [productDetailsDto, setProductDetailsDto] = useState<ProductDetailsDto | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [showMaxQuantityAlert, setShowMaxQuantityAlert] = useState(false);

  const navigate = useNavigate({from: `/products/$pid`});

  const [quantity, setQuantity] = useState<number>(1);
  const quantityDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevState) => (
        prevState - 1
      ));
    }
  }

  const quantityIncrement = () => {
    if (productDetailsDto) {
      if (quantity < productDetailsDto.stock) {
        setQuantity(prev => prev + 1);
        setShowMaxQuantityAlert(false); // Hide alert if shown
      } else {
        setShowMaxQuantityAlert(true);
        // Hide the alert after 3 seconds
        setTimeout(() => setShowMaxQuantityAlert(false), 2000);
      }
    }
  };

  const getProductByPid = async () => {
    try {
      const responseData = await ProductApi.getProductByPid(pid);
      setProductDetailsDto(responseData);
      setIsLoading(false);
    } catch {
      navigate({to: "/error"})
    }
  }


  useEffect(() => {
    getProductByPid()
  }, []);

  const renderProductDetails = () => {
    if (isLoading || !productDetailsDto) {
      return (
        <LoadingContainer/>
      )
    } else {
      return (
        <>
          <div
            className="shadow-lg p-4 card w-full lg:w-1/2 h-[20rem] sm:h-[24rem] lg:h-[32rem] flex items-center justify-center overflow-hidden bg-white dark:bg-base-100">
            <img
              src={productDetailsDto.imageUrl}
              alt={productDetailsDto.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div
            className="shadow-lg card w-full lg:w-1/2 h-[20rem] sm:h-[24rem] lg:h-[32rem] flex flex-col justify-between bg-white dark:bg-base-100 p-6">
            <div className="flex flex-col gap-7">
              <h1 className="text-3xl font-bold text-newblue dark:text-lightyellow">
                {productDetailsDto.name}
              </h1>
              <p className="text-2xl font-semibold text-newblue dark:text-lightyellow">
                ${productDetailsDto.price.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                {productDetailsDto.description}
              </p>
              <QuantitySelector quantity={quantity} quantityDecrement={quantityDecrement}
                                quantityIncrement={quantityIncrement}/>

              {showMaxQuantityAlert && (
                <div role="alert" className="alert alert-warning fixed top-0 left-0 w-full z-50 rounded-none">
                  <div className="flex items-center gap-2 justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0 stroke-current" fill="none"
                         viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                    </svg>
                    <span>
                      {productDetailsDto.stock === 0
                        ? "None in stock!"
                        : `Maximum quantity reached! Only ${productDetailsDto.stock} available.`}
                    </span>
                  </div>
                </div>

              )}

              <span className="text-sm text-gray-500">
  {productDetailsDto.stock === 0
    ? "Currently not in stock"
    : productDetailsDto.stock - quantity > 0
      ? `${productDetailsDto.stock} available`
      : "That's the last one in stock!"}
</span>
            </div>

            {/* Add to Cart Button */}
            <button className="btn bg-babyblue text-newblue">
              Add to Cart
            </button>
          </div>

        </>

      )
    }
  }


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