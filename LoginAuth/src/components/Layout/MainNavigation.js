import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../store/auth';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  const { getToken, logout } = useAuth();

  const hasToken = !!getToken();

  const logoutHandler = () => {
    logout();
  };

  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {hasToken ? (
            <React.Fragment>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li onClick={logoutHandler}>
                <button>Logout</button>
              </li>
            </React.Fragment>
          ) : (
            <li>
              <Link to="/auth">Login</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
