import { useState, useEffect } from "react";

const KEY = "responses";

const getInitialValue = (key, initialValue) => {
  const savedValue = JSON.parse(localStorage.getItem(key));
  if (savedValue) return savedValue;

  return initialValue;
};

export default function useLocalStorage(initialValue) {
  const [value, setValue] = useState(() => getInitialValue(KEY, initialValue));

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
}
