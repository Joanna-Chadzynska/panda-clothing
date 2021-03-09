// import { User } from '@firebase/auth-types';
import { firebase } from 'firebase/firebase.utils';
import React, { createContext, useContext, useState } from 'react';

interface AppUser {
	id: string;
	user: firebase.firestore.DocumentData | undefined;
}
interface UserContextProps {
	currentUser: AppUser | null;
	setCurrentUser?: React.Dispatch<React.SetStateAction<AppUser | null>>;
}

const UserContext = createContext<UserContextProps>({ currentUser: null });

const UserProvider: React.SFC = ({ children }) => {
	const [currentUser, setCurrentUser] = useState<AppUser | null>(null);
	return (
		<UserContext.Provider value={{ currentUser, setCurrentUser }}>
			{children}
		</UserContext.Provider>
	);
};

export const useUserContext = () => {
	const { currentUser, setCurrentUser } = useContext(UserContext);
	return { currentUser, setCurrentUser };
};

export default UserProvider;
