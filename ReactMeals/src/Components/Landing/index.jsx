import React from 'react'

import { LandingContainer } from './styles'

const Landing = ({ texts, title }) => {
  return (
    <LandingContainer>
      <h2>{title}</h2>
      <p>{texts}</p>
    </LandingContainer>
  )
}

export default Landing
