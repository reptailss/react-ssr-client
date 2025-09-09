import React from 'react'
import {GlobalDataContextValue} from '@globalData/context/globalDataContext'
import {GlobalData} from '@globalData/types'

export function useGlobalDataContext(): GlobalData {
    return React.useContext(GlobalDataContextValue) as GlobalData
}