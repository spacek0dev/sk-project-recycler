import { useEffect } from 'react';
import styles from './index.module.scss';
import { IoIosClose } from 'react-icons/io'
const SkSideBar = ({ children,show, open, close, title }) => {
    useEffect(() => {

    }, [open])
    return <div className={open ? `${styles.spaceSideBarComponentShow}` : `${styles.spaceSideBarComponentClose}`}>
        <div className={styles.sideBarContent}>
            <div className={styles.sideBarHeader}>
                <span className={styles.sideBarTitle}>{title ?? ''}</span>
                <div onClick={close} className={styles.sideBarCloseIcon}><IoIosClose /></div>
            </div>
            {children}
        </div>
    </div>
}

export default SkSideBar;