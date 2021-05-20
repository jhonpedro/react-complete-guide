import { Fragment, Component } from 'react';
import UserContext from '../store/users-context';

import Users from './Users';
import classes from './Userfinder.module.css';

class UserFinder extends Component {
  static contextType = UserContext;

  constructor() {
    super();

    this.state = {
      filteredUsers: [],
      filterName: '',
    };
  }

  componentDidMount() {
    this.setState({ filteredUsers: this.context.users });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.filterName !== this.state.filterName) {
      const newFilteredUsers = this.context.users.filter((user) =>
        user.name.includes(this.state.filterName)
      );

      if (newFilteredUsers.length === 0) {
        throw new Error('No users found');
      }

      this.setState({
        filteredUsers: newFilteredUsers,
      });
    }
  }

  searchChangeHandler(event) {
    this.setState({ filterName: event.target.value });
  }

  render() {
    return (
      <Fragment>
        <div className={classes.finder}>
          <input type="search" onChange={this.searchChangeHandler.bind(this)} />
        </div>
        <Users users={this.state.filteredUsers} />
      </Fragment>
    );
  }
}

// const UserFinder = () => {
//   const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     setFilteredUsers(
//       DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
//     );
//   }, [searchTerm]);

//   const searchChangeHandler = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <Fragment>
//       <div className={classes.finder}>
//         <input type="search" onChange={searchChangeHandler} />
//       </div>
//       <Users users={filteredUsers} />
//     </Fragment>
//   );
// };

export default UserFinder;
