import {useCallback} from 'react'
import {useAppRoutesContext} from '@appRoutes/context/useAppRoutesContext'
import {useAppRouterContext} from '@appRouter/context/useAppRouterContext'
import {useLoadPageData} from '@pageData/useLoadPageData'
import {RouterMatcher} from '@appRouter/RouterMatcher'
import {useLocalesContext} from '@locales/context/useLocalesContext'
import {useSetAppLocationContext} from '@appLocation/context/useSetAppLocationContext'


export function useNavigate(): (to: string, options?: {
    refreshGlobalData?: boolean
    disableScrollTop?: boolean
    locale?: string
}) => void {
    const appRoutesContext = useAppRoutesContext()
    const appRouterContext = useAppRouterContext()
    const loadPageDataFn = useLoadPageData()
    const localesContext = useLocalesContext()
    const setAppLocationContext = useSetAppLocationContext()
    
    const loadModule = useCallback(async (routeModuleKey: string): Promise<void> => {
        const appRoute = appRoutesContext.routesManifest.routes[routeModuleKey]
        if (!appRoute) {
            return
        }
        const routeModule = await import(/* webpackIgnore: true */appRoute.module)
        appRoutesContext.setRouteModules((prev) => {
            return {
                ...prev,
                [routeModuleKey]: routeModule,
            }
        })
    }, [])
    
    return useCallback((
        to: string,
        options?: {
            refreshGlobalData?: boolean
            disableScrollTop?: boolean
            locale?: string,
        }) => {
        const pathParts = to.replace(/^\/+/, '').split('/')
        const firstPart = pathParts[0]
        const toContainsLocale = localesContext.locales.includes(firstPart)
        
        const usedLocale = options?.locale ? options?.locale : (toContainsLocale ? firstPart : localesContext.locale)
        
        const cleanPath = toContainsLocale ? pathParts.slice(1).join('/') : pathParts.join('/')
        
        const finalTo = usedLocale ? `/${usedLocale}${cleanPath ? `/${cleanPath}` : ''}` : `/${cleanPath}`
        
        window.history.pushState({
            refreshGlobalData: options?.refreshGlobalData,
        }, '', finalTo)
        
        const {routeModuleKey} = RouterMatcher.math(
            appRoutesContext.routesManifest.routes,
            finalTo,
            localesContext.locales,
        )
        if (
            routeModuleKey &&
            !(routeModuleKey in appRoutesContext.routeModules)
        ) {
            appRoutesContext.setIsLoadingRouteModule(true)
            loadModule(routeModuleKey).then(() => {
                loadPageDataFn(finalTo, {
                    refreshGlobalData: options?.refreshGlobalData,
                }).then(() => {
                    appRouterContext.setPath(finalTo)
                    if (usedLocale && usedLocale !== localesContext.locale) {
                        localesContext.setLocale(usedLocale)
                    }
                    if (!options?.disableScrollTop) {
                        window.scrollTo({
                            behavior: 'smooth',
                            top: 0,
                        })
                    }
                    appRoutesContext.setIsLoadingRouteModule(false)
                    setAppLocationContext({
                        url: finalTo,
                        originalUrl: finalTo,
                    })
                }).catch((error) => {
                    console.log(error)
                    appRouterContext.setPath(finalTo)
                    if (usedLocale && usedLocale !== localesContext.locale) {
                        localesContext.setLocale(usedLocale)
                    }
                    if (!options?.disableScrollTop) {
                        window.scrollTo({
                            behavior: 'smooth',
                            top: 0,
                        })
                    }
                    appRoutesContext.setIsLoadingRouteModule(false)
                    setAppLocationContext({
                        url: finalTo,
                        originalUrl: finalTo,
                    })
                })
            })
        } else {
            loadPageDataFn(finalTo, {
                refreshGlobalData: options?.refreshGlobalData,
            }).then(() => {
                appRouterContext.setPath(finalTo)
                if (usedLocale && usedLocale !== localesContext.locale) {
                    localesContext.setLocale(usedLocale)
                }
                if (!options?.disableScrollTop) {
                    window.scrollTo({
                        behavior: 'smooth',
                        top: 0,
                    })
                }
                setAppLocationContext({
                    url: finalTo,
                    originalUrl: finalTo,
                })
            }).catch((error) => {
                console.log(error)
                appRouterContext.setPath(finalTo)
                if (usedLocale && usedLocale !== localesContext.locale) {
                    localesContext.setLocale(usedLocale)
                }
                if (!options?.disableScrollTop) {
                    window.scrollTo({
                        behavior: 'smooth',
                        top: 0,
                    })
                }
                setAppLocationContext({
                    url: finalTo,
                    originalUrl: finalTo,
                })
            })
        }
        
        
    }, [
        appRoutesContext.routesManifest.routes,
        loadModule,
        appRouterContext.path,
        localesContext.locale,
        localesContext.locales,
    ])
}