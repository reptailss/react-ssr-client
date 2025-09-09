import {useContext} from 'react'
import {AppRouterMathContextValue} from '@appRouter/context/appRouterMathContext'

export function useParams(): Record<string, string> {
    return useContext(AppRouterMathContextValue).params
}