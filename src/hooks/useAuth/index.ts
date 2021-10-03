import { useState } from "react";

const useAuth = ()  => {


    const login = (email: string, password: string) => {
        console.log(`El evento reacciono`);
    }

    
    return { login }
}

export { useAuth }