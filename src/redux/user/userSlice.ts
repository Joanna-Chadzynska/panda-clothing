import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { firebase } from 'firebase/firebase.utils';
import { RootState } from '../../app/store';

interface AppUser {
	id: string;
	user: firebase.firestore.DocumentData | undefined;
}

interface UserState {
	currentUser: AppUser | null;
}

const initialState: UserState = {
	currentUser: null,
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setCurrentUser: (state, action: PayloadAction<AppUser | null>) => {
			state.currentUser = action.payload;
		},
	},
});

export const { setCurrentUser } = userSlice.actions;

// export const incrementAsync = (amount: number): AppThunk => (dispatch) => {
// 	setTimeout(() => {
// 		dispatch(incrementByAmount(amount));
// 	}, 1000);
// };

export const selectCurrentUser = (state: RootState) => state.user.currentUser;

export default userSlice.reducer;
