import { FC } from 'react';
import { Layout } from '../../components/layout'
import { CardFood } from '../../components/parts';
import { CardStatus} from '../../components/parts';
import { CardSport } from '../../components/parts';

const Dashboard: FC= () => {

    return (
        <Layout>
            <div className="main-primary">
                    <section className="card-food">
                        <CardFood/>
                        <CardStatus/>
                    </section>
                    <section className="card-sport">
                        <CardSport/>
                        <CardStatus/>
                    </section>
                </div>
        </Layout>

    )
    
}

export { Dashboard }