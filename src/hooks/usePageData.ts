import React from 'react'
import {PageDataContextValue} from '@pageData/context/pageDataContext'

export function usePageData<Data>(): Data | null {
    return React.useContext(PageDataContextValue).data as Data | null
}