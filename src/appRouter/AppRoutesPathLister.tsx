import React, {useEffect} from 'react'
import {useLoadPageData} from '@pageData/useLoadPageData'
import {useLocalesContext} from '@locales/context/useLocalesContext'
import {useAppRouterContext} from '@appRouter/context/useAppRouterContext'
import {useSetAppLocationContext} from '@appLocation/context/useSetAppLocationContext'

export const AppRoutesPathLister = () => {
    const loadPageDataFn = useLoadPageData()
    const localesContext = useLocalesContext()
    const appRouterContext = useAppRouterContext()
    const setAppLocationContext = useSetAppLocationContext()
    useEffect(() => {
        if (!document) {
            return
        }
        const onPop = (event: PopStateEvent) => {
            const to = window.location.pathname
            const targetLocale = to.split('/')[1]
            const hasLocaleInTo = localesContext.locales.includes(targetLocale)
            loadPageDataFn(to, {
                refreshGlobalData: event.state?.refreshGlobalData === true,
            }).then(() => {
                appRouterContext.setPath(to)
                if (hasLocaleInTo) {
                    localesContext.setLocale(targetLocale)
                }
                window.scrollTo({
                    behavior: 'smooth',
                    top: 0,
                })
                setAppLocationContext({
                    url: to,
                    originalUrl: to,
                })
            }).catch(()=>{
                appRouterContext.setPath(to)
                if (hasLocaleInTo) {
                    localesContext.setLocale(targetLocale)
                }
                window.scrollTo({
                    behavior: 'smooth',
                    top: 0,
                })
                setAppLocationContext({
                    url: to,
                    originalUrl: to,
                })
            })
           
        }
        window.addEventListener('popstate', onPop)
        return () => window.removeEventListener('popstate', onPop)
    }, [])
    return <></>
}
