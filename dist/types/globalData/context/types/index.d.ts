export type GlobalDataContext = {
    data: unknown | null;
    setData: (data: unknown | null) => void;
    error: boolean;
    setError: (error: boolean) => void;
    errors: Array<string | {
        key: string;
        message: string;
    }>;
    setErrors: (errors: Array<string | {
        key: string;
        message: string;
    }>) => void;
    errorCode: string | null;
    setErrorCode: (errorCode: string | null) => void;
};
