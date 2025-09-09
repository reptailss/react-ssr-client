import { AppRouteManifest, AppRouteModules } from '@appRoutes/types';
import { AppRouter } from '@appRouter/types';
import { PageData } from '@pageData/types';
import { GlobalData } from '@globalData/types';
import { AppLocation } from '../appLocation/types';
declare global {
    var __osSsrRouteManifest: AppRouteManifest;
    var __osSsrRouteModules: AppRouteModules;
    var __osSsrRouter: AppRouter;
    var __osSsrPageData: PageData;
    var __osSsrGlobalData: GlobalData;
    var __osSsrLocales: string[];
    var __osSsrLocale: string | null;
    var __osSsrUserAgent: string;
    var __osSsrLocation: AppLocation;
}
export declare const AppClient: () => import("react/jsx-runtime").JSX.Element;
