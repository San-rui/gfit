import { useState } from "react";
import { getUsers } from "../../api";
import { User } from "../../types";

const useAuth = ()  => {
    const  [userSession, setUserSession]= useState<User>(
        JSON.parse(localStorage.getItem("user")!)
    );

    const login = async (email: string, password: string) => {
        const user= await getUsers();

        const userLogged = user.find(Element =>Element.email===email && Element.password===password);
        
        console.log(userLogged);

        userLogged && setUserSession({...userLogged, password: "null"});
    };

    // const logout=()=>{

    // };

    // const recoveryPassword =( )=>{

    // };

    return { login, userSession }
}

export { useAuth }
