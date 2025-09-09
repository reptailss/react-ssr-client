import React, {ReactNode, useState} from 'react'
import {AppRouteManifest, AppRouteModules} from '@appRoutes/types'
import {AppRoutesContextValue} from '@appRoutes/context/appRoutesContext'


export const AppRoutesProvider = ({
                               initial,
                               children,
                           }: {
    initial: {
        routesManifest: AppRouteManifest,
        routeModules: AppRouteModules
    }
    children: ReactNode
}) => {
    
    const [routeModules, setRouteModules] = useState<AppRouteModules>(initial.routeModules)
    const [isLoadingRouteModule, setIsLoadingRouteModule] = useState<boolean>(false)
    
    return (
        <AppRoutesContextValue.Provider
            value={{
                routesManifest: initial.routesManifest,
                routeModules,
                setRouteModules,
                isLoadingRouteModule,
                setIsLoadingRouteModule,
            }}
        >
            {children}
        </AppRoutesContextValue.Provider>
    )
}
