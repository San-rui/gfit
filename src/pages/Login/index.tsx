import './style.scss'
import { FormEvent } from "react"
import { useState } from 'react'


const Login = () => {


    const handleSubmit = (e: FormEvent) =>  {
        e.preventDefault();
        console.log("el evento reacciono");
    }

    

    return (
        <div className="login">
            <form action="" onSubmit={handleSubmit}>
                <h2>Login</h2>
                <div>
                    <label htmlFor="email">Email</label>
                    <input id="email" type="text" name="email" placeholder="Ingrese su email"/>
                </div>
                <div>
                    <label htmlFor="password">Contraseña</label>
                    <input id="password" type="text" name="password" placeholder="Ingrese su contraseña"/>
                </div>
                <button type="submit">Enviar</button>
            </form>
            <a href="">Registrarse</a>
        </div>

    )

}

export { Login }