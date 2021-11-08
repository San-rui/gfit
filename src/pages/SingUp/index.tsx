import { FC } from "react";
import React from 'react';
import { useForm } from "react-hook-form";


import { signup } from './api';
import { Layout } from '../../components/layout';
import { useHistory } from 'react-router-dom';
import { WithAuth } from "../../components/hoc";
import { User } from "../../types"

import './style.scss';

type UserData =Omit<User, "id">;

const SingUp :FC = () => {

    const { push } = useHistory();
    const { register, handleSubmit, formState:{errors}} = useForm<UserData>();
    
    const setDataUser = async (data: UserData) =>  {
        try {
            console.log(data)
            await signup(data);
            push('/login')
            
        } catch (err) {
            console.log(err);
            }
    }

    return (
        <Layout hidenHeader>
            <div className="sing-up">
            <form action="" onSubmit={handleSubmit(setDataUser)}>
                <h2>Sing Up</h2>
                <div className='container-input-select'>
                    <label htmlFor="name">Name</label>
                    <input id="name" 
                        type="name" 
                        placeholder="Enter your name" 
                        {...register("name", {required: true})}
                    />
                    {errors.name && <p>This is required</p>}
                </div>
                <div className='container-input-select'>
                    <label htmlFor="email">Email</label>
                    <input 
                        id="email" 
                        type="email" 
                        placeholder="Enter your email"
                        {...register("email", {required: true})}
                    />
                    {errors.email && <p>This is required</p>}
                </div>
                <div className='container-input-select'>
                    <label htmlFor="password">Password</label>
                    <input 
                        id="password" 
                        type="password" 
                        placeholder="Enter your password"
                        {...register("password", {required: true})}
                    />
                    {errors.password && <p>This is required</p>}
                </div>
                <div className='container-input-select'>
                    <label htmlFor="sex">Gender</label>
                    <select id="gender" {...register("gender", {required: true})}>
                        <option value="" selected disabled>Enter your gender</option>
                        <option value="man">Male</option>
                        <option value="woman">Female</option>
                    </select>
                    {errors.gender && <p>This is required</p>}
                </div>
                <div className='container-input-select'>
                    <label htmlFor="age">Age</label>
                    <input 
                        id="age"  
                        type="number"  
                        placeholder="Enter your age"
                        {...register("age", {required: true, valueAsNumber: true})}
                    />
                    {errors.age && <p>This is required</p>}
                </div>
                <div className='container-input-select'>
                    <label htmlFor="weight">Weight in Kg</label>
                    <input 
                        id="weight"  
                        type="number"  
                        placeholder="Enter your weight in Kg"
                        {...register("weight", {required: true, valueAsNumber: true})}
                    />
                    {errors.weight && <p>This is required</p>}
                </div>
                <div className='container-input-select'>
                    <label htmlFor="height">Height in CM</label>
                    <input 
                        id="height"  
                        type="number"  
                        placeholder="IEnter your height in cm"
                        {...register("height", {required: true, valueAsNumber: true})}
                    />
                    {errors.height && <p>This is required</p>}
                </div>
                <div className='container-input-select'>
                    <label htmlFor="image">Photo</label>
                    <input 
                        id="image"  
                        type="file"  
                        accept="image/png, image/jpeg"
                        {...register("image", )}
                    />
                </div>
                <button type="submit">Sing up</button>
            </form>
        </div>
        </Layout>
    )
}

export default WithAuth(SingUp)