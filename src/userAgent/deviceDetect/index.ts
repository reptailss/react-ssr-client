export function getDeviceType(userAgent: string): 'mobile' | 'tablet' | 'desktop' {
    
    const isMobile = /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/i.test(userAgent)
    
    if (isMobile) {
        return 'mobile'
    }
    
    const isTablet = /(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(userAgent)
    
    if (isTablet) {
        return 'tablet'
    }
    return 'desktop'
}