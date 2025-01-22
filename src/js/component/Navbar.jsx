import React from "react";

const Navbar = () => {
	return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
      <div className="container">
        <a className="navbar-brand text-light bg-dark" href="">MY Web</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link text-light bg-dark" href="#">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light bg-dark" href="#">Cocktails</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light bg-dark" href="#">Games</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
		
	);
};

export default Navbar;