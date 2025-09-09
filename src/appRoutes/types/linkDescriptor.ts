export type LinkDescriptor = {
    href: string
    rel: string
}

export type LinksDescriptorBuilder<PageData = unknown, GlobalData = unknown> = (
    pageData: PageData | null,
    globalData: GlobalData | null,
    options: {
        locale: string | null
    },
) => LinkDescriptor[]