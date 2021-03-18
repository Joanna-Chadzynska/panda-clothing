import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
	convertCollectionsSnapshotToMap,
	firestore,
} from 'firebase/firebase.utils';
import { AppDispatch, AppThunk, RootState } from '../../app/store';
import { Collection } from './../../components/CollectionPreview/types';

interface ShopState {
	collections: {
		[key: string]: Collection;
	};
	loading: boolean;
	errorMessage: string | undefined;
}

const initialState: ShopState = {
	collections: {},
	loading: false,
	errorMessage: '',
};

export const shopSlice = createSlice({
	name: 'shop',
	initialState,
	reducers: {
		updateCollectionsSuccess: (
			state,
			action: PayloadAction<{ [key: string]: Collection }>
		) => {
			state.loading = false;
			state.collections = action.payload;
		},
		updateCollectionsStart: (state) => {
			state.loading = true;
		},
		updateCollectionsFailure: (state, action) => {
			state.loading = false;
			state.errorMessage = action.payload;
		},
	},
});

export const {
	updateCollectionsSuccess,
	updateCollectionsFailure,
	updateCollectionsStart,
} = shopSlice.actions;

// selectors
export const selectCollections = (state: RootState) => state.shop.collections;

export const selectCollection = (collectionUrlParam: any) => (
	state: RootState
) =>
	state.shop.collections ? state.shop.collections[collectionUrlParam] : null;

export const selectCollectionsFetching = (state: RootState) =>
	state.shop.loading;

export const selectCollectionForPreview = (state: RootState) =>
	state.shop.collections
		? Object.keys(state.shop.collections).map(
				(key) => state.shop.collections[key]
		  )
		: [];

// async actions
export const updateCollections = (): AppThunk => async (
	dispatch: AppDispatch
) => {
	const collectionRef = firestore.collection('collections');
	dispatch(updateCollectionsStart());

	collectionRef
		.get()
		.then((snapshot) => {
			const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
			dispatch(updateCollectionsSuccess(collectionsMap));
		})
		.catch((error) => dispatch(updateCollectionsFailure(error.message)));
};

export default shopSlice.reducer;
