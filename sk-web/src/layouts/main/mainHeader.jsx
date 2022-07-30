import React from 'react';
import style from './mainHeader.module.scss';
import { IoIosMenu } from 'react-icons/io';
const MainHeader = (props) => {
    return (
        <>
            <div className={style.layoutHeaderContainer}>
                <div className={style.layoutHeaderTitle}>
                    <div className={style.layoutHeaderBtn} onClick={props.onChange}>
                        <IoIosMenu size={40} />
                    </div>
                    <span>{props.title ?? ''}</span>
                </div>
            </div>
        </>
    )
}
export default MainHeader;