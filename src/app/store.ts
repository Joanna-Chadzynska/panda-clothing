import {
	Action,
	configureStore,
	getDefaultMiddleware,
	ThunkAction,
} from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import {
	FLUSH,
	PAUSE,
	PERSIST,
	persistReducer,
	persistStore,
	PURGE,
	REGISTER,
	REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from 'redux/reducer';

const persistConfig = {
	key: 'root',
	version: 1,
	storage,
	whitelist: ['cart'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const reduxSagaMonitorOptions = {};

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const middleware = [
	...getDefaultMiddleware({
		serializableCheck: {
			ignoredActionPaths: ['payload.user.createdAt'],
			ignoredPaths: ['user.currentUser.user.createdAt'],
			ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
		},
		// thunk: false,
	}),
	...middlewares,
];

export const store = configureStore({
	reducer: persistedReducer,
	middleware: middleware,
});

export let persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
