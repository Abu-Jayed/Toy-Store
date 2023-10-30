import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title = `${title} - Toy Hero`
    },[title])
}

export default useTitle;