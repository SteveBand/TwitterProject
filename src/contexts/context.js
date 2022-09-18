import React , {useState, useContext, useEffect} from 'react';

export const content = React.createContext();

export const Context = ({children}) => {

    return (
        <content.Provider value={''}>
            {children}
        </content.Provider>
    )
}