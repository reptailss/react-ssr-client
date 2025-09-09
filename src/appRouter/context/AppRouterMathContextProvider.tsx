import React, {ReactNode, useMemo} from 'react'
import {useAppRoutesContext} from '@appRoutes/context/useAppRoutesContext'
import {useAppRouterContext} from '@appRouter/context/useAppRouterContext'
import {RouterMatcher} from '@appRouter/RouterMatcher'
import {AppRouterMathContextValue} from '@appRouter/context/appRouterMathContext'
import {useLocalesContext} from '@locales/context/useLocalesContext'


export const AppRouterMathContextProvider = ({
                                          children,
                                      }: {
    children: ReactNode
}) => {
    
    const appRoutesContext = useAppRoutesContext()
    const appRouterContext = useAppRouterContext()
    const localesContext = useLocalesContext()
    
    const appRouterMath = useMemo(() => {
        return RouterMatcher.math(
            appRoutesContext.routesManifest.routes,
            appRouterContext.path,
            localesContext.locales,
        )
    }, [appRoutesContext.routesManifest.routes, appRouterContext.path])
    
    return (
        <AppRouterMathContextValue.Provider
            value={appRouterMath}
        >
            {children}
        </AppRouterMathContextValue.Provider>
    )
}