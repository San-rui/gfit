import './style.scss';

import { FormEvent, FC, useState } from "react";
import { getUsers, getDataUser} from '../../api';
import { User, DataUser } from '../../types';
import { Layout } from '../../components/layout';
import { Link } from 'react-router-dom';
import { setUserLoggedId } from './api';
import { WithAuth} from '../../components/hoc';

import logo from '../../assets/images/logo.png';
import { useAuth } from '../../hooks';


const Login :FC= () => {

    const [ email, setEmail ] = useState('');
    const [ password, setPassword] = useState('');

    const { login, userSession } = useAuth();

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            await login(email, password);
        } catch (err) {
            console.log(err);
            }
    };

  // useEffect(() => {
  //   localStorage.setItem("user", JSON.stringify(userSession));
  // }, [userSession]);

    if (userSession) {
    localStorage.setItem("user", JSON.stringify(userSession));
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
                            type="password" 
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
            </div>
        </Layout>
    )
}

export default WithAuth(Login)