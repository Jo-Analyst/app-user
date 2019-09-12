import React, {Component} from "react"
import "./Externos/bootstrap.min.css"
import "./App.css"

import Header from "./template/Componentes/Header";
import Main from "./template/Componentes/Main";
import Footer from "./template/Componentes/Footer"

import "./Externos/font-awesome/css/font-awesome.min.css"

class App extends Component{
    render(){
        return (
           <div className="user">
                <Header/>
                <Main/>
                <Footer/>
           </div>
        )
    }
}

export default App;