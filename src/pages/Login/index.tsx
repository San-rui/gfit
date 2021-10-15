import './style.scss';

import { FormEvent, FC, useState } from "react";
import { getUsers } from '../../api';
import { User } from '../../types';
import { Layout } from '../../components/layout';
import { Link } from "react-router-dom";

import logo from '../../assets/images/logo.png';



const Login :FC= () => {

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

        const userLoggedx =users?.filter(Element =>Element.email===email && Element.password===password);
        setUserLogged(userLoggedx)
        
    }
    

    return (
        <Layout hidenHeader>
            <div className="main-login">
                <form action="" onSubmit={handleSubmit}>
                    <img src={logo} alt="" className='logo'/>
                    <div className='title-login'>
                        <h2>Login</h2>
                        <i className="fas fa-key icon"></i>
                    </div>
                    <div className='container-input'>
                        <label htmlFor="email">Email</label>
                        <input 
                            id="email" 
                            type="text" 
                            name="email" 
                            placeholder="Enter your email"
                            onChange={e =>{ 
                                setEmail( e.target.value)
                            }}
                            required
                        />
                    </div>
                    <div className='container-input'>
                        <label htmlFor="password">Password</label>
                        <input 
                            id="password" 
                            type="text" 
                            name="password" 
                            placeholder="Enter your password"
                            onChange={e =>{ 
                                setPassword(e.target.value)
                            }}
                            required
                        />
                    </div>
                    <button type="submit">Send</button>
                </form>
                <Link to="./users/add">Sing up</Link>

                <p>LOS DATOS INGRESADOS PERTENECEN A: {userLogged?.map(user=>{
                            return (
                                
                                    <span>{user.name}</span>
                                
                            )
            })}</p>
            </div>
        </Layout>
    )
}

export { Login }