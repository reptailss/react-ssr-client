export declare function useGlobalDataErrors(): {
    error: boolean;
    errorCode: string | null;
    errors: Array<string | {
        key: string;
        message: string;
    }>;
};
