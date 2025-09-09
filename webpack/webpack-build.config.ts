import path from 'path';
import webpack from 'webpack';

export default (): webpack.Configuration => {
    return {
        mode: 'production',
        entry: {
            index: './src/index.tsx',
        },
        output: {
            path: path.resolve(__dirname, '../', 'dist'),
            filename: '[name].js',
            library: {
                name: 'os-react-ssr-client',
                type: 'umd',
            },
            globalObject: 'this',
            clean: true,
        },
        externals: {
            react: 'react',
            'react-dom': 'react-dom',
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js'],
            alias: {
                '@appClient': path.resolve(__dirname, '../src/appClient'),
                '@appProvider': path.resolve(__dirname, '../src/appProvider'),
                '@appRouter': path.resolve(__dirname, '../src/appRouter'),
                '@appRoutes': path.resolve(__dirname, '../src/appRoutes'),
                '@appLocation': path.resolve(__dirname, '../src/appLocation'),
                '@appServer': path.resolve(__dirname, '../src/appServer'),
                '@components': path.resolve(__dirname, '../src/components'),
                '@hooks': path.resolve(__dirname, '../src/hooks'),
                '@pageData': path.resolve(__dirname, '../src/pageData'),
                '@globalData': path.resolve(__dirname, '../src/globalData'),
                '@locales': path.resolve(__dirname, '../src/locales'),
                '@userAgent': path.resolve(__dirname, '../src/userAgent'),
            },
        },
        module: {
            rules: [
                {
                    test: /\.(ts|tsx)$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/,
                },
            ],
        },
    };
};
