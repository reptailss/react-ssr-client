import React, {useMemo} from 'react'
import {MetaDescriptor} from '@appRoutes/types/metaDescriptor'
import {useAppRoutesContext} from '@appRoutes/context/useAppRoutesContext'
import {useAppRouterMathContext} from '@appRouter/context/useAppRouterMatchContext'
import {usePageDataContext} from '@pageData/context/usePageDataContext'
import {useGlobalDataContext} from '@globalData/context/useGlobalDataContext'
import {useLocalesContext} from '@locales/context/useLocalesContext'

function isValidMetaTag(tagName: unknown): tagName is 'meta' | 'link' {
    return typeof tagName === 'string' && /^(meta|link)$/.test(tagName)
}


function MetaItem({metaDescriptor}: {
    metaDescriptor: MetaDescriptor
}) {
    if (!metaDescriptor) {
        return null
    }
    
    if ('tagName' in metaDescriptor) {
        const {tagName, ...rest} = metaDescriptor
        if (!isValidMetaTag(tagName)) {
            return null
        }
        const Comp = tagName
        return <Comp key={JSON.stringify(rest)} {...rest} />
    }
    
    if ('title' in metaDescriptor) {
        return <title key="title">{String(metaDescriptor.title)}</title>
    }
    
    if ('charset' in metaDescriptor) {
        metaDescriptor.charSet ??= metaDescriptor.charset
        delete metaDescriptor.charset
    }
    
    if ('charSet' in metaDescriptor && metaDescriptor.charSet != null) {
        return typeof metaDescriptor.charSet === 'string' ? (
            <meta key="charSet" charSet={metaDescriptor.charSet} />
        ) : null
    }
    
    if ('script:ld+json' in metaDescriptor) {
        try {
            let json = JSON.stringify(metaDescriptor['script:ld+json'])
            return (
                <script
                    key={`script:ld+json:${json}`}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{__html: json}}
                />
            )
        } catch (err) {
            return null
        }
    }
    return <meta key={JSON.stringify(metaDescriptor)} {...metaDescriptor} />
}

export const Meta = () => {
    const context = useAppRoutesContext()
    const appRouterMathContext = useAppRouterMathContext()
    const appRoutesContext = useAppRoutesContext()
    const pageDataContext = usePageDataContext()
    const globalDataContext = useGlobalDataContext()
    const localesContext = useLocalesContext()
    const rootMeta = useMemo(() => {
        if (!context.routeModules.root.meta) {
            return []
        }
        return context.routeModules.root.meta(null, globalDataContext.data, {
            locale: localesContext.locale,
        })
    }, [context.routeModules.root.meta, globalDataContext.data])
    
    const targetRouteMeta = useMemo(() => {
        if (
            !appRouterMathContext.routeModuleKey ||
            !(appRouterMathContext.routeModuleKey in appRoutesContext.routeModules)
        ) {
            return []
        }
        const module = appRoutesContext.routeModules[appRouterMathContext.routeModuleKey]
        if (!module?.meta) {
            return []
        }
        return module.meta(pageDataContext.data, globalDataContext.data, {
            locale: localesContext.locale,
        })
    }, [
        appRouterMathContext.routeModuleKey,
        appRoutesContext.routeModules,
        pageDataContext.data,
        globalDataContext.data,
        localesContext.locale,
    ])
    
    return (
        
        <>
            {rootMeta.map((metaDescriptor) => {
                return (
                    <MetaItem
                        metaDescriptor={metaDescriptor}
                        key={JSON.stringify(metaDescriptor)}
                    />
                )
            })}
            
            {targetRouteMeta.map((metaDescriptor, index) => {
                return (
                    <MetaItem
                        metaDescriptor={metaDescriptor}
                        key={JSON.stringify(metaDescriptor)}
                    />
                )
            })}
        
        </>
    )
}
