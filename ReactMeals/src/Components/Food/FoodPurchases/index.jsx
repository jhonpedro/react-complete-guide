import React from 'react'
import FoodItems from '../FoodItems'
import { FoodPurchasesContainer } from './style'

const foodItems = [
  {
    title: 'Pamonha',
    description:
      'One of the most delicious food in Oeste-Goiano, it is a corn based food.',
    price: 2.0,
  },
  {
    title: 'Cural',
    description:
      'The most delicious food in Oeste-Goiano, it is a corn based food, and it is like sweet porridge.',
    price: 2.0,
  },
  {
    title: 'Angu',
    description: 'One good option for who wants a salty corn based porridge.',
    price: 2.0,
  },
]

const FoodPurchases = () => {
  return (
    <FoodPurchasesContainer>
      {foodItems.map((item, index) => {
        return (
          <FoodItems
            key={index}
            name={item.title}
            description={item.description}
            price={item.price}
          />
        )
      })}
    </FoodPurchasesContainer>
  )
}

export default FoodPurchases
