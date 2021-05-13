import React from 'react';

import { ListItem } from './styles';

const NodeUser = ({ name, age }) => {
  return (
    <ListItem>
      <td>{name}</td>
      <td>{age}</td>
    </ListItem>
  );
};

export default NodeUser;
