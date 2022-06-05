import React, {useReducer} from "react";

export const CreateContext = React.createContext({});

export const StateProvider = ({reducer, initialState, children}: any) => (
    <CreateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </CreateContext.Provider>
);

export const useStateValue = () => React.useContext(CreateContext)
