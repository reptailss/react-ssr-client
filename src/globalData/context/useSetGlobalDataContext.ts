import React from 'react'
import {GlobalDataContextSetter} from '@globalData/context/globalDataContext'

export function useSetGlobalDataContext() {
    return React.useContext(GlobalDataContextSetter)
}