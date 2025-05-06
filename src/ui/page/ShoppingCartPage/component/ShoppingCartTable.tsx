import { CartItemDto } from "../../../../data/cartItem.type.ts";
import ShoppingCartTableRow from "./ShoppingCartTableRow.tsx";

type Props = {
  dtoList: CartItemDto[];
  handleQuantityChange:(pid:number, quantity:number) => void;
  handleDelete:(pid:number)=> void;
};

export default function ShoppingCartTable({ dtoList, handleQuantityChange, handleDelete }: Props) {
  return (
    <div className="overflow-x-auto flex justify-center">
      <table className="table w-full">
        <thead>
        <tr className="bg-babyblue dark:bg-darkcyan">
          <th></th>
          <th className="min-w-[200px]">Name</th>
          <th>Unit Price</th>
          <th className=""></th>
          <th className="min-w-[120px]">Subtotal</th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        {dtoList.map((dto) => (
         <ShoppingCartTableRow
         dto={dto}
         handleQuantityChange={handleQuantityChange}
         handleDelete={handleDelete}
         />
        ))}
        </tbody>
      </table>
    </div>
  );
}