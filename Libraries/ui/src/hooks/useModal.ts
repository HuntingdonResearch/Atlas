import { useCallback, useState } from 'react';

export default function useModal(execute: () => Promise<void> = async () => {}) {
  const [active, setActive] = useState<boolean>(false);

  const [error, setError] = useState<any>(null);

  const handleShow = useCallback(() => setActive(true), [setActive]);

  const handleHide = useCallback(() => setActive(false), [setActive]);

  const handleSubmit = useCallback(async () => {
    try {
      await execute();

      setActive(false);
    } catch (error) {
      setError(error);
    }
  }, [execute, setActive, setError]);

  const handleCancel = useCallback(() => setActive(false), [setActive]);

  return {
    active,
    error,
    setError,
    handleShow,
    handleHide,
    handleSubmit,
    handleCancel
  };
}
