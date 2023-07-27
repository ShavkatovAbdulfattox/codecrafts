import React, { useEffect, useState } from "react";

function useDebounce(value, delay = 500) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const id = setTimeout(() => {
      console.log("setting new timeout");
      setDebouncedValue(value);
    }, delay);

    return () => {
      console.log("clearing timeout");

      clearTimeout(id);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;
