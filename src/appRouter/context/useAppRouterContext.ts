import {useContext} from 'react'
import {AppRouterContext} from '@appRouter/context/types'
import {AppRouterContextValue} from '@appRouter/context/appRouterContext'

export function useAppRouterContext(): AppRouterContext {
    return useContext(AppRouterContextValue) as AppRouterContext
}