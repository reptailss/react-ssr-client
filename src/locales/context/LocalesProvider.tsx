import React, {ReactNode, useState} from 'react'
import {LocalesContextValue} from './localesContext'


export const LocalesProvider = ({
                             locales,
                             initialLocale,
                             children,
                         }: {
    locales: string[]
    initialLocale: string | null
    children: ReactNode
}) => {
    
    const [locale, setLocale] = useState<string | null>(initialLocale)
    
    return (
        <LocalesContextValue.Provider
            value={{
                locales,
                locale,
                setLocale,
            }}
        >
            {children}
        </LocalesContextValue.Provider>
    )
}
