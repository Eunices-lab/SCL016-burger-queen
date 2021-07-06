import React from 'react'
import './Login.css'

const Login = () => {
    return (
        <div className="container text-center">
            <hr />
            <h2>Ingresa tus identificadores</h2>
            <hr />
            <input
                type="text"
                placeholder="Ingresa tu ID"
                required
            />
            <br />
            Identificador
            <br />
            <input
                type="password"
                placeholder="Ingresa tu contraseña"
                pattern="[0-9]"
                required
            />
            <br />
            Password
            <hr />
            <button type="button" className="btn btn-danger">Ingresar</button>

        </div>
    )
}

export default Login
