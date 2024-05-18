import { createContext, useState, useContext } from "react";

const AppContext = createContext()

export const AppProvider = ({ children }) => {

    const [goToSelectSitcom, setGoToSelectSitcom] = useState(false)

    const handleGoToSelectSitcom = () => {
        setGoToSelectSitcom(true)
    }

    const [showSelected, setShowSelected] = useState(false)

    const handleShowSelected = () => {
        setShowSelected(true)
    }

    const closeWriteShow = () => {
        setShowSelected(false)
    }


    return (
        <AppContext.Provider
            value={{
                handleGoToSelectSitcom,
                goToSelectSitcom,
                showSelected,
                handleShowSelected,
                closeWriteShow
            }}
        >
            { children }
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}