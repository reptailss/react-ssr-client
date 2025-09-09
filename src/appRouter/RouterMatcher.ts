import { AppRouterMath } from '@appRouter/types';

export class RouterMatcher {
    static math(
        routes: Record<string, unknown>,
        path: string,
        locales: string[],
    ): AppRouterMath {
        const pathParts = path.split('/');
        const potentialLocale = pathParts[1];
        const normalizedPath = potentialLocale && locales.includes(potentialLocale) ? '/' + pathParts.slice(2).join('/') : path
        for (const routeModuleKey in routes) {
            const pattern = this.normalizeRouteKey(routeModuleKey);
            const { match, params } = this.matchPath(pattern, normalizedPath);
            if (match) {
                return {
                    routeModuleKey,
                    params,
                };
            }
        }
        
        if('routes/404' in routes){
            return {
                routeModuleKey: 'routes/404',
                params: {},
            };
        }
        
        return {
            routeModuleKey: null,
            params: {},
        };
    }
    
    private static normalizeRouteKey(routeKey: string): string {
        const path = routeKey.replace(/^routes\/?/, '').replace(/\./g, '/')
        const parts = path
            .split('/')
            .map(segment => {
                if (segment === 'index') return '';
                if (segment.startsWith('$')) return ':' + segment.slice(1);
                return segment;
            })
            .filter(Boolean);
        
        return '/' + parts.join('/');
    }
    
    private static matchPath(pattern: string, actual: string): {
        match: boolean;
        params: Record<string, string>;
    } {
        const cleanActual = actual.split('?')[0];
        const patternParts = pattern.split('/').filter(Boolean);
        const actualParts = cleanActual.split('/').filter(Boolean);
        
        if (patternParts.length !== actualParts.length) {
            return { match: false, params: {} };
        }
        
        const params: Record<string, string> = {};
        
        for (let i = 0; i < patternParts.length; i++) {
            const p = patternParts[i];
            const a = actualParts[i];
            
            if (p.startsWith(':')) {
                const key = p.slice(1);
                params[key] = a;
            } else if (p !== a) {
                return { match: false, params: {} };
            }
        }
        
        return { match: true, params };
    }
}
