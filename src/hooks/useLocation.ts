import React, {useMemo} from 'react'
import {AppLocationContextValue} from '@appLocation/context/appLocationContext'
import {AppLocation} from '@appLocation/types'
import {useLocalesContext} from '@locales/context/useLocalesContext'

export function useLocation(): AppLocation {
    return React.useContext(AppLocationContextValue)
}

export function useLocationWithoutLocale(): AppLocation {
    const context = React.useContext(AppLocationContextValue)
    const localesContext = useLocalesContext()
    return useMemo(() => {
        const segments = context.url.split('/').filter(Boolean)
        const targetLocale = segments[0]
        const hasLocaleInUrl = localesContext.locales.includes(targetLocale)
        
        let url = hasLocaleInUrl ? '/' + segments.slice(1).join('/') : context.url
        
        return {
            url,
            originalUrl: context.originalUrl,
        }
    }, [context, localesContext.locales])
}