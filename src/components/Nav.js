import "../css/Components/Nav.css"
import logo from "../assets/test2.png"

const Nav = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-style">
      <div className="container-fluid">
        <div className="navbar-brand">
          <img src={logo} alt="headshot" />
        </div>
        <button id="navbarToggler" className="navbar-toggler navbar-light navbar-icon-style" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
            <li id="nav-home" className="nav-item nav-item-home ms-2 me-2" onClick={() => { props.handleNavLink(0) }}>
              Home{/* <Link to="/catalog" className="nav-link text-white" >Song Catalog</Link> */}
            </li>
            <li id="nav-work" className="nav-item nav-item-work ms-2 me-2" onClick={() => { props.handleNavLink(1) }}>
              Work{/* <Link to="/catalog" className="nav-link text-white" >Song Catalog</Link> */}
            </li>
            <li id="nav-about" className="nav-item nav-item-about ms-2 me-2" onClick={() => { props.handleNavLink(2) }}>
              About{/* <Link to="/profile" className="nav-link text-white">Profile</Link> */}
            </li>
            <li id="nav-contact" className="nav-item nav-item-contact ms-2 me-2" onClick={() => { props.handleNavLink(3) }}>
              Contact{/* <Link to="/register" className="nav-link text-white">Sign Up</Link> */}
            </li>
          </ul>
        </div>
      </div>
    </nav >
  );
}

Nav.propTypes = {};

Nav.defaultProps = {};

export default Nav;
