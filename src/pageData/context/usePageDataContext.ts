import React from 'react'
import {PageDataContextValue} from '@pageData/context/pageDataContext'
import {PageData} from '@pageData/types'

export function usePageDataContext(): PageData {
    return React.useContext(PageDataContextValue) as PageData
}