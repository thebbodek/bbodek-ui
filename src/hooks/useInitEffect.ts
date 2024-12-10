import { useEffect, useRef } from 'react';

const useInitEffect: typeof useEffect = (effect) => {
  const isInit = useRef(true);

  useEffect(() => {
    if (isInit.current) {
      isInit.current = false;

      effect();
    }
  }, []);
};

export default useInitEffect;
