export type PageData = {
    data: any;
    error: false;
    errors: [];
    errorCode: null;
} | {
    data: null;
    error: true;
    errors: Array<string | {
        key: string;
        message: string;
    }>;
    errorCode: string;
};
