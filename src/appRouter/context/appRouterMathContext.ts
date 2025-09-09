import React from 'react'
import {AppRouterMath} from '@appRouter/types'

export const AppRouterMathContextValue = React.createContext<AppRouterMath>(
    {
        params: {},
        routeModuleKey: null,
    },
)