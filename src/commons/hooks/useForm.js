import { useState } from "react"

export const useForm = (initialValue)=>{

    const [data, setData] = useState(initialValue)

    const handleFormData = (event)=>{
        const {name, value} = event.target
        setData({...data, [name]:value})
    }

    const handleFormFiles = (event)=>{
        const {name, files} = event.target
        setData({...data, [name]:files[0]})
    }

    const clear = ()=>{
        setData(initialValue)
    }


    return {data, handleFormData, handleFormFiles, setData, clear}
}