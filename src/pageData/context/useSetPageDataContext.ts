import React from 'react'
import {PageDataContextSetter} from '@pageData/context/pageDataContext'

export function useSetPageDataContext() {
    return React.useContext(PageDataContextSetter)
}