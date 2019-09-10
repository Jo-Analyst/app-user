import React from "react";
import "./Aside.css"
export default props =>
    <aside className="aside">
        <nav>
            <p className="text-white ml-auto user-login mb-3"><i className="fa fa-user" aria-hidden="true"></i><strong className="ml-2">Jô Developer</strong></p>
            <p className="text-uppercase"><i className="fa fa-bars" aria-hidden="true"></i> Menu</p>
            <ul className="list-unstyled">
                <li className="text-center"> <i className="fa fa-users text-white" aria-hidden="true"></i> Usuário</li>
            </ul>
        </nav>
    </aside>