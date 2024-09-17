import axios from 'axios';

const axipsPublic = axios.create({
    baseURL: 'https://proserve-three.vercel.app'
})

const useAxiosPublic = () => {
    return axipsPublic;
};

export default useAxiosPublic;