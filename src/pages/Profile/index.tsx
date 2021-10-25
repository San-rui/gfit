import woman from '../../assets/images/woman.png';
import { WithAuth } from '../../components/hoc';
import { Layout } from '../../components/layout';
import {useAuth} from '../../hooks'

import './style.scss'


const Profile = () =>{

    const { userSession } = useAuth();
    
    return (
        <Layout>
            <div className="main-profile">
                <h2 className="title">My Profile</h2>
                <div className="profile">
                    <img src={woman} alt=""/>
                    <h2 className="name">{userSession.name}</h2>
                    <div className="profile-info">
                        <div className="info">
                            <p>Gender</p>
                            <p>{userSession.gender}</p>
                        </div>
                        <div className="info">
                            <p>Age</p>
                            <p>{userSession.age}</p>
                        </div>
                        <div className="info">
                            <p>Weight in Kg</p>
                            <p>{userSession.weight}</p>
                        </div>
                        <div className="info">
                            <p>Height in Cm</p>
                            <p>{userSession.height}</p>
                        </div>
                        
                    </div>
                </div>
            </div>
            
        </Layout>
    )

}

export default WithAuth (Profile)