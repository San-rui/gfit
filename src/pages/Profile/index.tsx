import { FC, useContext} from "react";

import woman from '../../assets/images/woman.png';
import man from '../../assets/images/man.png';
import { WithAuth } from '../../components/hoc';
import { Layout } from '../../components/layout';

import { AuthContext } from "../../context";

import './style.scss'


const Profile: FC= () =>{

    const { currentUser } = useContext(AuthContext);

    console.log(currentUser)
    
    return (
        <Layout>
            <div className="main-profile">
                <h2 className="title">My Profile</h2>
                <div className="profile">
                    <img src={(currentUser?.gender==='woman')? woman: man} alt=""/>
                    <h2 className="name">{currentUser?.name}</h2>
                    <div className="profile-info">
                        <div className="info">
                            <p>Gender</p>
                            <p>{currentUser?.gender}</p>
                        </div>
                        <div className="info">
                            <p>Age</p>
                            <p>{currentUser?.age}</p>
                        </div>
                        <div className="info">
                            <p>Weight in Kg</p>
                            <p>{currentUser?.weight}</p>
                        </div>
                        <div className="info">
                            <p>Height in Cm</p>
                            <p>{currentUser?.height}</p>
                        </div>
                        
                    </div>
                </div>
            </div>
            
        </Layout>
    )

}

export default WithAuth (Profile)