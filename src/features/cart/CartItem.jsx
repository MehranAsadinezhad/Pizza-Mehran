import ButtonSm from '../../ui/ButtonSm';
import { formatCurrency } from '../../utils/helpers';

function CartItem({ item }) {
    const { pizzaId, name, quantity, totalPrice } = item;

    return (
        <li className="py-3 flex items-center justify-between">
            <p className='font-semibold'>
                {quantity}&times; <span className='font-vazir font-semibold'>پیتزای</span> {name}
            </p>
            <div className="flex items-center justify-between sm:gap-6">
                <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
                <ButtonSm>حذف</ButtonSm>
            </div>
        </li>
    );
}

export default CartItem;

