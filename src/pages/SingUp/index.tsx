import './style.scss'
import {FormEvent, useState, FC } from "react"
import { signup } from './api'


const SingUp :FC = () => {

    const [ email, setEmail ] = useState <string>('');
    const [ password, setPassword] = useState <string>('');
    const [ name, setName] = useState <string>('');
    const [gender, setGender] = useState <string>('');
    const [age, setAge] = useState <number>(0);
    const [weight, setWeight] = useState <number>(0);
    const [height, setHeight] = useState <number>(0);


    const handleSubmit = (e: FormEvent) =>  {
        e.preventDefault();
        console.log("el evento reacciono");

        signup({email, password, name, gender, age, weight, height})
    };
    


    return (
        <div className="sing-up">
            <form action="" onSubmit={handleSubmit}>
                <h2>Registrate</h2>
                <div>
                    <label htmlFor="name">Nombre</label>
                    <input id="name" 
                        type="name" name="name" 
                        placeholder="Ingresa tu nombre" 
                        onChange={e =>{ 
                            setName( e.target.value)
                        }}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input 
                        id="email" 
                        type="email" 
                        name="email" 
                        placeholder="Ingresa tu email"
                        onChange={e =>{ 
                            setEmail( e.target.value)
                        }}
                        required 
                    />
                </div>
                <div>
                    <label htmlFor="password">Contraseña</label>
                    <input 
                        id="password" 
                        type="password" 
                        name="password" 
                        placeholder="Ingresa tu contraseña"
                        onChange={e =>{ 
                            setPassword(e.target.value)
                        }}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="sex">Sexo</label>
                    <select name="gender" id="gender" onChange={e =>{ 
                            setGender( e.target.value)
                        } } required>
                    <option value="" selected disabled>Ingresa tu sexo</option>
                        <option value="man">Hombre</option>
                        <option value="woman">Mujer</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="age">Edad</label>
                    <input 
                        id="age"  
                        type="number"  
                        name="age" 
                        placeholder="Ingresa tu edad"
                        onChange={e =>{ 
                            setAge(Number(e.target.value))
                        }}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="weight">Peso en Kg</label>
                    <input 
                        id="weight"  
                        type="number"  
                        name="weight" 
                        placeholder="Ingresa tu peso en Kg"
                        onChange={e =>{ 
                            setWeight(Number(e.target.value))
                        }}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="height">Altura en CM</label>
                    <input 
                        id="height"  
                        type="number"  
                        name="height" 
                        placeholder="Ingresa tu altura en CM"
                        onChange={e =>{ 
                            setHeight( Number(e.target.value))
                        }}
                        required
                    />
                </div>
                <button type="submit">Registrarse</button>
            </form>
        </div>

    )

}

export { SingUp }