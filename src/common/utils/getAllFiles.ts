import { FileType, FolderType } from '../../App';

export const getAllFiles = (folder: FolderType): FileType[] => {
    let files: FileType[] = [];

    for (const key in folder) {
        folder[key].forEach((file: FileType) => {
            files.push(
                {
                    name: file.name,
                    size: file.size,
                    atime: file.atime,
                    mtime: file.mtime,
                }
            );
        });
    }
    return files;
};
