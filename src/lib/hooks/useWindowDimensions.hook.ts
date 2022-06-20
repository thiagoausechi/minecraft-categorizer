import { useEffect, useState } from "react";

const getWindowDimensions = () => ({
    width: window.innerWidth,
    height: window.innerHeight
})

const useWindowDimensions = () => 
{
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => 
    {
        const handleResize = () => setWindowDimensions(getWindowDimensions());
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return {
        ...windowDimensions,
        vw: (s = 1) => s * (windowDimensions.width / 100),
        vh: (s = 1) => s * (windowDimensions.height / 100)
    };
}

export default useWindowDimensions;