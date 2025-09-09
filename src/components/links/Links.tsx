import React, {useMemo} from 'react'
import {useAppRoutesContext} from '@appRoutes/context/useAppRoutesContext'
import {useAppRouterMathContext} from '@appRouter/context/useAppRouterMatchContext'
import {usePageDataContext} from '@pageData/context/usePageDataContext'
import {useGlobalDataContext} from '@globalData/context/useGlobalDataContext'
import {useLocalesContext} from '@locales/context/useLocalesContext'

export const Links = () => {
    const context = useAppRoutesContext()
    const appRouterMathContext = useAppRouterMathContext()
    const appRoutesContext = useAppRoutesContext()
    const pageDataContext = usePageDataContext()
    const globalDataContext = useGlobalDataContext()
    const localesContext = useLocalesContext()
    const rootLinks = useMemo(() => {
        if (!context.routeModules.root.links) {
            return []
        }
        return context.routeModules.root.links(null, globalDataContext.data, {
            locale: localesContext.locale,
        })
    }, [context.routeModules.root.links, globalDataContext.data])
    
    const targetRouteLinks = useMemo(() => {
        if (
            !appRouterMathContext.routeModuleKey ||
            !(appRouterMathContext.routeModuleKey in appRoutesContext.routeModules)
        ) {
            return []
        }
        const module = appRoutesContext.routeModules[appRouterMathContext.routeModuleKey]
        if (!module?.links) {
            return []
        }
        return module.links(
            pageDataContext.data,
            globalDataContext.data, {
                locale: localesContext.locale,
            })
        
    }, [
        appRoutesContext.routeModules,
        appRouterMathContext.routeModuleKey,
        pageDataContext.data,
        globalDataContext.data,
    ])
    return (
        
        <>
            {rootLinks.map((linkItem) => {
                return (
                    <link
                        rel={linkItem.rel}
                        href={linkItem.href}
                        key={linkItem.href}
                    />
                )
            })}
            
            {targetRouteLinks.map((linkItem) => {
                return (
                    <link
                        rel={linkItem.rel}
                        href={linkItem.href}
                        key={linkItem.href}
                    />
                )
            })}
        
        </>
    )
}
