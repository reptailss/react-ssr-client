import {useMemo} from 'react'
import {useUserAgentContext} from '@userAgent/context/useUserAgentContext'

export function useServerDeviceType(): {
    isDesktop: boolean
    isMobile: boolean
    isTablet: boolean
} {
    const context = useUserAgentContext()
    
    return useMemo(() => {
        return {
            isDesktop: context.deviceType === 'desktop',
            isMobile: context.deviceType === 'mobile',
            isTablet: context.deviceType === 'tablet',
        }
    }, [context.deviceType])
}