type Props = {
  quantity: number,
  quantityDecrement: () => void,
  quantityIncrement: () => void,
  isLoading?: boolean
  disableIncrement?: boolean
}

export default function QuantitySelector({quantity, quantityDecrement, quantityIncrement, isLoading=false, disableIncrement=false}: Props) {
  return (
    <div className="flex flex-col items-start gap-4">
      <div className="flex border border-cyanblue rounded-3xl overflow-hidden">
        <button
          onClick={quantityDecrement}
          disabled={isLoading || quantity <= 1} // Disable if quantity is 1 or less
          className="selector-btn"
        >
          -
        </button>

        <div className="w-12 text-center border-x border-cyanblue bg-base-100 flex items-center justify-center">
          {isLoading ? (
            <span className="loading loading-spinner loading-xs"></span>
          ) : (
            <input
              type="number"
              id="quantity-input"
              placeholder="1"
              value={quantity}
              readOnly
              className="w-full text-center no-focus-ring bg-transparent"
            />
          )}
        </div>
        <button
          onClick={quantityIncrement}
          className="selector-btn"
          disabled={isLoading || disableIncrement}
        >
          +
        </button>

      </div>
    </div>
  )
}