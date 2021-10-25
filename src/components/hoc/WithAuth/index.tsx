import {FC} from 'react';

const isAuthenticated = true;

type WithAuthenticatedFc = (Component: FC) => FC;

const WithAuth: WithAuthenticatedFc = (Component) => {

    const Authenticated: FC = (): JSX.Element | null =>{
        
        return isAuthenticated ? <Component /> : null;

    }

    return  Authenticated;
}

export { WithAuth }