import {
	Action,
	configureStore,
	getDefaultMiddleware,
	ThunkAction,
} from '@reduxjs/toolkit';
import { rootReducer } from 'redux/reducer';

export const store = configureStore({
	reducer: rootReducer,
	middleware: getDefaultMiddleware({
		serializableCheck: {
			// Ignore these field paths in all actions
			ignoredActionPaths: ['payload.user.createdAt'],
			// Ignore these paths in the state
			ignoredPaths: ['user.currentUser.user.createdAt'],
		},
	}),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
