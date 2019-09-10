import React from "react";
import "./Lista.css";
import Api from "../api/api";

class Lista extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            usuario: []
        }
    }

    componentDidMount() {
        Api.loadUsuario()
            .then(res => this.setState({
                usuario: res.data
            }))
    }

    renderLista() {
        const usuario = this.state.usuario
        return usuario.map(user=>{
            return(
                <tr key={user.id}>
                    <td>{user.nome}</td>
                    <td>{user.nascimento}</td>
                    <td>{user.email}</td>
                    <td>{user.estado}</td>
                    {/* <td>{user.senha}</td> */}
                    <td><i class="fa fa-pencil text-primary" aria-hidden="true"></i> <i class="fa fa-trash text-warning" aria-hidden="true"></i></td>
                </tr>
            )
        })
    }

    render() {
        return (
            <table className="mx-auto mt-1 lista-nome">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Nascimento</th>
                        <th>Email</th>
                        <th>Estado</th>
                        {/* <th>Senha</th> */}
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderLista()}
                </tbody>
            </table>
        )
    }
}

export default Lista