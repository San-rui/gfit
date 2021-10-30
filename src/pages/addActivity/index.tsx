import './style.scss'
import {trainingApi, caloriesBurned} from './api'
import { Activity} from '../../types'
import { Link } from 'react-router-dom';

import { FC, useState, useEffect } from "react";
import { Layout } from '../../components/layout';
import { WithAuth} from '../../components/hoc';
import {useAuth} from '../../hooks'

const defaultValues = {
    day:"",
    level: "",
    id: "",
    time:"20",
    calories:0,
};

const AddActivity :FC= () => {

    const [inputs, setInputs] = useState(defaultValues);
    const [training, setTraining]= useState<Activity[] | undefined>();
    const { userSession } = useAuth();

    useEffect ( () => {
        trainingApi(inputs.level).then(response=>{
            setTraining(response);

        })
    }, [inputs.level])

    useEffect ( () => {
        caloriesBurned(inputs.id, inputs.time, userSession.weight,).then(response=>{
            console.log(response)
            const cal= Math.round(Number(response));
            setInputs( { ...inputs, calories: cal })
        })
    }, [inputs.time])


    const renderOptions =()=>{
        
        const array: any[]=[];
        if(inputs.level!==''){
            training?.map(item=>{
                array.push(<option value={item.id}>{item.description}</option>)
            })
            return(
                <div>
                    <div className="form-line">
                        <label>Choose your activity</label>
                        <select name="trainingOptions" id="trainingOptions"
                        onChange={e =>{ 
                            setInputs({ ...inputs, id: e.target.value })
                        }}
                        >
                            { array }
                        </select>
                    </div>
                    <div className="form-line">
                            <label>Add minutes </label>
                            <input id="time" 
                            type="number" name="time" 
                            placeholder="Time of activity" 
                            onChange={e =>{ 
                                setInputs({ ...inputs, time: e.target.value })
                            }}
                            />
                        </div>
                    <div>
                        <p>You will burn: <span>{inputs.calories} calories</span></p>
                    </div>
                    <button type="submit">Add</button>
                </div>
                
            )
        }
    }

    const handleSubmit = () =>  {
    
    }

    return (
        <Layout>
            <div className='add-activity'>
                <h2 className='title'>Weekly Activity</h2>
                    <div className='sport'>
                        <form action="" onSubmit={handleSubmit}>
                            <div className="form-line">
                                <label>Choose day</label>
                                <select name="day-selected" id="day-selected" onChange={e =>{ 
                                setInputs({ ...inputs, day: e.target.value })
                            } } required>
                                    <option value="monday">Monday</option>
                                    <option value="tuesday">Tuesday</option>
                                    <option value="wednesday">Wednesday</option>
                                    <option value="thrusday">Thursday</option>
                                    <option value="friday">Friday</option>
                                    <option value="saturday">Saturday</option>
                                    <option value="sunday">Sunday</option>
                                </select>
                            </div>
                            <div className="form-line">
                                <label>Enter your activity level</label>
                                <input id="level" 
                                type="number" name="level" 
                                placeholder="Activity level" 
                                onChange={e =>{ 
                                    setInputs({ ...inputs, level: e.target.value })
                                }}
                                />
                            </div>
                            <div>
                                { renderOptions() }
                            </div>
                        </form>
                    </div>
            </div>
        </Layout>
    )
}

export default WithAuth(AddActivity)