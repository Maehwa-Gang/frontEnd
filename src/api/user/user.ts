import { instance } from "../common"

interface userDataType {
    id: string,
    password: string
}

function loginUser (userData: userDataType) {
    return instance.post('login', userData)
}

export { loginUser }