import './style.scss'
import man from '../../assets/images/man.png'
import sport from '../../assets/images/sport.png'
import diet from '../../assets/images/diet.png'

const Header = () => {

    return (
        <div className="header-primary">
            <ul>
                <li>
                    <img src={man} alt=""/>
                    <a>Mi Perfil</a>
                </li>
                <li>
                    <img src={diet} alt=""/>
                    <a>Nutrición</a>
                </li>
                <li>
                    <img src={sport} alt=""/>
                    <a>Deporte</a>
                </li>
            </ul>
        </div>
    )
    
}

export { Header }