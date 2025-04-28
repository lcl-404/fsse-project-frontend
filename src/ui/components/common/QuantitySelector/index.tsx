type Props = {
  quantity: number,
  quantityDecrement: () => void,
  quantityIncrement: () => void,
}

export default function QuantitySelector({quantity, quantityDecrement, quantityIncrement}:Props){
  return (
    <div className="flex flex-col items-start gap-4">
      <label htmlFor="quantity" className="mr-3 font-medium">
        Quantity:
      </label>
      <div className="flex border border-cyanblue rounded-2xl overflow-hidden">
        <button
          onClick={quantityDecrement}
          className="selector-btn"
        >
          -
        </button>
        <input
          type="number" id="quantity-input"
          placeholder="1"
          value={quantity}
          className="w-12 text-center border-x border-cyanblue no-focus-ring"
        />
        <button
          onClick={quantityIncrement}
          className="selector-btn"
        >
          +
        </button>
      </div>

    </div>
  )
}