import './style.scss'
import { Profile } from '../../components'
import { CardFood } from '../../components'
import { CardStatus} from '../../components'
import { CardSport } from '../../components'

const Main = () => {

    return (
        <div className="main-primary">
            <Profile/>
            <section className="card-food">
                <CardFood/>
                <CardStatus/>
            </section>
            <section className="card-sport">
                <CardSport/>
                <CardStatus/>
            </section>
        </div>

    )
    
}

export { Main }