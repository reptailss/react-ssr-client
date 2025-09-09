import {AppRouteManifest, AppRouteModules} from '@appRoutes/types'

export type AppRoutesContext = {
    routesManifest: AppRouteManifest
    routeModules: AppRouteModules
    setRouteModules: (
        fn: (prev: AppRouteModules) => AppRouteModules,
    ) => void
    isLoadingRouteModule: boolean
    setIsLoadingRouteModule: (isLoading: boolean) => void
}