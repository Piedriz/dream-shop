import React from 'react';
import '@styles/ProductItem.scss';
import { AppContext } from '../context/AppContext';
import addToCartLogo from '@icons/bt_add_to_cart.svg';


export const ProductItem = ({product}) => {
	
	const {addToCart} = React.useContext(AppContext);

	const handleClick = (item) =>{
		addToCart(item)
	}
	return (
		<div className="ProductItem">
			<img src={product.category.image}alt="" />
			<div className="product-info">
				<div>
					<p>{product.price+'$'}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={ ()=>{
					handleClick(product)
				}}>
					<img src={addToCartLogo} alt="" />
				</figure>
			</div>
		</div>
	);
}
