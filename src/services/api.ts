import Axios from "axios"

const hostname = "localhost"

const api = Axios.create({
    baseURL: `http://${hostname}:3004`,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
})

export default api