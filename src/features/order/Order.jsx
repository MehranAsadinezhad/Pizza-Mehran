// Test ID: IIDSAT

import OrderItem from './OrderItem';
import { useLoaderData } from 'react-router-dom';
import { getOrder } from '../../services/apiRestaurant';
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from '../../utils/helpers';

function Order() {
  const order = useLoaderData();

  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;

  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="space-y-8 px-4 py-6 flex flex-col mx-72 my-5">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-xl font-semibold font-vazir">سفارش #{id}</h2>

        <div className="space-x-2">
          {priority && (
            <span className="rounded-full bg-red-500 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-light">
              Priority
            </span>
          )}
          <span className="rounded-full bg-green-500 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-light">
            {status} order
          </span>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 bg-stone-200 px-6 py-5">
        <p className="font-vazir text-dark">
          {deliveryIn >= 0
            ? `فقط ${calcMinutesLeft(estimatedDelivery)} دقیقه باقی مانده 😃`
            : 'سفارش شما باید رسیده باشد !'}
        </p>
        <p className="text-sm font-vazir text-dark">
          (تخمین زمان تحویل : {formatDate(estimatedDelivery)})
        </p>
      </div>

      <ul className="dive-stone-200 divide-y border-b border-t">
        {cart.map((item) => (
          <OrderItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className="space-y-2 text-center bg-stone-200 px-6 py-5">
        <p className="text-sm font-semibold font-vazir text-dark">
          مجموع هزینه پیتزا : {formatCurrency(orderPrice)}
        </p>
        {priority && (
          <p className="text-sm font-semibold font-vazir text-dark">
            هزینه ی اولویت : {formatCurrency(priorityPrice)}
          </p>
        )}
        <p className="font-bold font-vazir">
          هزینه ی کل : {formatCurrency(orderPrice + priorityPrice)}
        </p>
      </div>
    </div>
  );
}

export async function loader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}

export default Order;
