import React from 'react'
import {PageDataContextIsLoading, PageDataContextValue} from '@pageData/context/pageDataContext'
import {PageData} from '@pageData/types'

export function useIsLoadingPageDataContext(): boolean {
    return React.useContext(PageDataContextIsLoading)
}