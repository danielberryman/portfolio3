import "../css/Components/Nav.css"
import logo from "../assets/test2.webp"

const Nav = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-style">
      <div className="container-fluid">
        <div className="navbar-brand">
          <img src={logo} alt="headshot" className="nav-logo" onClick={() => { props.handleActiveNavLink("home") }} />
        </div>
        <button id="navbarToggler" className="navbar-toggler navbar-light navbar-icon-style" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
            <li id="nav-home" className="nav-item nav-item-home ms-2 me-2 active-nav-home" onClick={() => { props.handleActiveNavLink("home") }}>
              Home
            </li>
            <li id="nav-work" className="nav-item nav-item-work ms-2 me-2" onClick={() => { props.handleActiveNavLink("work") }}>
              Work
            </li>
            <li id="nav-about" className="nav-item nav-item-about ms-2 me-2" onClick={() => { props.handleActiveNavLink("about") }}>
              About
            </li>
            <li id="nav-connect" className="nav-item nav-item-connect ms-2 me-2" onClick={() => { props.handleActiveNavLink("connect") }}>
              Connect
            </li>
            <a href="https://drive.google.com/file/d/1xUlsX_bo9fF1cj7CF3_3vAQFtPW5gAfb/view?usp=sharing" target="blank" download className="resume-download">
              <li id="nav-resume" className="nav-item nav-item-resume ms-2 me-2">
                Resume<i className="bi bi-file-earmark-text"></i>
              </li>
            </a>
          </ul>
        </div>
      </div>
    </nav >
  );
}

export default Nav;
