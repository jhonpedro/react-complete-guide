import styled from 'styled-components'

export const HeaderContainer = styled.header`
  height: 8rem;
  width: 100%;

  background-color: var(--color-secondary);
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  position: fixed;
  z-index: 12;

  padding: 0 8rem;

  a {
    text-decoration: none;
    font-size: 3rem;
    color: inherit;
  }
`
