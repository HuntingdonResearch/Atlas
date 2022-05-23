import { useCallback, useEffect, useRef, useState } from 'react';

export function useTimer(duration: number, pausesOnHover: boolean, handleComplete: () => void) {
  const [timeout] = useState<number>(duration);
  const timerRef = useRef<number>(0);

  const pause = useCallback(() => {
    if (typeof document === 'undefined') return;

    if (pausesOnHover) {
    }
  }, [pausesOnHover]);

  const resume = useCallback(() => {
    if (typeof document === 'undefined') return;

    if (pausesOnHover) {
      timerRef.current = window.setTimeout(() => {
        handleComplete();

        timerRef.current = 0;
      }, timeout);
    }
  }, [pausesOnHover, timeout, handleComplete]);

  useEffect(() => {
    resume();

    return () => {};
  }, [resume]);

  return {
    pause,
    resume
  };
}
