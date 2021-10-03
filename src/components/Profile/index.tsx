import './style.scss'
import man from '../../assets/images/man.png'

const Profile = () =>{

    return (
        <div className="Profile">
            <img src={man} alt=""/>
            <h2>Sandra</h2>
            <div className="profile-info">
                <div className="info">
                    <p>Sexo</p>
                    <p>Femenino</p>
                </div>
                <div className="info">
                    <p>Edad</p>
                    <p>38</p>
                </div>
                <div className="info">
                    <p>Peso en Kg</p>
                    <p>58</p>
                </div>
                <div className="info">
                    <p>Altura en Cm</p>
                    <p>171</p>
                </div>
                
            </div>

        </div>
    )

}

export { Profile }