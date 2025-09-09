import React, {ReactNode, useMemo} from 'react'
import {UserAgentContextValue} from '@userAgent/context/userAgentContext'
import {getDeviceType} from '@userAgent/deviceDetect'

export const UserAgentContextProvider = ({
                                             userAgent,
                                             children,
                                         }: {
    userAgent: string
    children: ReactNode
}) => {
    
    const value = useMemo(() => {
        return {
            userAgent,
            deviceType: getDeviceType(userAgent),
        }
    }, [])
    
    return (
        <UserAgentContextValue.Provider
            value={value}
        >
            {children}
        </UserAgentContextValue.Provider>
    )
}

