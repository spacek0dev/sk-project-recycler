import React from 'react';
import styles from './style.module.scss';
import Lottie from "lottie-react";
import loaderJson from "./loader.json";
 
export function SkLoader(props) {
    const [isVisible, setVisible] = React.useState(false);
    return (
        <div className={`${styles.loaderContainer}`}>
            <Lottie width={300} height={300} animationData={loaderJson} />
        </div>
    );
}; 