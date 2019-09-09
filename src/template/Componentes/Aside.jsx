import React from "react";
import "./Aside.css"
export default props =>
    <aside className="aside">
        <nav>
            <p className="text-white ml-auto user-login mb-3"><i class="fa fa-user" aria-hidden="true"></i><strong className="ml-2">Jô Developer</strong></p>
            <p className="text-uppercase"><i class="fa fa-bars" aria-hidden="true"></i> Menu</p>
            <ul className="list-unstyled">
                <li className="text-center"> <i class="fa fa-users text-white" aria-hidden="true"></i> Usuário</li>
            </ul>
        </nav>
    </aside>