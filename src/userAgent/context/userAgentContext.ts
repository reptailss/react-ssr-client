import React from 'react'
import {UserAgentContext} from '@userAgent/context/types'

export const UserAgentContextValue = React.createContext<UserAgentContext | undefined>(
    undefined,
)