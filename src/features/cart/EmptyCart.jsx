import React from 'react'
import ButtonSm from '../../ui/ButtonSm';


export default function EmptyCart() {
  return (
      <div className='flex flex-col-reverse mt-10 px-4 py-6 items-center gap-y-5'>
          <ButtonSm to="/menu">&larr; برگشت به منو</ButtonSm>
          <h1 className='font-vazir tracking-wider text-2xl text-secondary'>سبد خرید شما خالی است! </h1>
    </div>
  )
}
