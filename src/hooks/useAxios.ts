
import { useState, useEffect, } from 'react';
import axios from 'axios';

type Methods = "head" | "options" | "put" | "post" | "patch" | "delete" | "get";

interface IProps {
url:string
method:Methods
body?:any
headers?:any
}


export const useAxios = ({ url, method, body = null, headers = null }:IProps) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState('');
    const [loading, setloading] = useState(true);

    const fetchData = () => {
        axios[method](url, JSON.parse(headers), JSON.parse(body))
            .then((res: { data: any; }) => {
                setResponse(res.data);
            })
            .catch((err: any) => {
                setError(err);
            })
            .finally(() => {
                setloading(false);
            });
    };

    useEffect(() => {
        fetchData();
    }, [method, url, body, headers]);

    return { response, error, loading };
};
