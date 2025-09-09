import {useContext} from 'react'
import {AppRouterMath} from '@appRouter/types'
import {AppRouterMathContextValue} from '@appRouter/context/appRouterMathContext'

export function useAppRouterMathContext(): AppRouterMath {
    return useContext(AppRouterMathContextValue) as AppRouterMath
}