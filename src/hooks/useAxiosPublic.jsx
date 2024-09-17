import axios from 'axios';

const axipsPublic = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
})

const useAxiosPublic = () => {
    return axipsPublic;
};

export default useAxiosPublic;