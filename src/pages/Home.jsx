import React from 'react';
import {ProductList} from '@containers/ProductList';
import { Layout } from '@containers/Layout';

export const Home = () => {
	return (
		<Layout>
			<ProductList />
		</Layout>
	);
}

