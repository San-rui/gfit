import { FC } from 'react'
import { LocalStorageType } from '../../../types'
import './style.scss'

const CardStatus:FC = () =>{

    const showmealFinished = () =>{

        // let mealFinished = JSON.parse(localStorage.getItem('meal-checked'))
        // console.log("el storage",mealFinished)
        // mealFinished.map((item:any) =>{
        //     return(
        //         <>
        //             <h5>{item.type}</h5>
        //             <p>{item.meal}</p>
        //         </>
        //     )
        // })
        return(<p>test</p>)
    }
    
    return (
        <div className="card-status">
            <div className="status">
                <h2>Finalizada</h2>
                <div>{showmealFinished()}</div>
            </div>
        </div>
    )
}

export { CardStatus }