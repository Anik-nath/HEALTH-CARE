import React, { createContext } from 'react';
import useFirbase from '../Hooks/useFirbase';
export const AuthContext = createContext();

const Authprovider = ({children}) => {
    const allContext = useFirbase();
    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;