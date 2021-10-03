import './style.scss'

const CardStatus = () =>{

    return (
        <div className="card-status">
            <div className="status">
                <h2>Finalizada</h2>
                <p>Calorias totales: <span> 568 </span></p>
            </div>
            <div className="status">
                <h2>En proceso</h2>
                <p>Calorias totales: <span> 568 </span></p>
            </div>
            <div className="status">
                <h2>Pendiente</h2>
                <p>Calorias totales: <span> 568 </span></p>
            </div>
        </div>
    )
}

export { CardStatus }