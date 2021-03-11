import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface CartState {
	hidden: boolean;
}

const initialState: CartState = {
	hidden: true,
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		setCurrentUser: (state, action: PayloadAction<boolean>) => {},
		toggleCartHidden: (state) => {
			state.hidden = !state.hidden;
		},
	},
});

export const { toggleCartHidden } = cartSlice.actions;

// export const incrementAsync = (amount: number): AppThunk => (dispatch) => {
// 	setTimeout(() => {
// 		dispatch(incrementByAmount(amount));
// 	}, 1000);
// };

export const selectCartHidden = (state: RootState) => state.cart.hidden;

export default cartSlice.reducer;
