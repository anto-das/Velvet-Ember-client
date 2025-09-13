import axios from "axios";

 const axiosSecure = axios.create({
    baseURL:'http://localhost:4000'
})
const useAxiosSecure = () => {
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
    }, (error) =>{
        if(error.response.status === 401 || error.response.status === 403){
            console.log(error.response.status)
        }
        return Promise.reject(error)
    } )
    return axiosSecure
};

export default useAxiosSecure;