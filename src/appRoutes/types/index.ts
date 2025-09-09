import React from 'react'
import {MetaDescriptorBuilder} from '@appRoutes/types/metaDescriptor'
import {LinksDescriptorBuilder} from '@appRoutes/types/linkDescriptor'

type AppRoute = {
    id: string,
    parentId: undefined,
    path: string,
    index?: boolean,
    caseSensitive?: boolean,
    module: string,
    imports?: string[],
}

type AppRouteModule = {
    default: React.ComponentType<any>
    links?: LinksDescriptorBuilder
    meta?: MetaDescriptorBuilder
}


export type AppRouteManifest = {
    version: string
    entry: {
        module: string
        imports: string[]
    }
    routes: {
        root: AppRoute
        [key: string]: AppRoute
    }
    url: string
    mode: 'production' | 'dev'
    hmrServerPort: number
}
export type AppRouteModules = {
    root: AppRouteModule
    [key: string]: AppRouteModule
}
