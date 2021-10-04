import './style.scss'
import {FormEvent } from "react"


const SingUp = () => {

    const handleSubmit = (e: FormEvent) =>  {
        e.preventDefault();
        console.log("el evento reacciono");
    }


    return (
        <div className="sing-up">
            <form action="" onSubmit={handleSubmit}>
                <h2>Registrate</h2>
                <div>
                    <label htmlFor="email">Email</label>
                    <input id="email" type="text" name="email" placeholder="Ingresa tu email"/>
                </div>
                <div>
                    <label htmlFor="password">Contraseña</label>
                    <input id="password" type="text" name="pass" placeholder="Ingresa tu contraseña"/>
                </div>
                <div>
                    <label htmlFor="sex">Sexo</label>
                    <select name="sex" id="sex">
                    <option value="" selected disabled>Ingresa tu sexo</option>
                        <option value="">Femenino</option>
                        <option value="">Masculino</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="age">Edad</label>
                    <input id="age"  type="number"  name="age" placeholder="Ingresa tu edad"/>
                </div>
                <div>
                    <label htmlFor="weight">Peso en Kg</label>
                    <input id="weight"  type="number"  name="weight" placeholder="Ingresa tu peso en Kg"/>
                </div>
                <div>
                    <label htmlFor="height">Altura en CM</label>
                    <input id="height"  type="number"  name="height" placeholder="Ingresa tu altura en CM"/>
                </div>
                <button type="submit">Registrarse</button>
            </form>
        </div>

    )

}

export { SingUp }