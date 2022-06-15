import React, {useEffect, useState} from 'react';
import styles from './Files.module.css'
import {FileType} from '../../App';
import {ICONS} from '../../common/constants/icons';
import {sortFiles} from '../../common/utils/sort';


type FilesPropsType = {
    filter: string
    files: FileType[]
}

export const Files = React.memo(({filter, files}: FilesPropsType) => {
    let [filteredFiles, setFilteredFiles] = useState<FileType[]>([]);

    useEffect(() => {
        setFilteredFiles(sortFiles(filter, files));
    }, [filter, files]);

    return (
        <ul className={styles.list}>
            {
                filteredFiles.map((file, index) => {
                    const dotIndex = file.name.indexOf('.');
                    const fileFormat = file.name.slice(dotIndex + 1).toUpperCase();
                    const fileName = file.name.slice(0, dotIndex);

                    return (
                        <li
                            className={styles.item}
                            key={`${file.size}_${file.name}`}
                            tabIndex={++index}
                        >
                            <img
                                src={ICONS[fileFormat]}
                                alt="icon file"
                                width="52px"
                                height="52px"
                            />
                            <p className={styles.name}>{fileName}</p>
                        </li>
                    );
                })
            }
        </ul>
    );
});
