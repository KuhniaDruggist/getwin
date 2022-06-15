import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Filters} from './components/Filters/Filters';
import {Files} from './components/Files/Files';
import {Preloader} from './common/components/Preloader/Preloader';
import {getAllFiles} from './common/utils/getAllFiles';
import {getCookie} from './common/utils/cookie';

export type FileType = {
    name: string
    size: number
    atime: number
    mtime: number
}
export type FolderType = {
    [key: string]: FileType[]
}
type ResponseObjectType = {
    data: { files: FolderType }
}

export const App = () => {
    const cookie = getCookie('filter');
    const [loading, setLoading] = useState(false);
    const [filter, setFilter] = useState(() => cookie ? cookie : 'name');
    const [files, setFiles] = useState<FileType[]>([]);

    useEffect(() => {
        setLoading(true);
        axios
            .get<ResponseObjectType>('https://prof.world/api/test_json_files/?token=6a06cc0050374e32be51125978904bd8')
            .then(res => {
                const files = getAllFiles(res.data.data.files);
                setFiles(files);
                setLoading(false);
            })
            .catch(error => console.log(error));
    }, [setLoading, setFiles]);

    return (
        <div>
            <Filters
                filter={filter}
                setFilter={setFilter}
            />
            {
                loading
                    ? <Preloader/>
                    : <Files
                        filter={filter}
                        files={files}
                    />
            }
        </div>
    );
};
