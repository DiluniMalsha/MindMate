import axios from "axios";
import {BASE_URL} from "./constants";

const accessToken: string | null = localStorage.getItem("loggedUserToken");
const Repository = axios.create({
    baseURL: BASE_URL, //"http://localhost:8080/api"
    headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + accessToken
    }
})

export default Repository;