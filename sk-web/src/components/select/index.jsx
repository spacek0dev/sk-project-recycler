import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';

const SkSelect = ({value,title,onChangeText,options}) => {
    const [onFocus, setOnFocus] = useState(false);
    const [selectValue, setSelectValue] = useState('');
    useEffect(() => {
        setSelectValue(value);
    }, [value]);
    return (
        <div
            className={
                !onFocus
                    ? `${styles.skInputContainer}`
                    : `${styles.skInputFocused}`
            }
        >
            <div style={{ fontWeight: onFocus ? '700' : '300' }} className={`${styles.skInputTitle}`}>
                {title ?? "Input"}
            </div>
            <select name="" id="" value={selectValue} onChange={(e) => { onChangeText(e.target.value) }}>
                <option value={''} disabled>{'Selecciona una option'}</option>
                {
                    options.map((value, index) => {
                        return (
                            <option key={index} value={value._id}>{value.name ?? '---'}</option>
                        )
                    })
                }
            </select>
        </div>
    )
}
export default SkSelect;