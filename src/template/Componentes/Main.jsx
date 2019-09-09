import React from "react";
import Form from "./Form"
import Lista from "./Lista"
import Aside from "./Aside"
import "./Main.css"

export default props =>
    <main className="main">
        {/* <div className="container-fluid"> */}
            <div className="row">
                <div className="col-0 col-lg-2 d-none d-lg-block">
                    <Aside />
                </div>
                <div className="col-12 col-lg-6">
                    <Lista />
                </div>
                <div className="col-12 col-lg-4">
                    <Form className="" />
                </div>
            </div>
        {/* </div> */}
    </main>