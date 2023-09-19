import React from 'react'
import { getMenu } from '../../services/apiRestaurant'
import { useLoaderData } from 'react-router-dom';
import MenuItem from "./MenuItem";

export default function Menu() {
  const menu = useLoaderData();

  return (
    <ul className='flex flex-col px-2'>
      {menu.map((pizza)=><MenuItem pizza={pizza} key={pizza.id}/>)}
    </ul>
  )
}

export async function loader(){
  const menu = await getMenu();
  return menu;
}