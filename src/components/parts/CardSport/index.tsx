import './style.scss'
import {trainingApi} from './api'
import { useState } from 'react'
import { Activity} from '../../../types'



const CardSport = () =>{

    const [training, setTraining]= useState<Activity | undefined>();

    const getTraining = async() =>{
        try{ 
            const response: any = await trainingApi(); 
            setTraining(response);
        
            
        } catch(err){
            console.log(err);
        }
        
    }

    (!training)? getTraining(): console.log("TRAINING", training);

    
    return (
        <div>
            <h2 className="titile-sport">Entrenamiento</h2>
                <div>
                    <h3 className="week">Semana</h3>
                    <div className="days">
                        <div className="sport">
                            <h4>Lunes</h4>
                            <div>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                        <div className="sport">
                            <h4>Martes</h4>
                            <div>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                        <div className="sport">
                            <h4>Miercoles</h4>
                            <div>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                        <div className="sport">
                            <h4>Jueves</h4>
                            <div>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                        <div className="sport">
                            <h4>Viernes</h4>
                            <div>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                        <div className="sport">
                            <h4>Sábado</h4>
                            <div>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                        <div className="sport">
                            <h4>Domingo</h4>
                            <div>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <select name="trainingOptions" id="trainingOptions">

                </select>
        </div>
    )

}

export { CardSport }