import { Route, Switch } from 'react-router-dom';
import NewCommentForm from '../components/comments/NewCommentForm';

const Routes = () => {
  return (
    <Switch>
      <Route path="/newTask">
        <NewCommentForm />
      </Route>
    </Switch>
  );
};

export default Routes;
