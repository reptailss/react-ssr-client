import React from "react";
import {AppRoutesContext} from '@appRoutes/context/types'

export const AppRoutesContextValue = React.createContext<AppRoutesContext | undefined>(
    undefined
);