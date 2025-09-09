import React from 'react'
import {GlobalData} from '@globalData/types'

export const GlobalDataContextValue = React.createContext<GlobalData>(
    {
        data: null,
        errors: [],
        errorCode: null,
        error: false,
    },
)

export const GlobalDataContextSetter = React.createContext<{
    setGlobalData: (data: GlobalData) => void
}>(
    {
        setGlobalData: () => {
        },
    },
)
