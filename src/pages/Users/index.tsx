import { useState, FC } from 'react';
import {getUsers} from '../../api';
import { User } from '../../types';
import { Layout } from '../../components/layout'

import './style.scss'
import { WithAuth } from '../../components/hoc';

const Users:FC =()=>{

    const [users, setUsers]= useState<User[] | undefined>()

    const ObtainUsers = async() =>{
        try{ 
            const response = await getUsers(); 
            setUsers(response);
            
        } catch(err){
            console.log(err);
        }
        
    }
    (!users)? ObtainUsers(): console.log(users);

    return(
        <Layout>
            <div className='users'>
            <h2>Users information</h2>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Gender</th>
                        <th>Age</th>
                        <th>weight</th>
                        <th>height</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users?.map(user=>{
                            return (
                                <tr>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.password}</td>
                                    <td>{user.gender}</td>
                                    <td>{user.age}</td>
                                    <td>{user.weight}</td>
                                    <td>{user.height}</td>

                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
        </Layout>
        
    )
}

export default WithAuth(Users)
