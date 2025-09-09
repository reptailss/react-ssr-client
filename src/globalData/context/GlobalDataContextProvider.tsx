import React, {ReactNode, useMemo, useState} from 'react'
import {GlobalData} from '@globalData/types'
import {GlobalDataContextSetter, GlobalDataContextValue} from '@globalData/context/globalDataContext'

const EMPTY_GLOBAL_DATA: GlobalData = {
    data: null,
    errors: [],
    error: false,
    errorCode: null,
}
export const GlobalDataContextProvider = ({
                                              initial,
                                              children,
                                          }: {
    initial: GlobalData | null
    children: ReactNode
}) => {
    
    const [globalData, setGlobalData] = useState<GlobalData>(initial || EMPTY_GLOBAL_DATA)
    
    const setterContext = useMemo(() => {
        return {
            setGlobalData,
        }
    }, [])
    
    return (
        <GlobalDataContextSetter.Provider
            value={setterContext}
        >
            <GlobalDataContextValue.Provider
                value={globalData}
            >
                {children}
            </GlobalDataContextValue.Provider>
        </GlobalDataContextSetter.Provider>
    )
}
