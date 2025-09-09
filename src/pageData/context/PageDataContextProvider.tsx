import React, {ReactNode, useMemo, useState} from 'react'
import {PageData} from '@pageData/types'
import {PageDataContextIsLoading, PageDataContextSetter, PageDataContextValue} from '@pageData/context/pageDataContext'

export const PageDataContextProvider = ({
                                            initial,
                                            children,
                                        }: {
    initial: PageData
    children: ReactNode
}) => {
    
    const [pageData, setPageData] = useState<PageData>(initial)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    
    const setterContext = useMemo(() => {
        return {
            setPageData,
            setIsLoading,
        }
    }, [])
    
    return (
        <PageDataContextSetter.Provider
            value={setterContext}
        >
            <PageDataContextIsLoading.Provider
                value={isLoading}
            >
                <PageDataContextValue.Provider
                    value={pageData}
                >
                    {children}
                </PageDataContextValue.Provider>
            </PageDataContextIsLoading.Provider>
        </PageDataContextSetter.Provider>
    )
}
