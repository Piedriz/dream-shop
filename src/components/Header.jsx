import React from 'react';
import '@styles/Header.scss';
import {MyOrder} from '@containers/MyOrder.jsx'
import icon from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import shopingCart from '@icons/icon_shopping_cart.svg';
import {Menu} from '@components/Menu.jsx'
import { AppContext } from '../context/AppContext';

export const Header = () => {
	const {state} = React.useContext(AppContext);
	const [toggleOrders, setToggleOrders] = React.useState(false);
	const [toggle,setToggle] = React.useState(false);

	const handleToggle = () =>{
		setToggle(!toggle);
	}

	const handleToggleOrders = ()=>{
		setToggleOrders(!toggleOrders);
	}
	return (
		<nav>
			<img src={icon} alt="menu" className="menu" />
			<div className="navbar-left">
				<img src={logo} alt="logo" className="logo-yard"/>
				<ul>
					<li>
						<a href="/">All</a>
					</li>
					<li>
						<a href="/">Clothes</a>
					</li>
					<li>
						<a href="/">Electronics</a>
					</li>
					<li>
						<a href="/">Furnitures</a>
					</li>
					<li>
						<a href="/">Toys</a>
					</li>
					<li>
						<a href="/">Others</a>
					</li>
				</ul>
			</div>
			<div className="navbar-right">
				<ul>
					<li onClick={handleToggle} className="navbar-email">
						platzi@example.com
					</li>
					<li className="navbar-shopping-cart" onClick={handleToggleOrders}>
						<img src={shopingCart} alt="shopping cart" />
						{state.cart.length>0 ? <div>{state.cart.length}</div> : null}
					</li>
				</ul>
			</div>
			{toggle && <Menu/>}
			{toggleOrders && <MyOrder/>}
		</nav>
	);
}


