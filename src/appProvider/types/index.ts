import {AppRouteManifest, AppRouteModules} from '@appRoutes/types'
import {PageData} from '@pageData/types'
import {AppRouter} from '@appRouter/types'
import {GlobalData} from '@globalData/types'
import {AppLocation} from '../../appLocation/types'

export type AppContext = {
    routes: {
        routesManifest: AppRouteManifest,
        routeModules: AppRouteModules
    }
    pageData: PageData
    globalData: GlobalData | null
    router: AppRouter
    locales: string[]
    locale: string | null
    userAgent: string
    location: AppLocation
}