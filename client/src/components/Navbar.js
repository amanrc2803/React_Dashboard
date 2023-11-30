import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar fixed-top navbar-expand-md navbar-dark bg-dark mb-3">
            <div className="flex-row d-flex">
                <button type="button" className="navbar-toggler mr-2" data-toggle="offcanvas" title="Toggle responsive left sidebar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <button className="navbar-brand" type="button" title="Free Bootstrap 4 Admin Template">Record Book</button>
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse collapse" id="collapsingNavbar">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <button className="nav-link" type="button">Home <span className="sr-only">Home</span></button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link" type="button" href="//www.codeply.com">Link</button>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <button className="nav-link" type="button" href="#myAlert" data-toggle="collapse">Alert</button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link" type="button" href="" data-target="#myModal" data-toggle="modal">About</button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link waves-effect waves-light text-white" type="button">
                            <i className="fab fa-google-plus-g"></i>
                        </button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link waves-effect waves-light text-white" type="button">
                            <i className="fas fa-envelope-open-text"></i>
                        </button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link waves-effect waves-light text-white" type="button">
                            <i className="fas fa-align-justify"></i>
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
