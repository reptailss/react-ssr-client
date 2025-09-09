import React, {ReactNode, useState} from 'react'
import {AppLocation} from '@appLocation/types'
import {AppLocationContextSetter, AppLocationContextValue} from '@appLocation/context/appLocationContext'

export const AppLocationProvider = ({
                                        initial,
                                        children,
                                    }: {
    initial: AppLocation
    children: ReactNode
}) => {
    const [location, setLocation] = useState<AppLocation>(initial)
    
    return (
        <AppLocationContextSetter.Provider
            value={setLocation}
        >
            <AppLocationContextValue.Provider
                value={location}
            >
                {children}
            </AppLocationContextValue.Provider>
        </AppLocationContextSetter.Provider>
    )
}
