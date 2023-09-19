import { useDispatch } from "react-redux";
import ButtonSm from "../../ui/ButtonSm";
import { formatCurrency } from "../../utils/helpers";
import { deleteItem } from "./cartSlice";
import DeleteButton from "../../ui/DeleteButton";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const dispatch = useDispatch();

  return (
    <li className="flex items-center justify-between py-3">
      <p className="font-semibold">
        {quantity}&times;{" "}
        <span className="font-vazir font-semibold">پیتزای</span> {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <DeleteButton pizzaId={pizzaId}>حذف</DeleteButton>
      </div>
    </li>
  );
}

export default CartItem;
