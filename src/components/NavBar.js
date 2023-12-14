import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <header className="header">
      <div className="logo"> GDSC React Workshop</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;