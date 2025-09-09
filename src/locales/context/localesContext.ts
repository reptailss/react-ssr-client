import React from 'react'
import {LocalesContext} from '@locales/context/types'

export const LocalesContextValue = React.createContext<LocalesContext>(
    {
        locale: null,
        locales: [],
        setLocale: () => {
        },
    },
)