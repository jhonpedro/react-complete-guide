import styled from 'styled-components';
import Button from '../../UI/Button';
import { InputContainer } from '../../UI/Input/styles';

export const NewUserContainer = styled.div`
  ${InputContainer} {
    margin-bottom: 2rem;
  }

  ${Button} {
    display: block;
    margin-left: auto;
  }
`;
