import React, {useCallback} from 'react'
import {useLocalesContext} from '@locales/context/useLocalesContext'
import {useNavigate} from '@appRouter/useNavigate'
import {useAppRouterContext} from '@appRouter/context/useAppRouterContext'
import {LocalesContextValue} from '@locales/context/localesContext'

export function useChangeLocale(): (locale: string, options?: {
    refreshGlobalData?: boolean
}) => void {
    const localesContext = useLocalesContext()
    const navigate = useNavigate()
    const appRouterContext = useAppRouterContext()
    
    return useCallback((locale: string, options?: {
        refreshGlobalData?: boolean
    }) => {
        if (!localesContext.locales.includes(locale)) {
            console.warn(`${locale} not found in server locales`)
            return
        }
        navigate(appRouterContext.path, {
            refreshGlobalData: options?.refreshGlobalData,
            locale,
        })
        
    }, [
        localesContext.locales,
        navigate,
        appRouterContext.path,
    ])
}

export function useLocales(): string[] {
    return React.useContext(LocalesContextValue).locales
}

export function useLocale(): string | null {
    return React.useContext(LocalesContextValue).locale
}