import React from 'react';
import RoundedBox from '../../UI/RoundedBox';
import NodeUser from '../NodeUser';
import { Table } from './styles';

const ListUser = ({ users }) => {
  return (
    <RoundedBox width="50%" margin="0 auto">
      <Table>
        <thead>
          <tr>
            <th>Nome</th>

            <th>Idade</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return <NodeUser name={user.name} age={user.age} key={user.id} />;
          })}
        </tbody>
      </Table>
    </RoundedBox>
  );
};

export default ListUser;
