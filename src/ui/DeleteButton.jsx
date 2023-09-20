import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteItem } from '../features/cart/cartSlice';

export default function DeleteButton({children, pizzaId}) {
    const dispatch = useDispatch();
    return (
        <button
            onClick={() => dispatch(deleteItem(pizzaId))}
            className="rounded-full lg:px-4 lg:text-lg bg-secondary px-3 py-1 font-vazir text-white transition-all duration-200  hover:bg-lightRed"
        >
            {children}
        </button>
    );
}
