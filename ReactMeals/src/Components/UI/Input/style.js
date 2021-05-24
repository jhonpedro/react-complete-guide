import styled from 'styled-components'

export const LabelContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 1rem 0;

  span {
    font-size: 1.6rem;
  }

  input {
    padding: 1rem 1.5rem;
    border: 1px solid #ccc;
    border-radius: 1rem;
    outline: none;

    :focus {
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    }
  }
`
