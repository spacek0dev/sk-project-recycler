import { useRef } from "react";
import { useCountUp } from "react-countup";

const easingFn = function (t, b, c, d) {
    return c * (Math.pow(t / d - 1, 5) + 1) + b;
};

const Counter = ({ startNum = 1, endNum = 1000, delay = 1, duration = 4 }) => {
    const countUpRef = useRef(null);

    const { start, pauseResume, reset, update } = useCountUp({
        ref: countUpRef,
        start: startNum,
        end: endNum,
        separator: " ",
        smartEasingThreshold: 2000,
        smartEasingAmount: 30,
        easingFn,
        delay: delay,
        duration: duration
    });

    return (
        <div><span style={{ color: '#fff', marginRight: 10, fontSize:'1.5rem' }} ref={countUpRef}>0 </span></div>
    );
};

export default Counter;
