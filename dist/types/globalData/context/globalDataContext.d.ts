import React from 'react';
import { GlobalData } from '@globalData/types';
export declare const GlobalDataContextValue: React.Context<GlobalData>;
export declare const GlobalDataContextSetter: React.Context<{
    setGlobalData: (data: GlobalData) => void;
}>;
