import { combineReducers } from '@reduxjs/toolkit';
import cartSlice from './cart/cartSlice';
import counterSlice from './counter/counterSlice';
import userSlice from './user/userSlice';

export const rootReducer = combineReducers({
	counter: counterSlice,
	user: userSlice,
	cart: cartSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
