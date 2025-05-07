import { useEffect, useState } from "react";
import { useAuthStore } from "../../../../store/useAuthStore";

import { useNavigate } from "@tanstack/react-router";
import { CartItemDto } from "../../../../data/cartItem.type.ts";
import * as CartItemApi from "../../../../api/cartItemApi.ts";
import {useCartStore} from "../../../../store/useCartStore.ts";

export default function CartDropDown() {
  const loginUser = useAuthStore((state) => state.loginUser);
  const navigate = useNavigate();
  const [dtoList, setDtoList] = useState<CartItemDto[]>([]);
  const { cartUpdateTrigger, resetCart } = useCartStore();


  const fetchCart = async () => {
    if (loginUser) {
      try {
        const responseData = await CartItemApi.getUserCart();
        setDtoList(responseData);
      } catch (error) {
        console.error("Failed to fetch cart:", error);
        setDtoList([]);
      }
    }
  };

  useEffect(() => {
    if (!loginUser) {
      setDtoList([]);
      resetCart(); // Clear the update trigger
    }
  }, [loginUser, resetCart]);

  useEffect(() => {
    fetchCart();
  }, [loginUser, cartUpdateTrigger]);


  const totalQuantity = dtoList.reduce((sum, item) => sum + item.cartQuantity, 0);

  const calTotal = (dtoList: CartItemDto[]) => {
    return dtoList.reduce(
      (previousValue, cartItemDto) => previousValue + cartItemDto.cartQuantity * cartItemDto.price,
      0
    );
  };

  const renderCartSummary = () => {
    return (
      <>
        <span className="text-lg font-bold text-newblue">{totalQuantity.toLocaleString()} Items</span>
        <span className="text-cyanblue">Total: ${calTotal(dtoList).toLocaleString()}</span>
        <div className="card-actions">
          <button
            className="btn btn-block text-newblue hover:bg-babyblue dark:text-lightyellow dark:bg-darkcyan dark:hover:bg-newblue mt-3"
            onClick={() => navigate({ to: "/shoppingCart" })}
          >
            View cart
          </button>
        </div>
      </>
    );
  };

  const renderEmptyCart = () => {
    return (
      <>
        <span className="text-lg font-semibold text-newblue">Your cart is empty!</span>
        <span className="btn btn-block text-newblue hover:bg-babyblue dark:text-lightyellow dark:bg-darkcyan dark:hover:bg-newblue mt-3">
          Add products to see them here
        </span>
      </>
    );
  };

  const renderLoggedOutCart = () => {
    return (
      <>
        <span className="text-lg font-semibold text-newblue">Your cart is empty!</span>
        <span className="text-cyanblue text-sm">Login to see cart</span>
        <div className="card-actions">
          <button
            className="btn btn-block text-newblue hover:bg-babyblue dark:text-lightyellow dark:bg-darkcyan dark:hover:bg-newblue mt-3"
            onClick={() => navigate({ to: "/login" })}
          >
            Login
          </button>
        </div>
      </>
    );
  };

  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator text-newblue dark:text-lightyellow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <span className="badge badge-sm indicator-item bg-orange-400 text-oyster">
            {totalQuantity.toLocaleString()}
          </span>
        </div>
      </div>

      <div tabIndex={0} className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow">
        <div className="card-body">
          {loginUser ? (
            totalQuantity > 0 ? renderCartSummary() : renderEmptyCart()
          ) : (
            renderLoggedOutCart()
          )}
        </div>
      </div>
    </div>
  );
}