import { useState, useCallback } from "react";

const useInput = (initialValue = null) => {
  const [data, setData] = useState(initialValue);
  const handler = useCallback(
    (e) => {
      const { value, name } = e.target;
      setData({
        ...data,
        [name]: value,
      });
    },
    [data]
  );
  const reset = useCallback(() => {
    setData(initialValue);
  }, [initialValue]);
  return [data, handler, reset];
};

export default useInput;
