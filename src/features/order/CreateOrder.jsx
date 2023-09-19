import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import ButtonSm from "../../ui/ButtonSm";
import store from "../../store";
import { useSelector } from "react-redux";
import { clearCart, getCard, getTotalCartPrice } from "../cart/cartSlice";
import EmptyCart from "../cart/EmptyCart";
import { useState } from "react";
import { formatCurrency } from "../../utils/helpers";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

function CreateOrder() {
  const [priority, setPriority] = useState(false);
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const formErrors = useActionData();

  // const [withPriority, setWithPriority] = useState(false);
  const cart = useSelector(getCard);
  const username = useSelector((state) => state.user.username);
  const totalCartPrice = useSelector(getTotalCartPrice);
  const priorityPrice = priority ? totalCartPrice * 0.2 : 0;
  const totalPrice =  totalCartPrice + priorityPrice;
  if (!cart.length) return <EmptyCart />;

  return (
    <div className="mx-72 flex flex-col px-4 py-6">
      {/* <Form method="POST" action="/order/new"> */}
      <Form method="POST" className="flex flex-col">
        <div className="mb-10 flex items-center gap-x-2">
          <label className="font-vazir text-lg font-semibold sm:basis-40">
            نام و نام خانوادگی
          </label>
          <input
            className=" grow rounded-full p-2 font-vazir outline-none ring-1 ring-gray-200 transition-all duration-200 focus:ring-2 focus:ring-primary "
            type="text"
            name="customer"
            defaultValue={username}
            required
          />
        </div>

        <div className="mb-10 flex items-center gap-x-2">
          <label className="font-vazir text-lg font-semibold sm:basis-40">
            شماره تماس
          </label>
          <div className="grow">
            <input
              className="w-full rounded-full p-2 px-4 font-vazir outline-none ring-1 ring-gray-200 transition-all duration-200 focus:ring-2 focus:ring-primary "
              type="tel"
              name="phone"
              required
            />
            {formErrors?.phone && (
              <p className="mt-2 rounded-md bg-red-100 p-2 font-vazir text-sm text-red-700">
                {formErrors.phone}
              </p>
            )}
          </div>
        </div>

        <div className="mb-10 flex items-center gap-x-2">
          <label className="font-vazir text-lg font-semibold sm:basis-40">
            آدرس
          </label>
          <div className="grow">
            <input
              className=" w-full rounded-full p-2 px-4 font-vazir outline-none ring-1 ring-gray-200 transition-all duration-200 focus:ring-2 focus:ring-primary "
              type="text"
              name="address"
              required
            />
          </div>
        </div>

        <div className="mb-12 flex items-center gap-5 self-center">
          <input
            className="h-6 w-6 accent-secondary focus:outline-none focus:ring focus:ring-secondary focus:ring-offset-2"
            type="checkbox"
            name="priority"
            id="priority"
            value={priority}
            onChange={(e)=>setPriority(e.target.checked)}
          />
          <label htmlFor="priority" className="font-vazir">
            می خواهی سفارشت در اولویت قرار بگیرد؟
          </label>
        </div>

        <div className="text-center">
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <ButtonSm disabled={isSubmitting} type="primary">
            {isSubmitting ? "در حال ثبت" : `ثبت سفارش ( ${formatCurrency(totalPrice)} )`}
          </ButtonSm>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "true",
  };

  const errors = {};
  if (!isValidPhone(order.phone))
    errors.phone =
      "لطفا شماره تماس خود را با دقت وارد کنید تا در صورت نیاز با شما در ارتباط باشیم";

  if (Object.keys(errors).length > 0) return errors;

  // If everything is okay, create new order and redirect

  const newOrder = await createOrder(order);

  store.dispatch(clearCart());

  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
