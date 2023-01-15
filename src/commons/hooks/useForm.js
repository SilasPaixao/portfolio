import { useState } from "react"

export const useForm = (initialValue)=>{

    const [data, setData] = useState(initialValue)

    const handleFormData = (event)=>{
        const {name, value} = event.target
        setData({...data, [name]:value})
    }

    const clear = ()=>{
        setData(initialValue)
    }


    return {data, handleFormData, clear}
}