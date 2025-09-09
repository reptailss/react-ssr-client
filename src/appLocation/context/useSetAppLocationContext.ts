import React from 'react'
import {AppLocationContextSetter} from '@appLocation/context/appLocationContext'

export function useSetAppLocationContext() {
    return React.useContext(AppLocationContextSetter)
}