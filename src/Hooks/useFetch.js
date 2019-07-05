import { useState, useEffect } from "react";

const useFetch = (url) => {
    //[stateVariable, updateStateFunction] = aka, set.State
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);

    useEffect(() => {//Get Request
        (async () => {
            try {
                const response = await fetch(url);
                if (response.ok) {
                    const data = await response.json();
                    //const [item] = data.results;
                    setData(data);
                } else {
                    setError(new Error(response.statusText));
                }
            } catch (error) {
                setError(error);
            }
            setLoading(false);
        })();
    }, [url]);

    return [error, data, loading];
};

export default useFetch;