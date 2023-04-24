import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GridView from './GridView';
import { products_url as url } from '../utils/constants'
const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchProducts = async () => {
            setIsLoading(true);

            try {
                const response = await axios.get(url);
                setProducts(response.data);
            } catch (error) {
                console.error(error);
            }

            setIsLoading(false);
        };

        fetchProducts();
    }, []);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (!products.length) {
        return <p>Sorry, no products matched your search.</p>;
    }

    return <GridView products={products} />;
};

export default ProductList;
