import {FC} from "react";
import {Header} from '../Header/';
import {Footer} from '../Footer';
import {Main} from '../Main';

type Props={
    id?: string,
    hidenHeader?: boolean,
};

const Layout: FC <Props> = ({children, hidenHeader})=>{
    return (
        <>
            {!hidenHeader && <Header/ >}
            <Main>
                { children }
            </Main>
        
            <Footer />
        </>
    );
};

export {Layout}