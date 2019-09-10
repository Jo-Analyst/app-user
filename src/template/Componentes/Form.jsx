import React, { Component } from "react";
import "./Form.css"
import Api from "../api/api"

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            estado: []
        }
    }
    componentWillMount() {
        Api.loadEstado()
            .then(res =>
                this.setState({
                    estado: res.data
                })
            )
    }
    renderLista() {
        const estado = this.state.estado;
        return estado.map(list => {
            return (
                <option key={list.sigla} value={list.sigla}>{list.sigla}</option>
            )
        })
    }
    render() {
        return (
            <div className="formulario ml-auto" >
                <form >
                    <label className="d-block mx-auto mb-3">
                        Nome <input className="form-control" type="text" placeholder="Digite seu nome..." />
                    </label>

                    <label className="d-block mx-auto mb-3">
                        Nascimento
                        <input type="date" className="form-control" />
                    </label>

                    <label className="d-block mx-auto mb-3">
                        Email
                        <input type="email" className="form-control" placeholder="Digite o seu email..." />
                    </label>

                    <label className="d-block mx-auto mb-3">
                        Estado:
                        <select name="" className="ml-2">
                            {this.renderLista()}
                        </select>
                    </label>

                    <button className="btn btn-outline-success px-4 py-2">
                        Salvar
                        </button>
                    <button className="btn btn-outline-danger ml-2 px-4 py-2">
                        Cancelar
                    </button>
                </form>
            </div>
        )
    }
}

export default Form;