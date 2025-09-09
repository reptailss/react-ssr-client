import React, {memo, useMemo} from 'react'
import {useAppRoutesContext} from '@appRoutes/context/useAppRoutesContext'
import {useAppRouterMathContext} from '@appRouter/context/useAppRouterMatchContext'
import {NotFound} from '@components/notFound/NotFound'


function Empty() {
    return <></>
}

export const Outlet = memo(() => {
    
    const routesContext = useAppRoutesContext()
    const appRouterMath = useAppRouterMathContext()
    
    const Component = useMemo(() => {
        if (!appRouterMath.routeModuleKey) {
            return NotFound
        }
        if (!(appRouterMath.routeModuleKey in routesContext.routeModules)) {
            return Empty
        }
        return routesContext.routeModules[appRouterMath.routeModuleKey].default
    }, [routesContext.routeModules, appRouterMath])
    
    return (
        <Component />
    )
})
