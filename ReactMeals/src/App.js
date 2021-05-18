import React from 'react'

import Landing from './Components/Landing'
import Header from './Components/UI/Header'
import FoodPurchases from './Components/Food/FoodPurchases'

import GlobalStyle from './assets/global'
import pamonhaImage from './assets/images/pamonha.jpg'
import { AppContainer, ImageContainer } from './appStyles'

function App() {
  return (
    <AppContainer>
      <Header />
      <ImageContainer>
        <img src={pamonhaImage} alt="Pizza" />
      </ImageContainer>
      <Landing
        title="Food order app"
        texts="It all started with a small bussiness and now we have a big cross country company!"
      />

      <FoodPurchases />
      <GlobalStyle />
    </AppContainer>
  )
}

export default App
