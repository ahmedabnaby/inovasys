function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg">
        <div className="container-fluid justify-content-center">
          <a className="navbar-brand w-100 flex-nowrap" href="#"><img src="assets/images/logo.png"/></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav justify-content-center">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Partners</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Resources</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Careers</a>
              </li>
            </ul>
          </div>
          <ul className="nav navbar-nav w-100 justify-content-end">
            <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
            </li>
        </ul>
        </div>
      </nav>      
    );
  }
  
  export default Navbar;
  