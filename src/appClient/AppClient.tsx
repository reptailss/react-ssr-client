import {AppRouteManifest, AppRouteModules} from '@appRoutes/types'
import React, {useMemo} from 'react'
import {AppRouter} from '@appRouter/types'
import {PageData} from '@pageData/types'
import {AppProvider} from '@appProvider/AppProvider'
import {AppContext} from '@appProvider/types'
import {GlobalData} from '@globalData/types'
import {AppLocation} from '../appLocation/types'


declare global {
    var __osSsrRouteManifest: AppRouteManifest
    var __osSsrRouteModules: AppRouteModules
    var __osSsrRouter: AppRouter
    var __osSsrPageData: PageData
    var __osSsrGlobalData: GlobalData
    var __osSsrLocales: string[]
    var __osSsrLocale: string | null
    var __osSsrUserAgent: string
    var __osSsrLocation: AppLocation
    
}

export const AppClient = () => {
    
    const appContext: AppContext = useMemo(() => {
        return {
            routes: {
                routesManifest: window.__osSsrRouteManifest,
                routeModules: window.__osSsrRouteModules,
            },
            pageData: window.__osSsrPageData,
            globalData:window.__osSsrGlobalData,
            router: window.__osSsrRouter,
            locales: window.__osSsrLocales,
            locale: window.__osSsrLocale,
            userAgent:window.__osSsrUserAgent,
            location:window.__osSsrLocation,
        }
    }, [])
    
    return (
        <AppProvider
            appContext={appContext}
        >
            <>
                {React.createElement(window.__osSsrRouteModules.root.default)}
            </>
        </AppProvider>
    )
}