import './style.scss'
import { FormEvent } from "react"
import { useState } from 'react'
import { getUsers } from '../../api'
import { User } from '../../types'


const Login = () => {

    const [ email, setEmail ] = useState <string>('');
    const [ password, setPassword] = useState <string>('');

    const [users, setUsers]= useState<User[] | undefined>();
    const [userLogged, setUserLogged]= useState<User[] | undefined>()

    const ObtainUsers = async() =>{
        try{ 
            const response = await getUsers(); 
            setUsers(response);
            
        } catch(err){
            console.log(err);
        }
    }
    (!users)? ObtainUsers(): console.log("los usuarios son: ",users);

    const handleSubmit = (e: FormEvent) =>  {
        e.preventDefault();
        //SE SETEARON LOS ESTADOS PARA CRUSARLOS CON FIREBASE

        const userLoggedx =users?.filter(Element =>Element.email==email && Element.password==password);
        setUserLogged(userLoggedx)
        
    }
    

    return (
        <div className="login">
            <form action="" onSubmit={handleSubmit}>
                <h2>Login</h2>
                <div>
                    <label htmlFor="email">Email</label>
                    <input 
                        id="email" 
                        type="text" 
                        name="email" 
                        placeholder="Ingrese su email"
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
                        type="text" 
                        name="password" 
                        placeholder="Ingrese su contraseña"
                        onChange={e =>{ 
                            setPassword(e.target.value)
                        }}
                        required
                    />
                </div>
                <button type="submit">Enviar</button>
            </form>
            <a href="">Registrarse</a>
            <p>LOS DATOS INGRESADOS PERTENECEN A: {userLogged?.map(user=>{
                            return (
                                
                                    <span>{user.name}</span>
                                
                            )
                        })}</p>
        </div>
    )
}

export { Login }