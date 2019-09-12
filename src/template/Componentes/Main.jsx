import React from "react";
import Aside from "./Aside"
import "./Main.css"
import User from "../user/user"

export default props =>
    <main className="main">
            <div className="row">
                <div className="col-0 col-lg-2 d-none d-lg-block">
                    <Aside />
                </div>
                <div className="col-11 col-lg-10">
                    <User/>
                </div>
            </div>
    </main>