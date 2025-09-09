import React, {ReactNode, useState} from 'react'
import {AppRouter} from '@appRouter/types'
import {AppRouterContextValue} from '@appRouter/context/appRouterContext'

export const AppRouterProvider = ({
                               initial,
                               children,
                           }: {
    initial: AppRouter
    children: ReactNode
}) => {
    const [path, setPath] = useState<string>(initial.path)
    
    return (
        <AppRouterContextValue.Provider
            value={{
                path,
                setPath,
            }}
        >
            {children}
        </AppRouterContextValue.Provider>
    )
}
