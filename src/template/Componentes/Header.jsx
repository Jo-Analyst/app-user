import React from "react";
import "./Header.css";
export default props =>
    <header className="header">
        <nav className="navbar navbar-dark text-white py-0">
        <strong className="text-uppercase ml-4 d-none d-md-block" >LAS Technology</strong>
            <div className="search mx-auto">
                <input type="text" placeholder="Search" className="form-control" /> <i className="fa fa-search" aria-hidden="true"></i>
            </div>
            <p className="text-white ml-auto user-login my-auto"><i className="fa fa-user" aria-hidden="true"></i><strong className="ml-2">Jô Developer</strong></p>
    
        </nav>
    </header>

