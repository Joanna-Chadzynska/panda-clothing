import { CartItem } from 'components/CollectionItem/types';

export interface Collection {
	id: number;
	title: string;
	routeName: string;
	items: CartItem[];
}
