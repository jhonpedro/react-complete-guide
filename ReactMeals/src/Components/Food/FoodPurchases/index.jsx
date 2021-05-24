import React, { useEffect, useState } from 'react'
import useHTTPRequest from '../../../hooks/useHTTPRequest'
import FoodItems from '../FoodItems'
import { FoodPurchasesContainer } from './style'

const FoodPurchases = () => {
  const [foodItems, setFoodItems] = useState([])
  const [isLoading, error, request] = useHTTPRequest(
    'https://test-f860d-default-rtdb.firebaseio.com/meals.json'
  )

  useEffect(() => {
    request().then((response) => {
      const newFoodItems = []
      for (const key in response) {
        newFoodItems.push({
          id: key,
          title: response[key].title,
          description: response[key].description,
          price: response[key].price,
        })
      }

      setFoodItems(newFoodItems)
    })
  }, [request])

  return (
    <FoodPurchasesContainer>
      {isLoading && !error && <p>Loading...</p>}
      {error && <p>{error}</p>}
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
