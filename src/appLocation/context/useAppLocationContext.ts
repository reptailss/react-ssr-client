import React from 'react'
import {AppLocationContextValue} from '@appLocation/context/appLocationContext'

export function useAppLocationContext() {
    return React.useContext(AppLocationContextValue)
}