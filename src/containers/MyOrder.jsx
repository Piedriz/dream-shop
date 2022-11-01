import React from 'react';
import { OrderItem } from '@components/OrderItem';
import '@styles/MyOrder.scss';
import arrow from '@icons/flechita.svg';
import { AppContext } from '../context/AppContext';

export const MyOrder = () => {
	const { state } = React.useContext(AppContext)
	
	return (
		<aside className="MyOrder">
			<div className="title-container">
				<img src={arrow} alt="arrow" />
				<p className="title">My orders</p>
			</div>
			<div className="my-order-content">

				{state.cart.map(item => {
					return (<OrderItem
						key={item.id}
						img={item.category.image}
						title={item.title}
						price={item.price}
						id={item.id} />)
				})}
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>${state.cart.reduce((prev,current)=>prev+current.price,0)}</p>
				</div>
				<button className="primary-button">
					Checkout
				</button>
			</div>
		</aside>
	);
}

