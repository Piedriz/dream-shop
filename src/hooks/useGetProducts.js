import React from "react";
import axios from "axios";

export const useGetProducts = (API) => {
    const [products, setProducts] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    const getData = async () => {
        const response = await axios(API);
        setProducts(response.data);
        setLoading(false);
    }

    React.useEffect(() => {
        setTimeout(() => {
            getData()
        }, 1000)

    }, [])
    return {products, loading};
};