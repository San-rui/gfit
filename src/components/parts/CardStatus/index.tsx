import { FC, useEffect, useState } from 'react'
import { deleteFinishedMeal, getDataFinished } from '../../../api/users'
import { FinishedMeal } from '../../../types'
import { BiCheckCircle } from "react-icons/bi"

import './style.scss'

type Props={
    typeItem: string
}

const CardStatus:FC <Props> = ({typeItem} ) =>{

    const [finishedMeal, setFinishedMeal] = useState<FinishedMeal[] | undefined>();
    const [deleteF, setDelete]= useState(false);

    useEffect ( () => {
        getDataFinished(typeItem).then(response=>setFinishedMeal(response))
        showmealFinished()
    },[finishedMeal])

    const showmealFinished = () =>{
        const array:any=[]

        finishedMeal?.map(item=>{
            array.push(<div className="card-finished-meal">
                            <h4 className="title-day">{item.day}</h4>
                            <h5>{item.type}</h5>
                            <p className="text-meal">{item.mealOrwod}</p>
                        </div>
            )
        })
        if(array.length>0){
            return array
        } else{
            return (
                <div className="no-items">
                    <p className="no-item-title">Check the {typeItem} that you have finished clicking </p>
                    <BiCheckCircle size={32}/>
                </div>
            )
        }
        
    }

    useEffect ( () => {
        if(deleteF===true){
    
            deleteFinishedMeal(typeItem)
            setDelete(false)
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