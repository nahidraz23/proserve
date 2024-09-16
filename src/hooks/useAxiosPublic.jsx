import axios from 'axios';

const axipsPublic = axios.create({
    baseURL: 'http://localhost:3000'
})

const useAxiosPublic = () => {
    return axipsPublic;
};

export default useAxiosPublic;