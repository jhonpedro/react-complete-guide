import styled from 'styled-components';

export default styled.div`
  padding: 3rem;

  background-color: var(--color-white);
  border-radius: 3rem;

  box-shadow: 0 0 5px black;

  width: ${(props) => (!props.width ? 'auto' : props.width)};
  margin: ${(props) => (!props.margin ? '' : props.margin)};
`;
