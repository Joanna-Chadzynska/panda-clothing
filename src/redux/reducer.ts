import { combineReducers } from '@reduxjs/toolkit';
import cartSlice from './cart/cartSlice';
import counterSlice from './counter/counterSlice';
import directorySlice from './directory/directorySlice';
import shopSlice from './shop/shopSlice';
import userSlice from './user/userSlice';

export const rootReducer = combineReducers({
	counter: counterSlice,
	user: userSlice,
	cart: cartSlice,
	directory: directorySlice,
	shop: shopSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
