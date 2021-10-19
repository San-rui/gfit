import {FC} from 'react';
import {useHistory} from 'react-router-dom';
import { useAuth } from '../../../hooks'

const isAuthenticated = true;

type WithAuthenticatedFc = (Component: FC) => FC;

const WithAuth: WithAuthenticatedFc = (Component) => {

    const Authenticated: FC = (): JSX.Element | null =>{
        const { push } = useHistory();
        //if(isAuthenticated) push('./login');
        
        return isAuthenticated ? <Component /> : null;

    }

    return  Authenticated;
}

export { WithAuth }