import {useCallback} from 'react'
import {PageData} from '@pageData/types'
import {useSetPageDataContext} from '@pageData/context/useSetPageDataContext'
import {useSetGlobalDataContext} from '@globalData/context/useSetGlobalDataContext'
import {GlobalData} from '@globalData/types'


type AppData = {
    pageData: PageData
    globalData: GlobalData
    userAgent: string
}

export function useLoadPageData() {
    const setPageDataContext = useSetPageDataContext()
    const setGlobalDataContext = useSetGlobalDataContext()
    return useCallback(async (to: string, options?: {
        refreshGlobalData?: boolean
    }) => {
        setPageDataContext.setIsLoading(true)
        try {
            const response = await fetch(to, {
                method: 'GET',
                headers: {
                    xonlyjson: 'true',
                    xinitialpreload: !options?.refreshGlobalData ? 'false' : 'true',
                },
            })
            const result: AppData = await response.json()
            
            if (result.pageData?.error || !response.ok) {
                setPageDataContext.setPageData({
                    data: null,
                    error: true,
                    errors: result.pageData.errors || [],
                    errorCode: result.pageData.errorCode || 'server_side_error',
                })
            } else {
                setPageDataContext.setPageData(result.pageData)
            }
            
            if(options?.refreshGlobalData) {
                if(result.globalData?.error || !response.ok){
                    setGlobalDataContext.setGlobalData({
                        data: null,
                        error: true,
                        errors: result.pageData.errors || [],
                        errorCode: result.pageData.errorCode || 'server_side_error',
                    })
                }else{
                    setGlobalDataContext.setGlobalData(result.globalData)
                }
            }
            
            setPageDataContext.setIsLoading(false)
        } catch (error) {
            setPageDataContext.setPageData({
                data: null,
                error: true,
                errors: [],
                errorCode: 'server_side_error',
            })
            if (options?.refreshGlobalData) {
                setGlobalDataContext.setGlobalData({
                    data: null,
                    error: true,
                    errors: [],
                    errorCode: 'server_side_error',
                })
            }
            setPageDataContext.setIsLoading(false)
        }
    }, [])
}