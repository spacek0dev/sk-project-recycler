import React, {useEffect, useRef} from 'react';

const useMount = (cb, condition = true) => {
  const isCalledRef = React.useRef(false);
  React.useEffect(() => {
    if (condition && !isCalledRef.current) {
      isCalledRef.current = true;
      cb();
    }
  }, [cb, condition]);
};
export default useMount;
