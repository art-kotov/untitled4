import axios from "axios";

export const baseUrl = process.env.REACT_APP_API;
console.log(baseUrl)

export const ax = axios.create({
    baseURL: baseUrl,
    headers: {
        "Content-Type": "application/json"
    }
});
