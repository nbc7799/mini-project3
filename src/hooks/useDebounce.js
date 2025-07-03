import { useEffect, useState } from "react";

export default function useDebounce(text, delay) {
  const [debounced, setDebounced] = useState(text);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounced(text);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [text, delay]);
  return debounced;
}
