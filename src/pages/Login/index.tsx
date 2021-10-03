import {FormEvent } from "react"
import { useAuth } from "../../hooks"


const Login = () => {

    const { login } = useAuth();

    const handleSubmit = (e: FormEvent) =>  {
        e.preventDefault();
        console.log("el evento reacciono");
    }


    return (
        <div>
            -----LOGIN------
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input id="email" type="text" name="email" />
                </div>
                <div>
                    <label htmlFor="password">Contraseña</label>
                    <input id="password" type="text" name="pass" />
                </div>
                <button type="submit">Enviar</button>
            </form>

        </div>

    )

}

export { Login }