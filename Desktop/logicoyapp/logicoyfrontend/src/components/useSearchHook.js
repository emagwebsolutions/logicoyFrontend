import {useState} from 'react'

export default function useSearchHook(Data){
    const [searchTerm,setsearchterm] = useState("")

    //Search users
    function searchdatalist(e){
    setsearchterm(e.target.value)
    }

    function searchData(searchTerm, Data){
    const datalists = {...Data}
    if(searchTerm.length > 0){ 
    return Object.values(datalists).filter(v => {
        return Object.values(v).join(" ").toLowerCase().includes(searchTerm.toLowerCase())
    })
    }
    else{
        return datalists
    }
    }

    const output = searchData(searchTerm,Data)

    return {output,searchdatalist}
}