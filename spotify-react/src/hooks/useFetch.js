import { useState } from "react";

export default function useFetch()
{
    const [data, setData] = useState([]);
    const [isLodaing, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
        
        async function fetchData(url, options)
        {
            setIsLoading(true);

            try
            {
                const res = await fetch(url, options)
                if(!res.ok)
                {
                    console.error('There was a error fetch the data here is the response status:' + res.status);
                }
                const json = await res.json();
                setData(json)
                console.log(data);
                setIsLoading(false);
                setError(null);
            }
            catch(err)
            {
                setIsLoading(false);
                setError(err.message);
                console.error(err.message);
            }
        } 


    return {fetchData, data, isLodaing, error};
}