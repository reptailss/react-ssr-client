export declare function usePageDataErrors(): {
    error: boolean;
    errorCode: string | null;
    errors: Array<string | {
        key: string;
        message: string;
    }>;
};
