import React, {createContext, useContext, useState} from 'react';

const StateContext = createContext();

export const ContextProvider  = ({children}) => {
    const [moodId, setMoodId] = useState(0);

    return (
        <StateContext.Provider value={{moodId, setMoodId}}>
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);