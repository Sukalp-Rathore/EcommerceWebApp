import axios from "axios";


const token = "d28563ca3da625b24bc0eaa8d9f36fd174ccbe8172391345358cc732e82aac27f2dcbadb580a602641ba32c8726838936b6d9b9c21eaf9da039ecedac1550facb8684c734003a2693fa9f9dd02b8b420e265302b6a901e505483338b795127954fb57df9f58539af96241d8defe3bb7955a91f23b89863a1732d288fbb1b439e";
export const makeRequest = axios.create({
    
    baseURL: "http://localhost:1337/api",
    headers:{
        Authorization:"bearer "+token 
    }
})