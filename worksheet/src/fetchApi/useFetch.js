import { useState, useEffect } from "react";


export const useFetch = (url) => {       
    
    const [data, setData] = useState([])

    const fetchData = async () => {              
        const res = await fetch(url)
        const data = await res.json()
        console.log(data.wordList)        
    }  

    useEffect(() => {
        fetchData()
    }, [url])  

    const refetch = async () => {
        const res = await fetch(url)
        const data = await res.json()
        setData(data.wordList);            
        
    } 

    return { data };
    
}  

