import React, { useEffect, useState } from 'react'


export const useFetchHook = (url, options={}) => {

    const [data, setData] = useState(null);
    const [pending, setPending]= useState(false);
    const [error, setError] = useState(null)

    async function fetchedData(){
        setPending(true);

        try{
            const response = await fetch(url, {...options});
            if(!response.ok){
                throw new Error(response.statusText);
            }
            const result = await response.json();
            setPending(false);
            setData(result);
            setError(null);
        }
        catch(err){
            setError(`${err}: some error occured`);
            setPending(false);

        }
        finally{
            console.log(data);
        }
    }


    useEffect(()=>{
        fetchedData();
    }, [url])

    return {data,pending,error};
}
