import { createContext } from "react";

export const UserContext = createContext({});

export const Userprovider = ({ children }) => {
    return(
        <UserContext.Provider value={{}}>
            {children}
        </UserContext.Provider>
    )
};
