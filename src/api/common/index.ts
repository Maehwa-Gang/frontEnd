import axios from "axios";

function createInstance() {
    return axios.create({
        baseURL: `${process.env.REACT_APP_BACKEND_BASE_URL}/api/`
    });
}

export const instance = createInstance();