import { ReactNode } from 'react';
import { AppRouteManifest, AppRouteModules } from '@appRoutes/types';
export declare const AppRoutesProvider: ({ initial, children, }: {
    initial: {
        routesManifest: AppRouteManifest;
        routeModules: AppRouteModules;
    };
    children: ReactNode;
}) => import("react/jsx-runtime").JSX.Element;
