import axios from "axios"

const BASE_URL = "http://localhost:5000/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYjU2NjAyODcwZmQ4ZWY4YWIxMzA1MyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MzAyNzg0NSwiZXhwIjoxNjczMjg3MDQ1fQ.SLAjJiPnRUJ4Jx76isIyaHRKsy23TJxoKVi9Z06VypY"

export const publicRequest = axios.create({
    baseURL : BASE_URL,
});
export const userRequest = axios.create({
    baseURL : BASE_URL,
    header  : {token: `Bearer ${TOKEN}`}
});