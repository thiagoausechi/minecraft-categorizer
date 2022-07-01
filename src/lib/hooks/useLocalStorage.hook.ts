import { useEffect, useState } from "react";

const getStoragedValue = (key: string) => JSON.parse(localStorage.getItem(key) || "null");

const useLocalStorage = <T>(key: string, defaultValue: T) => 
{
    const [value, setValue] = useState<T>(getStoragedValue(key) || defaultValue);

    useEffect(() =>
    {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value]);

    const storeValue = (newValue: T) =>
    {
        setValue(newValue);
        localStorage.setItem(key, JSON.stringify(newValue));
    };

    return [value, storeValue] as const;
}

export default useLocalStorage;