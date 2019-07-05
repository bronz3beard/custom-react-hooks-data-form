import { useState, useEffect } from "react";

const useWindowWidth = () => {
    const [width, setWidth] = useState(window.innerWidth);
     const handleResize = () => setWidth(window.innerWidth);
     window.addEventListener("resize", handleResize);
    useEffect(() => {
        setWidth(window.innerWidth);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return width;
}

export default useWindowWidth;