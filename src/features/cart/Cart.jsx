import React from 'react'
import { Link } from 'react-router-dom'

export default function Cart() {
  return (
    <div className='bg-dark h-14 text-light px-5 font-vazir text-xl flex items-center justify-between'>
      <Link>مشاهده سبد خرید</Link>
      <div className='flex items-center gap-x-5'>
        <h1>$12</h1>
        <h1>2 پیتزا</h1>
      </div>
    </div>
  )
}
