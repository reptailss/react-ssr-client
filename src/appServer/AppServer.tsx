import React from 'react'
import {AppContext} from '@appProvider/types'
import {AppProvider} from '@appProvider/AppProvider'


export const AppServer = ({
                              appContext,
                          }: {
    appContext: AppContext
}) => {
    return (
        <AppProvider
            appContext={appContext}
        >
            <>
                {React.createElement(appContext.routes.routeModules.root.default)}
            </>
        </AppProvider>
    )
}