import { useEffect, useState } from "react";

function getPreviousValue(key, initialValue) {
  try {
    const savedValue = JSON.parse(localStorage.getItem(key));
    if (typeof savedValue !== typeof initialValue) return initialValue;
    if (savedValue) return savedValue;
  } catch (error) {
    console.error(error.message);
  }
  if (initialValue instanceof Function) return initialValue();
  return initialValue;
}

export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => getPreviousValue(key, initialValue));

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
}
