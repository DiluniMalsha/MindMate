import axios from "axios";
// import {BASE_URL} from "./constants";

const accessToken: string | null = localStorage.getItem("loggedUserToken");
const Repository = axios.create({
    baseURL: "http://localhost:8080",
    headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + accessToken
    }
})

export default Repository;