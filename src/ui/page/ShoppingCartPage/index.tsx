import NavList from "../../components/common/NavList";
import {useEffect, useState} from "react";
import {Link, useNavigate} from "@tanstack/react-router";
import * as CartItemApi from "../../../api/cartItemApi.ts"
import {CartItemDto} from "../../../data/cartItem.type.ts";
import LoadingContainer from "../../components/common/LoadingContainer";
import {useAuthStore} from "../../../store/useAuthStore.ts";
import ShoppingCartTable from "./component/ShoppingCartTable.tsx";
import Footer from "../../components/common/Footer";


export default function ShoppingCartPage (){

  const navigate = useNavigate({from: "/shoppingCart"});

  const loginUser = useAuthStore((state) => state.loginUser);

  const [dtoList, setDtoList] = useState<CartItemDto[] | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleQuantityChange = (pid:number, quantity:number) => {
    setDtoList(
        dtoList?.map((dto)=> {
          if (dto.pid === pid){
            dto.cartQuantity = quantity
          }
          return dto;
        }
      )
    )
  }

  const handleDelete = (pid:number)=>{
    setDtoList(
      dtoList?.filter((dto)=> (
        dto.pid !== pid)
      )
    )
  }

  useEffect(() => {
    const fetchUserCart = async () => {
      try {
        const responseData = await CartItemApi.getUserCart();
        setDtoList(responseData);
        setIsLoading(false);
      } catch {
        navigate({ to: "/error" });
      }
    };
    if (loginUser) {
      fetchUserCart();
    } else if (loginUser===null){
      navigate({ to: "/login" });
    }
  }, [loginUser, navigate]);

  const calTotal = (dtoList: CartItemDto[]) => {
    return dtoList.reduce((previousValue, cartItemDto) => (
      previousValue + cartItemDto.cartQuantity * cartItemDto.price
    ),0);
  }


  const renderShoppingCart = () => {
    if (!isLoading && dtoList) {
      if (dtoList.length === 0) {
        return (
          <div className="flex flex-col justify-center items-center h-[60vh]"> {/* ← Key changes here */}
            <p className="text-xl font-semibold mb-6">
              Your cart is empty!
            </p>
            <Link to="/products">
              <button className="btn px-8 bg-babyblue text-newblue dark:bg-cyanblue hover:scale-105 transition-transform">
                Shop for products
              </button>
            </Link>
        </div>
        );
      }

      return (
        <div className="overflow-x-auto w-full">
          <div> {/* This controls both table + total bar width */}

            {/* Table */}
            <ShoppingCartTable
              dtoList={dtoList}
              handleQuantityChange={handleQuantityChange}
              handleDelete={handleDelete}
            />

            {/* Total & Checkout */}
            <div className="flex justify-end p-8">
              <div className="flex flex-col items-end pe-12">
                  <span className="text-2xl font-semibold">Total: {calTotal(dtoList).toLocaleString()}</span>
                <button className="btn btn-lg w-fit mt-4 bg-babyblue text-newblue hover:bg-cyanblue">Checkout</button>
              </div>
            </div>

          </div>
        </div>
      );
    } else {
      return <LoadingContainer />;
    }
  };






  return(
    <div className="bg-oyster dark:bg-darkcyan min-h-screen flex flex-col">
      <NavList/>
      <div className="flex-grow py-5">
        {renderShoppingCart()}
      </div>
      <Footer/>

    </div>
  )

}