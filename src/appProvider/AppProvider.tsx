import React, {ReactNode} from 'react'
import {AppContext} from '@appProvider/types'
import {UserAgentContextProvider} from '@userAgent/context/UserAgentContextProvider'
import {GlobalDataContextProvider} from '@globalData/context/GlobalDataContextProvider'
import {PageDataContextProvider} from '@pageData/context/PageDataContextProvider'
import {AppRoutesProvider} from '@appRoutes/context/AppRoutesProvider'
import {LocalesProvider} from '@locales/context/LocalesProvider'
import {AppRouterProvider} from '@appRouter/context/AppRouterProvider'
import {AppRoutesPathLister} from '@appRouter/AppRoutesPathLister'
import {AppRouterMathContextProvider} from '@appRouter/context/AppRouterMathContextProvider'
import {AppLocationProvider} from '@appLocation/context/AppLocationProvider'


export const AppProvider = ({
                                appContext,
                                children,
                            }: {
    appContext: AppContext
    children: ReactNode
}) => {
    return (
        <GlobalDataContextProvider
            initial={appContext.globalData}
        >
            <UserAgentContextProvider
                userAgent={appContext.userAgent}
            >
                <LocalesProvider
                    initialLocale={appContext.locale}
                    locales={appContext.locales}
                >
                    <PageDataContextProvider
                        initial={appContext.pageData}
                    >
                        <AppLocationProvider
                            initial={appContext.location}
                        >
                            <AppRoutesProvider
                                initial={appContext.routes}
                            >
                                <AppRouterProvider
                                    initial={appContext.router}
                                >
                                    <AppRoutesPathLister />
                                    
                                    <AppRouterMathContextProvider>
                                        {children}
                                    </AppRouterMathContextProvider>
                                </AppRouterProvider>
                            </AppRoutesProvider>
                        </AppLocationProvider>
                    
                    </PageDataContextProvider>
                </LocalesProvider>
            </UserAgentContextProvider>
        </GlobalDataContextProvider>
    
    )
}

