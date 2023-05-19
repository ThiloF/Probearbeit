import {Task} from "./Task"

export interface User{
    id: number
    name: string
    password: string
    tasks: Task[]
}