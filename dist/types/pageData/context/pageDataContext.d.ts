import React from 'react';
import { PageData } from '@pageData/types';
export declare const PageDataContextValue: React.Context<PageData>;
export declare const PageDataContextSetter: React.Context<{
    setPageData: (data: PageData) => void;
    setIsLoading: (isLoading: boolean) => void;
}>;
export declare const PageDataContextIsLoading: React.Context<boolean>;
