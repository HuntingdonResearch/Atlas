import { KeyboardEvent, useCallback, useEffect } from 'react';

export default function useKeyEvent(key: string, execute: (e: KeyboardEvent) => any | Promise<any>): void {
  const handleKeyDown: (e: any) => void = useCallback((e: any) => {
    if (e.key === key && execute) {
      execute(e);
    }
  }, [key, execute]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [key, execute, handleKeyDown]);
}
