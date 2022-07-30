import React from 'react';
import styles from './style.module.scss';

function SkFadeIn(props) {
    const [isVisible, setVisible] = React.useState(false);
    const domRef = React.useRef();
    React.useEffect(() => {
        let isHere = true;
        if (isHere) {
            var observer = new IntersectionObserver(entries => {
                entries.forEach(entry => setVisible(entry.isIntersecting));
            });
            observer.observe(domRef.current);
        }
        return () => {
            isHere = false;
            observer.disconnect()
        };
    }, []);
    return (
        <div
            style={{ height: props.height ?? '100%' }}
            className={`${styles.fade_in_section} ${isVisible ? `${styles.is_visible}` : `${styles.fade_in_section}`}`}
            ref={domRef}
        >
            {props.children}
        </div>
    );
}
export default SkFadeIn;
