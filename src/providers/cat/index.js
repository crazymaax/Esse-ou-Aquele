import { createContext, useContext, useState } from "react";

const CatContext = createContext();

export const CatProvider = ({ children }) => {

    const [firstImage, setFirstImage] = useState()
    const [secondImage, setSecondImage] = useState()
    return (
        <CatContext.Provider value={{ firstImage, setFirstImage, secondImage, setSecondImage}}>
            {children}
        </CatContext.Provider>
    );
};

export const useCat = () => useContext(CatContext);
