import React from 'react'
import {AppLocation} from '@appLocation/types'

export const AppLocationContextValue = React.createContext<AppLocation>(
    {
        url: '',
        originalUrl: '',
    },
)

export const AppLocationContextSetter = React.createContext<(location: AppLocation) => void>(
    () => {
    },
)