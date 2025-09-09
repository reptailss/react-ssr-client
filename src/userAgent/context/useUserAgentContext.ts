import React from 'react'
import {UserAgentContextValue} from '@userAgent/context/userAgentContext'
import {UserAgentContext} from '@userAgent/context/types'

export function useUserAgentContext(): UserAgentContext {
    return React.useContext(UserAgentContextValue) as UserAgentContext
}