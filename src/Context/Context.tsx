import { createContext, ReactNode, useState } from "react";

export interface ContextType{
    num: number;
    setNum: React.Dispatch<React.SetStateAction<number>>;
    setProdArray:React.Dispatch<React.SetStateAction<never[]>>;
    prodArray: {}[]
}


export const Cartcontext = createContext<null | ContextType>(null);

const ContextProvider = ({children}: {children: ReactNode})=> {

    const [prodArray, setProdArray] = useState([]);
    const [num, setNum] = useState<number>(1);

    return(
        <Cartcontext.Provider value={{num, setNum, prodArray,setProdArray}}>
            {children}
        </Cartcontext.Provider>
    )
}


export default ContextProvider;
