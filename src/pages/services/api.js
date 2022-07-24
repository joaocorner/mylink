
import axios from "axios";

export const key = "a75215cb27b7d6babb0d4b81e63c417c9f84dbcd"

const api = axios.create({//create an axios instance
    baseURL: "https://api-ssl.bitly.com/v4",
    headers: {
        'Authorization': `Bearer ${key}`
    }
})

export default api;

// Access token: a75215cb27b7d6babb0d4b81e63c417c9f84dbcd