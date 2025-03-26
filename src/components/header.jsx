import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>My E-Commerce Site</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/signin">Sign In</Link>
        <Link to="/signup">Sign Up</Link>
      </nav>
    </header>
  );
}

export default Header;
