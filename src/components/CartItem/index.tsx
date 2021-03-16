import React from 'react';
import { CartItem as ICartItem } from './../CollectionItem/types';
import { CartItemContainer, ItemDetails, Name } from './styles/cartItem';

export interface CartItemProps {
	item: ICartItem;
}

const CartItem: React.SFC<CartItemProps> = ({
	item: { imageUrl, price, name, quantity },
}) => {
	return (
		<CartItemContainer>
			<img src={imageUrl} alt='item' />
			<ItemDetails>
				<Name>{name}</Name>
				<span className='price'>
					{quantity} x ${price}
				</span>
			</ItemDetails>
		</CartItemContainer>
	);
};

export default CartItem;
