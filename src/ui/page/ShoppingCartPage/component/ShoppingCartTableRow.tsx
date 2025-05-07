import {CartItemDto} from "../../../../data/cartItem.type.ts";
import QuantitySelector from "../../../components/common/QuantitySelector";
import * as CartItemApi from "../../../../api/cartItemApi.ts"
import {useState} from "react";
import {useNavigate} from "@tanstack/react-router";
import {useCartStore} from "../../../../store/useCartStore.ts";

type Props = {
  dto: CartItemDto
  handleQuantityChange:(pid:number, quantity:number) => void;
  handleDelete:(pid:number)=> void;

}

export default function ShoppingCartTableRow({dto, handleQuantityChange, handleDelete}:Props) {

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate({from:"/shoppingCart"});
  const { triggerCartUpdate } = useCartStore(); // 👈 Get the trigger



  const handleDecrement = async () => {
    if (dto.cartQuantity > 1) {
      setIsLoading(true);
      const newQuantity = dto.cartQuantity - 1;
      await CartItemApi.patchCartItem(dto.pid, newQuantity);
      handleQuantityChange(dto.pid, newQuantity);
      triggerCartUpdate();
      setIsLoading(false);
    }
  };

  const handleIncrement = async () => {
    if (dto.cartQuantity < dto.stock) {
      setIsLoading(true);
      const newQuantity = dto.cartQuantity + 1;
      await CartItemApi.patchCartItem(dto.pid, newQuantity);
      handleQuantityChange(dto.pid, newQuantity);
      triggerCartUpdate();
      setIsLoading(false);
    }
  };

  const handleDeleteClick  = async () => {
    setIsLoading(true);
    await CartItemApi.deleteCartItem(dto.pid);
    handleDelete(dto.pid)
    triggerCartUpdate();
    setIsLoading(false);
  }

  // ... other state and handlers ...

  const handleProductNameClick = () => {
    navigate({
      to: '/products/$pid',
      params: { pid: dto.pid.toString() }
    });
  };


  return (
    <tr className="align-middle">
      <td className="flex justify-center items-center p-4">
        <img src={dto.imageUrl}
             alt={dto.name}
             className="w-50 h-50 object-cover mx-auto rounded hover:cursor-pointer"
             onClick={handleProductNameClick}
        />
      </td>
      <td className="text-lg hover:cursor-pointer hover:underline"
      onClick={handleProductNameClick}>
        {dto.name}
      </td>
      <td className="text-lg">${dto.price.toLocaleString()}</td>
      <td className="text-lg"><QuantitySelector
        quantity={dto.cartQuantity}
        quantityDecrement={handleDecrement}
        quantityIncrement={handleIncrement}
        isLoading = {isLoading}
      /></td>
      <td className="text-lg">${(dto.cartQuantity * dto.price).toLocaleString()}</td>

      {/*delete button*/}
      <td>
        <button
          className="btn btn-ghost btn-md text-base-100 bg-babyblue hover:bg-cyanblue"
          onClick={handleDeleteClick}
          aria-label="Remove item"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-red"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5-4h4a1 1 0 011 1v1H9V4a1 1 0 011-1zm-7 4h18"
            />
          </svg>
        </button>
      </td>
    </tr>

  )
}