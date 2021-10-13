import { FormEvent, useState, FC } from "react";
import React from 'react'
import { signup } from './api';
import { Layout } from '../../components/layout'

import './style.scss';


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
        <Layout hidenHeader>
            <div className="sing-up">
            <form action="" onSubmit={handleSubmit}>
                <h2>Sing Up</h2>
                <div>
                    <label htmlFor="name">Name</label>
                    <input id="name" 
                        type="name" name="name" 
                        placeholder="Enter your name" 
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
                        placeholder="Enter your email"
                        onChange={e =>{ 
                            setEmail( e.target.value)
                        }}
                        required 
                    />
                </div>
                <div>
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
                <div>
                    <label htmlFor="sex">Gender</label>
                    <select name="gender" id="gender" onChange={e =>{ 
                            setGender( e.target.value)
                        } } required>
                    <option value="" selected disabled>Enter your gender</option>
                        <option value="man">Male</option>
                        <option value="woman">Female</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="age">Age</label>
                    <input 
                        id="age"  
                        type="number"  
                        name="age" 
                        placeholder="Enter your age"
                        onChange={e =>{ 
                            setAge(Number(e.target.value))
                        }}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="weight">Weight in Kg</label>
                    <input 
                        id="weight"  
                        type="number"  
                        name="weight" 
                        placeholder="Enter your weight in Kg"
                        onChange={e =>{ 
                            setWeight(Number(e.target.value))
                        }}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="height">Height in CM</label>
                    <input 
                        id="height"  
                        type="number"  
                        name="height" 
                        placeholder="IEnter your height in cm"
                        onChange={e =>{ 
                            setHeight( Number(e.target.value))
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

export { SingUp }