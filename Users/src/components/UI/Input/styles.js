import styled from 'styled-components';

export const InputContainer = styled.div`
  color: black;

  label {
    display: flex;
    flex-direction: column;
  }

  input {
    padding: 1rem;
    border: 1px solid var(--color-secondary);
    border-radius: 1rem;
    outline: none;
    transition: 300ms;

    :focus {
      box-shadow: 0px 0px 5px var(--color-secondary);
    }
  }
`;
