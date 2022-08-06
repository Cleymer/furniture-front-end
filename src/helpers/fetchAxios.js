import axios from 'axios'

const baseUrl = import.meta.env.VITE_REACT_APP_API_URL;


export const fetchWithoutToken = (endpoint, data, method = 'GET') => {

    const url = `${baseUrl}/${endpoint}`;

    if(method==='GET') {
        const response = axios.get(url);
        return response;
    } else {    
        return []
    }

}