import { useEffect, useState } from "react";

const getStoragedValue = (key: string) => JSON.parse(localStorage.getItem(key) || "null");

const useLocalStorage = <S>(key: string, defaultValue: S) => 
{
    const [value, setValue] = useState<S>(getStoragedValue(key) || defaultValue);

    useEffect(() =>
    {
        localStorage.setItem(key, JSON.stringify(value))
        console.log("useLocalStorage > useEffect", key, value);
    }, [key, value])


    return [value, setValue] as const;
}

export default useLocalStorage;