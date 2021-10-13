import woman from '../../assets/images/woman.png';
import { Layout } from '../../components/layout'

import './style.scss'

const Profile = () =>{

    return (
        <Layout>
            <div className="Profile">
            <img src={woman} alt=""/>
            <h2>Sandra</h2>
            <div className="profile-info">
                <div className="info">
                    <p>Gender</p>
                    <p>Female</p>
                </div>
                <div className="info">
                    <p>Age</p>
                    <p>38</p>
                </div>
                <div className="info">
                    <p>Weight in Kg</p>
                    <p>58</p>
                </div>
                <div className="info">
                    <p>Height in Cm</p>
                    <p>171</p>
                </div>
                
            </div>
        </div>
        </Layout>
    )

}

export { Profile }