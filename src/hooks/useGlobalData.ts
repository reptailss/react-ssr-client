import React from 'react'
import {GlobalDataContextValue} from '@globalData/context/globalDataContext'

export function useGlobalData<Data>(): Data | null {
    return React.useContext(GlobalDataContextValue).data
}