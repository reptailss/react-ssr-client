import React from 'react'
import {PageData} from '@pageData/types'

export const PageDataContextValue = React.createContext<PageData>(
    {
        data: null,
        errorCode: null,
        errors: [],
        error: false,
    },
)

export const PageDataContextSetter = React.createContext<{
    setPageData: (data: PageData) => void
    setIsLoading: (isLoading: boolean) => void
}>(
    {
        setPageData: () => {
        },
        setIsLoading: () => {
        },
    },
)

export const PageDataContextIsLoading = React.createContext<boolean>(
    false,
)