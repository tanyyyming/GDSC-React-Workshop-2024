import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <header className="content header">
        <div className="logo"> 
            <img className="logo-img" src="./logo.png" alt="GDSC Logo" width="50px" />
            GDSC React Workshop       
        </div>
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