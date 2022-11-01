import React from 'react';
import '@styles/OrderItem.scss';
import closeI from '@icons/icon_close.png'
import { AppContext } from '../context/AppContext';

export const OrderItem = ({img,title,price,id}) => {
	const {removeFromCart} = React.useContext(AppContext);

	const handleDeleteItem = (id) =>{
		removeFromCart(id);
	}
	return (
		<div className="OrderItem">
			<figure>
				<img src={img} alt="bike" />
			</figure>
			<p>{title}</p>
			<p>${price}</p>
			<img src={closeI} onClick={()=>handleDeleteItem(id)} alt="close" />
		</div>
	);
}


