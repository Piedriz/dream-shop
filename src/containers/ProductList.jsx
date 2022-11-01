import React from 'react';
import { useGetProducts } from '../hooks/useGetProducts';
import { ProductItem } from '@components/ProductItem';
import '@styles/ProductList.scss';
import { CardSkeleton } from '@components/CardSkeleton';


const API = 'https://api.escuelajs.co/api/v1/products';

export const ProductList = () => {

	const { products, loading } = useGetProducts(API);

	return (
		<section className="main-container">
			<div className="ProductList">

				{loading && <CardSkeleton ncards={20}/>}
				{products.map(product => (
					<ProductItem product={product} key={product.id} />
				)
				)}

			</div>
		</section>
	);
}


