import { useState } from "react"
import api from "../services/api"
import { User } from '../types/User';

const useUser = () => {
    const [responseData, setData] = useState<User>({id:0, name:"", password:"", tasks:[]})
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    
    const queryUser = async (name: string, password:string) => {
        setLoading(true)
        setError(false)

        try{
            const {data} = await api.get<Array<User>>(
            `/users?name=${name}`
            )
            if(!(data && data.length && data[0].password !== "password")) throw new Error("Username not found")
            setData(data[0])
        }catch(error){
            setError(true)
        }finally{
            setLoading(false)
        }

    }

    const putUser = async (newData: User) =>{
        setLoading(true)
        setError(false)
        try {
            const { data } = await api.put(`/users/${newData.id}`, newData)
            if (data.length !== 0) throw new Error("UserID already exists")

            try {
                const { data } = await api.put<User>("/users", {
                    "id": newData.id,
                    "name": newData.name,
                    "password": newData.password,
                    "task": newData.tasks,
                })
                setData(data)
                if (responseData === undefined) throw new Error("Response is empty")
            } catch (error) {
                setError(true)
            }
        } catch (error) {
            setError(true)
        } finally {
            setLoading(false)
        }
    }


    const putTask = async (newData: User) =>{
        setLoading(true)
        setError(false)
        try {
            const { data } = await api.put(`/users/${newData.id}`, newData)
            if (data.length !== 0) throw new Error("UserID already exists")

            try {
                const { data } = await api.put<User>("/users", {
                    "id": newData.id,
                    "name": newData.name,
                    "password": newData.password,
                    "task": newData.tasks,
                })
                setData(data)
                if (responseData === undefined) throw new Error("Response is empty")
            } catch (error) {
                setError(true)
            }
        } catch (error) {
            setError(true)
        } finally {
            setLoading(false)
        }
    }

    return {
        responseData,
        loading,
        error,
        queryUser,
        putUser,
        putTask,
    }
}

export default useUser