import { RefObject, useEffect } from 'react';

export default function useClickAwayEvent(ref: RefObject<any>, execute: (e: MouseEvent) => any | Promise<any>) {
  useEffect(() => {
    function handleClickAway(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target)) {
        execute(e);
      }
    }

    document.addEventListener('mousedown', handleClickAway);

    return () => {
      document.removeEventListener('mousedown', handleClickAway);
    };
  }, [ref, execute]);
}
