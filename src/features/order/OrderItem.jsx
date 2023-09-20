import { formatCurrency } from "../../utils/helpers";

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice} = item;

  return (
    <li className="py-3">
      <div className="flex items-center lg:text-lg justify-between gap-4 font-semibold">
        <p>
          <span className="font-vazir font-bold">{quantity}&times; </span>پیتزای{" "}
          {name}
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

export default OrderItem;
