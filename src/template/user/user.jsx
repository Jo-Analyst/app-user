import React, { Component } from "react";
import Api from "../api/api"
import "./user.css"

const initial = {
    usuario: {
        nome: "",
        email: "",
        estado: ""
    },
}


class User extends Component {

    constructor(props) {
        super(props)
        this.state = {
            ListEstado: [],
            ListUsuario: [],
            newListUsuario: [],
            user: {
                nome: "",
                email: "",
                estado: ""
            },
            initial,
            option: "save"
        }
        this.saveUsuario = this.saveUsuario.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.deleteUsuario = this.deleteUsuario.bind(this);
        this.Cancelar = this.Cancelar.bind(this);
        this.searchUsuario = this.searchUsuario.bind(this);
        this.keyUpSave = this.keyUpSave.bind(this);
    }

    componentWillMount() {
        this.loadEstado();
        this.loadUsuario();
    }


    loadUsuario() {
        Api.loadUsuario()
            .then(res => this.setState({
                ListUsuario: res.data,
                isLoading: false
            }))
    }

    loadEstado() {
        Api.loadEstado()
            .then(res =>
                this.setState({
                    ListEstado: res.data
                })
            )
    }

    renderRows() {
        const usuario = this.state.newListUsuario.length > 0 ? this.state.newListUsuario : this.state.ListUsuario
        return usuario.map(user => {
            return (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.nome}</td>
                    <td>{user.email}</td>
                    <td>{user.estado}</td>
                    <td>
                        <i className="fa fa-pencil text-primary mr-2" aria-hidden="true" onClick={() => this.loadUser(user)} ></i> <i className="fa fa-trash text-warning" aria-hidden="true" onClick={() => this.deleteUsuario(user)}></i></td>
                </tr>
            )
        })
    }

    loadUser(user) {
        this.refs.nome.value = user.nome
        this.refs.email.value = user.email
        this.refs.estado.value = user.estado
        this.setState({
            user,
            option: "update"
        })
    }

    saveUsuario() {
        if (this.refs.nome.value !== "" && this.refs.email.value !== "" && this.refs.estado.value !== "") {
            const user = this.state.user;
            const option = this.state.option;
            const req = option === "save" ? Api.saveUsuario(user) : Api.updateUsuario(user)

            req.then(res => {
                const usuario = this.getloadUsuario(res.data)
                this.setState({
                    ListUsuario: usuario,
                    option: "save",
                    newListUsuario: [],
                    user: initial.user
                })
            })
                .catch(e => console.log(e))
            this.Cancelar();
        }
        else {
            alert("Preencha todos os campos!")
        }

    }

    deleteUsuario(user) {
        Api.deleteUsuario(user)
            .then(res => {
                const usuario = this.getloadUsuario(user, false)
                this.setState({
                    ListUsuario: usuario,
                    newListUsuario: []
                })
            })

        this.Cancelar();
    }

    getloadUsuario(usuario, add = true) {
        const user = this.state.ListUsuario.filter(user => user.id !== usuario.id)
        if (add) user.unshift(usuario)
        return user
    }

    renderLista() {
        const estado = this.state.ListEstado;
        return estado.map(list => {
            return (
                <option key={list.sigla}>{list.sigla}</option>
            )
        })
    }

    handleChange(e) {
        const user = { ...this.state.user };
        user[e.target.name] = e.target.value;
        this.setState({ user })
    }

    Cancelar() {
        this.refs.nome.value = ""
        this.refs.email.value = ""
        this.refs.estado.value = ""
        this.refs.searchNome.value = ""
        this.setState({
            user: this.state.initial,
            newListUsuario: []
        })
    }

    searchUsuario(e) {
        const nomeUsuario = e.target.value

        Api.loadNomeUsuario(nomeUsuario)
            .then(res => {
                this.setState({
                    newListUsuario: res.data
                })
            })
            .catch(e => {
                console.log(e)
            })
    }

    keyUpSave(e) {
        if (e.keyCode === 13) {
            this.saveUsuario();
        }
    }

    render() {
        return (
            <div className=" my-2" >
                <div className="row">
                    <div className="col-lg-8">
                        <div className="search mx-auto  mb-4">
                            <input type="text" placeholder="Search name" ref="searchNome" className="form-control" onChange={this.searchUsuario} /> <i className="fa fa-search" aria-hidden="true"></i>
                        </div>
                        {
                            this.state.ListUsuario.length > 0 &&
                            <table className="mx-auto mt-1 lista-nome">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Nome</th>
                                        <th>Email</th>
                                        <th>Estado</th>
                                        <th>Ações</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {this.renderRows()}
                                </tbody>
                            </table>
                        }
                        {
                            this.state.ListUsuario.length === 0 &&
                            <div className="alert alert-info text-center">Não há cadastrados.</div>
                        }
                            
                    </div>
                    <div className="formulario col-lg-4">
                        <form >
                            <label className="d-block mx-auto mb-3">
                                Nome <input ref="nome" className="form-control" type="text" name="nome" placeholder="Digite seu nome..." onChange={this.handleChange} onKeyUp={this.keyUpSave} />
                            </label>

                            <label className="d-block mx-auto mb-3">
                                Email
                            <input ref="email" type="email" name="email" className="form-control" placeholder="Digite o seu email..." onChange={this.handleChange} onKeyUp={this.keyUpSave} />
                            </label>

                            <label className="d-block mx-auto mb-3">
                                Estado:
                            <select name="estado" onChange={this.handleChange} className="ml-2" ref="estado" onKeyUp={this.keyUpSave} >
                                    {this.renderLista()}
                                </select>
                            </label>

                            <button className="btn btn-outline-success px-4 py-2"
                                onClick={this.saveUsuario} type="button">
                                Salvar
                            </button>
                            <button type="button" onClick={this.Cancelar} className="btn btn-outline-danger ml-2 px-4 py-2">
                                Cancelar
                        </button>
                        </form>

                    </div>
                </div>
            </div>
        )
    }
}

export default User