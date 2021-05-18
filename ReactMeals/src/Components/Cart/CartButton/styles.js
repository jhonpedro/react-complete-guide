import styled, { css, keyframes } from 'styled-components'

export const CartButtonContainer = styled.div`
  background-color: var(--color-primary);
  border-radius: 3rem;
  padding: 1.5rem 7rem;
  cursor: pointer;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;
  color: inherit;
  font-weight: bold;

  svg {
    font-size: 2.5rem;
  }

  > span {
    margin: 0 1rem;
    font-size: 1.5rem;
  }
`

const fromUp = keyframes`
  0% {
    top: -2rem;
  }
  100% {
    top: 0.8rem;
  }
`

export const CartButtonCount = styled.strong`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;

  font-size: 2rem;

  height: 3.5rem;
  width: 3.5rem;

  padding: 0.5rem;
  font-weight: bold;
  border-radius: 4rem;
  background-color: var(--color-secondary);

  span {
    position: relative;
    overflow: hidden;
  }

  ${(props) => {
    return props.bump
      ? css`
          span {
            position: absolute;
            animation: ease ${fromUp} 500ms;
          }
        `
      : ''
  }}
`
