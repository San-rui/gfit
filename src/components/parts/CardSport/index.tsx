import './style.scss'

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { UserWodMeal } from '../../../types';
import { WodDay} from '../index'
import { getDataUser } from '../../../api';


const CardSport = () =>{

    const [title, setTitle]= useState(false);
    const [data, setData]= useState<UserWodMeal[]>();
    

    useEffect ( ()=>{
        const moveTitle=()=>{
            if(window.scrollY >= 450){
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
}, [])

    return (
        <div className="box-sport">
            <h2 className={title ? 'title-sport title-scroll': 'title-sport'}>Weekly Workout</h2>
            <Link to='/add-activity' className="add-activity">Add activity</Link>
                <div>
                    <div className="days">
                        <div className="sport">
                            <h4>Monday</h4>
                            <WodDay data={data} day={"monday"}/>
                        </div>
                        <div className="sport">
                            <h4>Tuesday</h4>
                            <WodDay data={data} day={"tuesday"}/>
                        </div>
                        <div className="sport">
                            <h4>Wednesday</h4>
                            <WodDay data={data} day={"wednesday"}/>
                        </div>
                        <div className="sport">
                            <h4>Thursday</h4>       
                            <WodDay data={data} day={"thursday"}/>
                        </div>
                        <div className="sport">
                            <h4>Friday</h4>
                            <WodDay data={data} day={"friday"}/>
                        </div>
                        <div className="sport">
                            <h4>Saturday</h4>
                            <WodDay data={data} day={"saturday"}/>
                        </div>
                        <div className="sport">
                            <h4>Sunday</h4>
                            <WodDay data={data} day={"sunday"}/>
                        </div>
                    </div>
                </div>
        </div>
    )

}

export { CardSport }