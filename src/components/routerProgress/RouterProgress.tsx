import {useAppRoutesContext} from '@appRoutes/context/useAppRoutesContext'
import {ReactNode} from 'react'
import {useIsLoadingPageDataContext} from '@pageData/context/useIsLoadingPageDataContext'

export const RouterProgress = ({
                                   children,
                               }: {
    children: ReactNode
}) => {
    const appRoutesContext = useAppRoutesContext()
    const isLoadingPageDataContext = useIsLoadingPageDataContext()
    
    if (!appRoutesContext.isLoadingRouteModule && !isLoadingPageDataContext) {
        return null
    }
    
    return children
}