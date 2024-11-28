import { createContext, ReactElement, useState } from "react"

type initialContextType = {
    ivfResult: number;
    setIvfResult: React.Dispatch<React.SetStateAction<number>>;
    ivfCycles: number;
    setIvfCycles: React.Dispatch<React.SetStateAction<number>>;
}

const initalContext:initialContextType = {
    ivfResult: NaN,
    setIvfResult: ()=>{},
    ivfCycles: 0,
    setIvfCycles: ()=>{}
}

export const AppContext = createContext(initalContext);

type propsType = {
    children: ReactElement
}

const AppProvider = ({ children }:propsType) => {

    const [ ivfResult, setIvfResult ] = useState(NaN);
    const [ ivfCycles, setIvfCycles ] = useState(0);


    return(
        <>
            <AppContext.Provider value={{
                ivfResult, setIvfResult, ivfCycles, setIvfCycles 
            }}>
                {children}
            </AppContext.Provider>
        </>
    )
}

export default AppProvider;