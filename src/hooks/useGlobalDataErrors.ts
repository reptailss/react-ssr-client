import {useMemo} from 'react'
import {useGlobalDataContext} from '@globalData/context/useGlobalDataContext'

export function useGlobalDataErrors(): {
    error: boolean
    errorCode: string | null
    errors: Array<string | {
        key: string
        message: string
    }>
} {
    const context = useGlobalDataContext()
    return useMemo(() => {
        return {
            error: context.error,
            errorCode: context.errorCode,
            errors: context.errors,
        }
    }, [context.error])
}