const getAbsoluteUrl = (url: string) => `${process.env.NEXT_PUBLIC_URL}${url}`;

export {
    getAbsoluteUrl,
}
