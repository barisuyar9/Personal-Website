import { useState } from "react";
export default function useLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(() => {
    const localVal = JSON.parse(localStorage.getItem(key));
    if (localVal === null) {
      localStorage.setItem(key, JSON.stringify(defaultValue));
      return defaultValue;
    } else {
      return localVal;
    }
  });
  const setLocalStorage = (newValue) => {
    const cartValue = newValue(value);
    localStorage.setItem(key, JSON.stringify(cartValue));
    setValue(cartValue);
  };
  return [value, setLocalStorage];
}