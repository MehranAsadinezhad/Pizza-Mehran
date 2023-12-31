// Test ID: IIDSAT

import OrderItem from "./OrderItem";
import { useLoaderData } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";
import ButtonSm from "../../ui/ButtonSm";

function Order() {
  const order = useLoaderData();

  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const {
    id,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;

  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="mx-4 my-5 lg:my-8 flex flex-col">
      <div className="flex flex-wrap items-center justify-between">
        <h2 className="font-vazir text-lg font-semibold">سفارش #{id}</h2>
        {priority && (
          <span className="rounded-full lg:px-4 lg:py-2 bg-secondary px-3 py-1 font-vazir text-sm font-semibold uppercase tracking-wide text-light">
            در اولویت
          </span>
        )}
      </div>

      <div className="flex flex-wrap items-center lg:my-8 justify-between my-5 gap-2 bg-stone-200 px-6 py-5">
        <p className="font-vazir text-dark lg:text-base">
          {deliveryIn >= 0
            ? `فقط ${calcMinutesLeft(estimatedDelivery)} دقیقه باقی مانده 😃`
            : "سفارش شما باید رسیده باشد !"}
        </p>
        <p className="font-vazir text-sm text-dark lg:text-base">
          (تخمین زمان تحویل : {formatDate(estimatedDelivery)})
        </p>
      </div>

      <ul className="dive-stone-200 divide-y border-b border-t">
        {cart.map((item) => (
          <OrderItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className="space-y-2 bg-stone-200 my-5 lg:my-8 px-6 py-5 text-center">
        <p className="font-vazir lg:text-base text-sm font-semibold text-dark">
          مجموع هزینه پیتزا : {formatCurrency(orderPrice)}
        </p>
        {priority && (
          <p className="font-vazir lg:text-base text-sm font-semibold text-dark">
            هزینه ی اولویت : {formatCurrency(priorityPrice)}
          </p>
        )}
        <p className="font-vazir lg:text-lg font-bold">
          هزینه ی کل : {formatCurrency(orderPrice + priorityPrice)}
        </p>
      </div>
      <div className="text-center">
        <ButtonSm to="/">صفحه ی اصلی</ButtonSm>
      </div>
    </div>
  );
}

export async function loader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}

export default Order;
