import React, {useMemo} from 'react'
import {useAppRoutesContext} from '@appRoutes/context/useAppRoutesContext'
import {usePageDataContext} from '@pageData/context/usePageDataContext'
import {useAppRouterContext} from '@appRouter/context/useAppRouterContext'
import {useAppRouterMathContext} from '@appRouter/context/useAppRouterMatchContext'
import {useLocalesContext} from '@locales/context/useLocalesContext'
import {useUserAgentContext} from '@userAgent/context/useUserAgentContext'
import {useGlobalDataContext} from '@globalData/context/useGlobalDataContext'
import {useAppLocationContext} from '@appLocation/context/useAppLocationContext'

export const Scripts = () => {
    
    const appRoutesContext = useAppRoutesContext()
    const pageDataContext = usePageDataContext()
    const globalDataContext = useGlobalDataContext()
    const appRouterContext = useAppRouterContext()
    const appRouterMathContext = useAppRouterMathContext()
    const localesContext = useLocalesContext()
    const userAgentContext = useUserAgentContext()
    const appLocationContext = useAppLocationContext()
    
    const initialScripts = useMemo(() => {
        const routes: string[] = ['root']
        if (appRouterMathContext.routeModuleKey) {
            routes.push(appRouterMathContext.routeModuleKey)
        }
        if ('routes/404' in appRoutesContext.routesManifest.routes) {
            routes.push('routes/404')
        }
        const scriptsContent = `
        import "${appRoutesContext.routesManifest.url}";
        ${routes.map((routeId, index) => {
            return `import * as route${index} from ${JSON.stringify(appRoutesContext.routesManifest.routes[routeId].module)};`
        }).join('\n')}
        window.__osSsrRouteModules = {${routes.map((routeId, index) => `"${routeId}":route${index}`).join(',')}};
        window.__osSsrRouter = { path:"${appRouterContext.path}"}
        window.__osSsrPageData = ${JSON.stringify({
            data: pageDataContext.data || null,
            error: pageDataContext.error || false,
            errors: pageDataContext.errors || [],
            errorCode: pageDataContext.errorCode,
        })}
            window.__osSsrGlobalData = ${JSON.stringify(globalDataContext)}
            window.__osSsrUserAgent = ${JSON.stringify(userAgentContext.userAgent)}
            window.__osSsrLocales = ${JSON.stringify(localesContext.locales)}
            window.__osSsrLocale = ${JSON.stringify(localesContext.locale)}
            window.__osSsrLocation = ${JSON.stringify(appLocationContext)}
        ${appRoutesContext.routesManifest.mode === 'dev' ? `
            const ws = new WebSocket('ws://localhost:${appRoutesContext.routesManifest.hmrServerPort}')
             ws.onmessage = (event) => {
                const data = JSON.parse(event.data)
                if (data.type === 'reload') location.reload()
            }` : ''}
        import ("${appRoutesContext.routesManifest.entry.module}")
       `
        return (
            <>
                {appRoutesContext.routesManifest.entry.imports.map((value) => {
                    return (
                        <link
                            key={value}
                            rel="modulepreload" href={value}
                        />
                    )
                })}
                
                <link
                    key={'routesManifest'}
                    rel="modulepreload" href={appRoutesContext.routesManifest.url}
                />
                
                <link
                    key={'entry'}
                    rel="modulepreload" href={appRoutesContext.routesManifest.entry?.module}
                />
                
                {routes.map((routeId) => {
                    return (
                        <link
                            key={routeId}
                            rel="modulepreload" href={appRoutesContext.routesManifest.routes[routeId].module}
                        />
                    )
                })}
                
                <script
                    type="module"
                    async={'""' as any}
                    dangerouslySetInnerHTML={{
                        __html: scriptsContent,
                    }}
                />
            </>
        )
    }, [])
    
    
    return (
        <>
            {initialScripts}
        </>
    )
}
