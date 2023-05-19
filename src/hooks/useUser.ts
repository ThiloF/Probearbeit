import { useState } from "react"
import api from "../services/api"
import { User } from "../types/User"

const useUser = () => {
    const [responseData, setData] = useState<User>({id:0, name:"", password:"", tasks:[]})
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    
    const queryUser = async (name: string) => {
        setLoading(true)
        setError(false)

        try{
            const {data} = await api.get<Array<User>>(
            `/users?name=${name}`
            )
            if(!(data && data.length)) throw new Error("Username not found")
            setData(data[0])
        }catch(error){
            setError(true)
        }finally{
            setLoading(false)
        }

    }

    return {
        responseData,
        loading,
        error,
        queryUser,
    }
}

export default useUser