import styled from 'styled-components';
import Button from '../../UI/Button';
import { InputContainer } from '../../UI/Input/styles';

export const NewUserContainer = styled.div`
  width: 40%;
  margin: 5rem auto;
  padding: 3rem;

  background-color: var(--color-white);
  border-radius: 3rem;

  box-shadow: 0 0 5px var(--color-white);

  ${InputContainer} {
    margin-bottom: 2rem;
  }

  ${Button} {
    display: block;
    margin-left: auto;
  }
`;
