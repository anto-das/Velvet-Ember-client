import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

 const axiosSecure = axios.create({
    baseURL:'http://localhost:4000'
})
const useAxiosSecure = () => {
    const {logout} =useAuth();
    const navigate = useNavigate();
    axiosSecure.interceptors.request.use((config)=>{
        const token = localStorage.getItem('access-token')
        if(token){
            config.headers.authorization = `Bearer ${token}`
        }
        return config

    },(error) =>{
        if(error){
            return Promise.reject(error)
        }
    })

    axiosSecure.interceptors.response.use((response)=>{
        return response;
    }, async (error) =>{
        if(error.response.status === 401 || error.response.status === 403){
           await logout()
           navigate('/sign-in')
        }
        return Promise.reject(error)
    } )
    return axiosSecure
};

export default useAxiosSecure;