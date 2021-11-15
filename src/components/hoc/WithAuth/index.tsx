import {FC} from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../../hooks';
import { Loading } from '../../common/Loading';

// La teres es verificar si ya hay un usuario en secion 
// carga la pagina Login
//si hay un usuario en sesion, entonces se carga el componente actual o, si vengo de login o singup, tengo q enviar a la pagina principal

const publicRoutes = ["/login", "/sign-up"];

type withAuthenticationFn = (Component: FC) => FC;

const WithAuth: withAuthenticationFn = (Component) => {
    const Authenticated: FC = (): JSX.Element | null => {
    const { push, location } = useHistory();

    const { hasUserLoggedIn } = useAuth();

    console.log(hasUserLoggedIn);

    if (hasUserLoggedIn === undefined) return <Loading />;

    if (hasUserLoggedIn && publicRoutes.includes(location.pathname)) push("/");

    if (hasUserLoggedIn === false && !publicRoutes.includes(location.pathname))
        push("/login");

    return <Component />;
    };

    return Authenticated;
};

export { WithAuth }