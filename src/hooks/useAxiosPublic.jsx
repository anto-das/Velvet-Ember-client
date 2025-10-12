import axios from "axios";

const axiosPublic = axios.create({
    baseURL:'https://velvet-ember-server.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;