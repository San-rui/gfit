import { FormEvent, useState, FC } from "react";
import React from 'react';
import { signup } from './api';
import { Layout } from '../../components/layout';
import { useHistory } from 'react-router-dom';
import { WithAuth } from "../../components/hoc";import './style.scss';

const defaultValues = {
    email: "",
    password: "",
    name: "",
    gender: "",
    age: 0,
    weight:"",
    height:"",
};

const SingUp :FC = () => {

    const [inputs, setInputs] = useState(defaultValues);
    const { push } = useHistory();

    const handleSubmit = async (e: FormEvent) =>  {
        e.preventDefault();
        
        try {
            await signup(inputs);
            push('/login')
            
        } catch (err) {
            console.log(err);
            }
    }
    
    return (
        <Layout hidenHeader>
            <div className="sing-up">
            <form action="" onSubmit={handleSubmit}>
                <h2>Sing Up</h2>
                <div className='container-input-select'>
                    <label htmlFor="name">Name</label>
                    <input id="name" 
                        type="name" name="name" 
                        placeholder="Enter your name" 
                        onChange={e =>{ 
                            setInputs({ ...inputs, name: e.target.value })
                        }}
                        required
                    />
                </div>
                <div className='container-input-select'>
                    <label htmlFor="email">Email</label>
                    <input 
                        id="email" 
                        type="email" 
                        name="email" 
                        placeholder="Enter your email"
                        onChange={e =>{ 
                            setInputs({ ...inputs, email: e.target.value })
                        }}
                        required 
                    />
                </div>
                <div className='container-input-select'>
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
                <div className='container-input-select'>
                    <label htmlFor="sex">Gender</label>
                    <select name="gender" id="gender" onChange={e =>{ 
                            setInputs({ ...inputs, gender: e.target.value })
                        } } required>
                        <option value="" selected disabled>Enter your gender</option>
                        <option value="man">Male</option>
                        <option value="woman">Female</option>
                    </select>
                </div>
                <div className='container-input-select'>
                    <label htmlFor="age">Age</label>
                    <input 
                        id="age"  
                        type="number"  
                        name="age" 
                        placeholder="Enter your age"
                        onChange={e =>{ 
                            setInputs({ ...inputs, age: Number(e.target.value) })
                        }}
                        required
                    />
                </div>
                <div className='container-input-select'>
                    <label htmlFor="weight">Weight in Kg</label>
                    <input 
                        id="weight"  
                        type="number"  
                        name="weight" 
                        placeholder="Enter your weight in Kg"
                        onChange={e =>{ 
                            setInputs({ ...inputs, weight: e.target.value })
                        }}
                        required
                    />
                </div>
                <div className='container-input-select'>
                    <label htmlFor="height">Height in CM</label>
                    <input 
                        id="height"  
                        type="number"  
                        name="height" 
                        placeholder="IEnter your height in cm"
                        onChange={e =>{ 
                            setInputs({ ...inputs, height: e.target.value })
                        }}
                        required
                    />
                </div>
                <button type="submit">Sing up</button>
            </form>
        </div>
        </Layout>
    )
}

export default WithAuth(SingUp)