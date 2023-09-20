import { useDispatch, useSelector } from "react-redux";
import { formatCurrency } from "../../utils/helpers";
import DeleteButton from "../../ui/DeleteButton";
import UpdateItemQuantity from "./UpdateItemQuantity";
import { getCurrentQuantity } from "./cartSlice";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const currentQuantity = useSelector(getCurrentQuantity(pizzaId));

  return (
    <li className="flex items-center justify-between py-3">
      <p className="font-semibold lg:text-lg lg:font-bold ml-1">
        {quantity}&times;{" "}
        <span className="font-vazir lg:text-lg font-semibold">پیتزای</span> {name}
      </p>
      <div className="flex items-center gap-x-4 lg:gap-x-8 justify-between">
        <p className="text-sm font-bold lg:text-base">{formatCurrency(totalPrice)}</p>
        <UpdateItemQuantity pizzaId={pizzaId} currentQuantity={currentQuantity}/>
        <DeleteButton pizzaId={pizzaId}>حذف</DeleteButton>
      </div>
    </li>
  );
}

export default CartItem;
