export enum Category {
    ALL = "all",
    TYPE2 = "device",
    TYPE3 = "app",
    TYPE4 = "shipping",
}

export const faq: { title: string; description: string; category: Category }[] =
    [
        {
            title: "TYPE 2",
            description: "lorem ipsum",
            category: Category.TYPE2,
        },
        {
            title: "TYPE 2",
            description: "lorem ipsum",
            category: Category.TYPE2,
        },
        {
            title: "TYPE 3",
            description: "lorem ipsum",
            category: Category.TYPE3,
        },
        {
            title: "TYPE 4",
            description: "lorem ipsum",
            category: Category.TYPE4,
        },
        {
            title: "TYPE 4",
            description: "lorem ipsum",
            category: Category.TYPE4,
        },
        {
            title: "TYPE 2",
            description: "lorem ipsum",
            category: Category.TYPE2,
        },
    ];
