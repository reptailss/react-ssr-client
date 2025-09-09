import React from 'react'
import {AppRouterContext} from '@appRouter/context/types'

export const AppRouterContextValue = React.createContext<AppRouterContext | undefined>(
    undefined,
)