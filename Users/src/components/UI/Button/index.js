import styled from 'styled-components';

export default styled.button`
  padding: 1rem 2rem;
  background-color: var(--color-secondary);
  border: none;

  color: var(--color-primary);
  border-radius: 2rem;
  cursor: pointer;

  :hover {
    box-shadow: 0 0 5px var(--color-secondary);
  }
`;
