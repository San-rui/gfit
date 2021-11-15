import { FC } from 'react';
import { Layout } from '../../components/layout'
import { CardFood } from '../../components/parts';
import { CardStatus} from '../../components/parts';
import { CardSport } from '../../components/parts';
import { WithAuth} from '../../components/hoc';

import './style.scss';

const Dashboard: FC= () => {

    return (
        <Layout>      
            <div className="main-primary">
                <h2>My dashboard</h2>
                <div>
                    <section className="card-food">
                        <CardFood/>
                    </section>
                    <section className="card-sport">
                        <CardSport/>
                    </section>
                </div>
            </div>
        </Layout>

    )
    
}

export default WithAuth (Dashboard)