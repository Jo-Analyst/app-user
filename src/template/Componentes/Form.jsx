import React from "react";
import "./Form.css"
export default props =>
    <div className="formulario ml-auto" >
        <form classNome="form-row">
            <label className="d-block mx-auto mb-3">Nome <input className="form-control" type="text" placeholder="Digite seu nome..." /></label>
           
            <label className="d-block mx-auto mb-3">Nascimento
            <input type="date" className="form-control"/>        
            </label>
    
            <label className="d-block mx-auto mb-3">Email       
            <input type="email" className="form-control" placeholder="Digite o seu email..."/>       
            </label>

            <label className="d-block mx-auto mb-3">Estado:        
            <select name="" className="ml-2">

            </select>
            </label>
            
            <label className="d-block mx-auto mb-3">Senha
            <input type="password" className="form-control" placeholder="Digite a sua senha..."/>
            </label>

            <button className="btn btn-outline-success px-4 py-2">Salvar</button>
            <button className="btn btn-outline-danger ml-2 px-4 py-2">Cancelar</button>
        </form>
    </div>