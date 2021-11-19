import { FC, useEffect, useState } from 'react'
import { deleteFinishedMeal, getDataFinished } from '../../../api/users'
import { FinishedMeal } from '../../../types'
import './style.scss'

const CardStatus:FC = () =>{

    const [finishedMeal, setFinishedMeal] = useState<FinishedMeal[] | undefined>();
    const [deleteF, setDelete]= useState(false);

    useEffect ( () => {
        getDataFinished().then(response=>setFinishedMeal(response))
        showmealFinished()
    },[finishedMeal])

    const showmealFinished = () =>{
        const array:any=[]

        finishedMeal?.map(item=>{
            array.push(<div className="card-finished-meal">
                            <h4 className="title-day">{item.day}</h4>
                            <h5>{item.type}</h5>
                            <p className="text-meal">{item.meal}</p>
                        </div>
            )
        })
        return array
    }

    useEffect ( () => {
        if(deleteF===true){
            deleteFinishedMeal()
        }
        
    },[deleteF])
    
    return (
        <div className="card-status">
            <h2 className="finished-title">Finished</h2>
            <div className="container">
                <div className="container-card">{showmealFinished()}</div>
                <button className="empty-button" onClick={()=>setDelete(true)}>EMPTY</button>
            </div>
            
        </div>
    )
}

export { CardStatus }