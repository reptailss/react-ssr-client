import React from 'react'
import {AppRoutesContext} from '@appRoutes/context/types'
import {AppRoutesContextValue} from '@appRoutes/context/appRoutesContext'

export function useAppRoutesContext(): AppRoutesContext {
    return React.useContext(AppRoutesContextValue) as AppRoutesContext
}