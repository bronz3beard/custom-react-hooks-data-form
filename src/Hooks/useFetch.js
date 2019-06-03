import React, { useState, useEffect } from "react";

const useFetch = (url) => {
    //[stateVariable, updateStateFunction] = aka, set.State
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {//Get Request
        (async () => {
            try {
                const response = await fetch(url);
                if (response.ok) {
                    const data = await response.json();
                    const [item] = data.results;
                    setData(item);
                } else {
                    setError(new Error(response.statusText));
                }
            } catch (eventError) {
                setError(eventError);
            }
            setLoading(false);
        })();
    }, [url]);

    return [error, data, loading];
};

export default useFetch;