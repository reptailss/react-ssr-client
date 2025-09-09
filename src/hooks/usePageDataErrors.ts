import {useMemo} from 'react'
import {usePageDataContext} from '@pageData/context/usePageDataContext'

export function usePageDataErrors(): {
    error: boolean
    errorCode: string | null
    errors: Array<string | {
        key: string
        message: string
    }>
} {
    const context = usePageDataContext()
    return useMemo(() => {
        return {
            error: context.error,
            errorCode: context.errorCode,
            errors: context.errors,
        }
    }, [context.error])
}