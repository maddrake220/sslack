import { useState, useCallback, Dispatch, SetStateAction } from 'react';

type ReturnType<T = any> = [T, (e: any) => void, Dispatch<SetStateAction<T>>];

const useInput = <T = any>(initialvalue: T): ReturnType<T> => {
  const [value, setValue] = useState(initialvalue);
  const handler = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  return [value, handler, setValue];
};

export default useInput;
