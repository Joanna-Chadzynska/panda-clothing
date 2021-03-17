import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { Collection } from './../../components/CollectionPreview/types';

interface ShopState {
	collections: {
		[key: string]: Collection;
	};
}

const initialState: ShopState = {
	collections: {},
};

export const shopSlice = createSlice({
	name: 'shop',
	initialState,
	reducers: {
		updateCollections: (
			state,
			action: PayloadAction<{ [key: string]: Collection }>
		) => {
			state.collections = action.payload;
		},
	},
});

export const { updateCollections } = shopSlice.actions;

export const selectCollections = (state: RootState) => state.shop.collections;

export const selectCollection = (collectionUrlParam: any) => (
	state: RootState
) =>
	state.shop.collections ? state.shop.collections[collectionUrlParam] : null;

export const selectCollectionForPreview = (state: RootState) =>
	state.shop.collections
		? Object.keys(state.shop.collections).map(
				(key) => state.shop.collections[key]
		  )
		: [];

export default shopSlice.reducer;
