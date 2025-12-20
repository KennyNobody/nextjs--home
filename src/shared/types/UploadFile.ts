interface UploadFile {
    uid: string;
    name: string;
    status?: 'uploading' | 'done' | 'error';
    response?: never;
    percent?: number;
    originFileObj?: File;
}

export {
    type UploadFile,
}
