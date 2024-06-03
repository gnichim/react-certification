import { useState, useEffect } from "react";
const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
      window.dispatchEvent(new Event("storageChange"));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === key || event.type === "storageChange") {
        const newValue = window.localStorage.getItem(key);
        setStoredValue(newValue ? JSON.parse(newValue) : null);
      }
    };

    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("storageChange", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("storageChange", handleStorageChange);
    };
  }, [key]);

  return [storedValue, setValue];
};

export default useLocalStorage;
