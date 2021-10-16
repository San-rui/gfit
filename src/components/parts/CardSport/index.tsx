import './style.scss'
import {trainingApi} from './api'
import { useState } from 'react'
import { Activity} from '../../../types'

const CardSport = () =>{

    const [training, setTraining]= useState<Activity | undefined>();
    const [title, setTitle]= useState(false);

    const getTraining = async() =>{
        try{ 
            const response: any = await trainingApi(); 
            setTraining(response);
        } catch(err){
            console.log(err);
        }
    }

    const moveTitle=()=>{
        if(window.scrollY >= 450){
            setTitle(true);
        } else{
            setTitle(false);
        }
    }

    window.addEventListener('scroll', moveTitle);
    

    const renderOptions =()=>{
        getTraining()
        const array=[];
        for(const prop in training){
            array.push(<option value={prop}>{prop}</option>)
        }
        return array;
    }

    return (
        <div>
            <h2 className={title ? 'title-sport title-scroll': 'title-sport'}>Weekly Workout</h2>
                <div>
                    <div className="days">
                        <div className="sport">
                            <h4>Monday</h4>
                            <div>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                        <div className="sport">
                            <h4>Tuesday</h4>
                            <div>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                        <div className="sport">
                            <h4>Wednesday</h4>
                            <div>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                        <div className="sport">
                            <h4>Thursday</h4>       
                            <div>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                        <div className="sport">
                            <h4>Friday</h4>
                            <div>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                        <div className="sport">
                            <h4>Saturday</h4>
                            <div>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                        <div className="sport">
                            <h4>Sunday</h4>
                            <div>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <select name="trainingOptions" id="trainingOptions">
                { renderOptions() }
                </select>
        </div>
    )

}

export { CardSport }