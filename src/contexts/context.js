import React , {useState} from 'react';

export const content = React.createContext();

export const Context = ({children}) => {
    const [textAreaInput, setTextAreaInput] = useState('')
    const [posts, setPosts] = useState([]);

    //States for EveryoneCanReply dropDown
    const [activeEveryone, setActiveEveryone] = useState(true);
    const [activePeopleFollow, setActivePeopleFollow] = useState(false);
    const [activePeopleMention, setActivePeopleMention] = useState(false);


    
    return (
        <content.Provider value={{
            posts,
            setPosts,
            textAreaInput,
            setTextAreaInput,
            activeEveryone,
            setActiveEveryone,
            activePeopleFollow,
            setActivePeopleFollow,
            activePeopleMention,
            setActivePeopleMention
        }}>
            {children}
        </content.Provider>
    )
}