import { AppRouterMath } from '@appRouter/types';
export declare class RouterMatcher {
    static math(routes: Record<string, unknown>, path: string, locales: string[]): AppRouterMath;
    private static normalizeRouteKey;
    private static matchPath;
}
