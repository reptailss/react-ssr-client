import React from 'react'
import {LocalesContext} from '@locales/context/types'
import {LocalesContextValue} from '@locales/context/localesContext'

export function useLocalesContext(): LocalesContext {
    return React.useContext(LocalesContextValue) as LocalesContext
}