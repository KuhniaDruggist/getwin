import React from 'react';
import styles from './Preloader.module.css';
import preloader from './img/loading.svg';

export const Preloader = () => {
    return (
        <div className={styles.container}>
            <img
                className={styles.preloader}
                src={preloader} alt="preloader"
            />
        </div>
    );
};
