import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <span className={classes.logo}>ReactQuotes</span>
      <nav className={classes.nav}>
        <ul>
          <li>
            <Link to="/quotes">Quote list</Link>
          </li>
          <li>
            <Link to="/new">New quote</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
