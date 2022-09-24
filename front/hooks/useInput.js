import React, { useState, useCallback } from "react";

export default (initialValue = null) => {
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
  return [data, handler];
};
