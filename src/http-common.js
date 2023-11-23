// this file is used to create a axios instance to be used for all http requests

import axios from "axios";



// create axios instance with baseURL and headers, so that we don't have to repeat this code in every component
export default axios.create({
    baseURL: "http://localhost:8080/api",
    headers: {
        "Content-type": "application/json"
    },
    withCredentials: true
});