import { Link } from "react-router";
import logo from "../../assets/logo-pet-woof-one2.png";

function Logo() {
  return (
    <Link className="navbar-brand d-flex align-items-center" to="/">
      <img src={logo} alt="Logo" className="img-fluid site-logo" />
    </Link>
  );
}

export default Logo;
