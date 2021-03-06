import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { CartItem } from 'components/CollectionItem/types';
import { addItemToCart, removeItemFromCart } from './cart.utils';

interface CartState {
	hidden: boolean;
	cartItems: CartItem[];
}

const initialState: CartState = {
	hidden: true,
	cartItems: [],
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		toggleCartHidden: (state) => {
			state.hidden = !state.hidden;
		},
		addItem: (state, action: PayloadAction<CartItem>) => {
			state.cartItems = addItemToCart(state.cartItems, action.payload);
		},
		clearItem: (state, action: PayloadAction<CartItem>) => {
			state.cartItems = state.cartItems.filter(
				(item) => item.id !== action.payload.id
			);
		},
		removeItem: (state, action: PayloadAction<CartItem>) => {
			state.cartItems = removeItemFromCart(state.cartItems, action.payload);
		},
	},
});

export const {
	toggleCartHidden,
	addItem,
	clearItem,
	removeItem,
} = cartSlice.actions;

// export const incrementAsync = (amount: number): AppThunk => (dispatch) => {
// 	setTimeout(() => {
// 		dispatch(incrementByAmount(amount));
// 	}, 1000);
// };

export const selectCartHidden = (state: RootState) => state.cart.hidden;
export const selectCartItems = (state: RootState) => state.cart.cartItems;
export const selectItemsCount = (state: RootState) =>
	state.cart.cartItems.reduce((acc, curr) => acc + curr.quantity, 0);
export const selectCartTotal = (state: RootState) =>
	state.cart.cartItems.reduce(
		(acc, curr) => acc + curr.price * curr.quantity,
		0
	);

export default cartSlice.reducer;
