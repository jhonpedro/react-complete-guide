import styled from 'styled-components'

export const AppContainer = styled.div``

export const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;

  img {
    margin-top: 8rem;
    z-index: -2;
    position: relative;

    object-fit: cover;
    width: 100%;
    height: 40vh;
  }
  ::after {
    content: '';
    display: block;
    position: absolute;
    z-index: -1;
    width: 110%;
    height: 100%;
    background-color: var(--color-background-darker);
    bottom: -85%;
    transform: rotate(-3deg);
  }
`
