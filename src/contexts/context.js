import React , {useState, useContext, useEffect} from 'react';

export const content = React.createContext();

export const Context = ({children}) => {
    const [textAreaInput, setTextAreaInput] = useState('')
    const [posts, setPosts] = useState([]);



    
    return (
        <content.Provider value={{posts, setPosts, textAreaInput, setTextAreaInput}}>
            {children}
        </content.Provider>
    )
}