import './style.scss';

import { FormEvent, FC, useState } from "react";
import { Layout } from '../../components/layout';
import { Link, useHistory } from 'react-router-dom';
import { WithAuth} from '../../components/hoc';

import logo from '../../assets/images/logo.png';
import { useAuth } from '../../hooks';

const defaultValues = {
    email: "",
    password: "",
};

const Login :FC= () => {
    const [inputs, setInputs] = useState(defaultValues);

    const { login } = useAuth();
    const { push } = useHistory();

    const handleSubmit = async (e: FormEvent<HTMLElement>) => {
        e.preventDefault();
    
        try {
            await login(inputs.email, inputs.password);
    
            push("/");
        } catch (e) {
          // setAlert(e.message);
        }
    };


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
                                setInputs({ ...inputs, email: e.target.value })
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
                                setInputs({ ...inputs, password: e.target.value })
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