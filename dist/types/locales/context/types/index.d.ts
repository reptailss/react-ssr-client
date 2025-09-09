export type LocalesContext = {
    locales: string[];
    locale: string | null;
    setLocale: (locale: string | null) => void;
};
