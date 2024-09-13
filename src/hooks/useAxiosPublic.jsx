import axios from 'axios';
import React from 'react';

const axipsPublic = axios.create({
    baseURL: 'http://localhost:3000'
})

const useAxiosPublic = () => {
    return axipsPublic;
};

export default useAxiosPublic;