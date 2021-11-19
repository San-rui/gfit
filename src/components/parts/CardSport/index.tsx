import './style.scss'

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { UserWodMeal } from '../../../types';
import { WodDay} from '../index'
import { getDataUser, modifyDataUser } from '../../../api';


const CardSport = () =>{

    const [title, setTitle]= useState(false);
    const [data, setData]= useState<UserWodMeal[]>();
    const [idmealToDelete, setIdmealToDelete]= useState<string | undefined>();

    useEffect ( () => {
        if(idmealToDelete!== undefined){
            const item= data?.find(item => item.id === idmealToDelete)
        
            const itemAux = {
                ...item,
                wod: {
                    calories: 0,
                    description: ''
                }
            }
            modifyDataUser(idmealToDelete, itemAux)
        }

    }, [idmealToDelete])
    
    useEffect ( ()=>{
        const moveTitle=()=>{
            if(window.scrollY >= 1000){
                setTitle(true);
            } else{
                setTitle(false);
            }
        }
    
        window.addEventListener('scroll', moveTitle);

        return()=>{
            window.removeEventListener('scroll', moveTitle);
        }
    }, [title])
    
    useEffect ( () => {
        getDataUser().then(response=>{
        setData(response)
        })
}, [idmealToDelete])

    return (
        <div className="box-sport">
            <h2 className={title ? 'title-sport title-scroll': 'title-sport'}>Weekly Workout</h2>
            <Link to='/add-activity/monday' className="add-activity">Add activity</Link>
                <div>
                    <div className="days">
                        <div className="sport">
                            <h4>Monday</h4>
                            <WodDay data={data} day={"monday"} setIdmealToDelete={setIdmealToDelete}/>
                        </div>
                        <div className="sport">
                            <h4>Tuesday</h4>
                            <WodDay data={data} day={"tuesday"} setIdmealToDelete={setIdmealToDelete}/>
                        </div>
                        <div className="sport">
                            <h4>Wednesday</h4>
                            <WodDay data={data} day={"wednesday"} setIdmealToDelete={setIdmealToDelete}/>
                        </div>
                        <div className="sport">
                            <h4>Thursday</h4>       
                            <WodDay data={data} day={"thursday"} setIdmealToDelete={setIdmealToDelete}/>
                        </div>
                        <div className="sport">
                            <h4>Friday</h4>
                            <WodDay data={data} day={"friday"} setIdmealToDelete={setIdmealToDelete}/>
                        </div>
                        <div className="sport">
                            <h4>Saturday</h4>
                            <WodDay data={data} day={"saturday"} setIdmealToDelete={setIdmealToDelete}/>
                        </div>
                        <div className="sport">
                            <h4>Sunday</h4>
                            <WodDay data={data} day={"sunday"} setIdmealToDelete={setIdmealToDelete}/>
                        </div>
                    </div>
                </div>
        </div>
    )

}

export { CardSport }