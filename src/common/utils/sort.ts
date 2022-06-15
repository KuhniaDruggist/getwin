import {FileType} from '../../App';

export const sortFiles = (filter: string = '', files: FileType[]): FileType[] => {
    if (filter === 'name') {
        files.sort((a, b) => {
            if (a.name.toUpperCase() > b.name.toUpperCase()) return 1;
            if (a.name.toUpperCase() < b.name.toUpperCase()) return -1;
            return 0;
        });
    }

    if (filter === 'size') {
        files = files.map(file => file).sort((a, b) => {
            return a.size - b.size;
        });
    }

    if (filter === 'mtime') {
        files = files.map(file => file).sort((a, b) => {
            return a.mtime - b.mtime;
        });
    }
    return files;
}


