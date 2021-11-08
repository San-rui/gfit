import {FC} from 'react';

// La teres es verificar si ya hay un usuario en secion 
// carga la pagina Login
//si hay un usuario en sesion, entonces se carga el componente actual o, si vengo de login o singup, tengo q enviar a la pagina principal

const isAuthenticated = true;

type WithAuthenticatedFc = (Component: FC) => FC;

const WithAuth: WithAuthenticatedFc = (Component) => {

    const Authenticated: FC = (): JSX.Element | null =>{
        
        

        return isAuthenticated ? <Component /> : null;
    }

    return  Authenticated;
}

export { WithAuth }