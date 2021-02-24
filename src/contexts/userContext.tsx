import { firebase } from 'firebase/firebase.utils';
import React, { createContext, useContext, useState } from 'react';

interface UserContextProps {
	currentUser: firebase.User | null;
	setCurrentUser?: React.Dispatch<React.SetStateAction<firebase.User | null>>;
}

const UserContext = createContext<UserContextProps>({ currentUser: null });

const UserProvider: React.SFC = ({ children }) => {
	const [currentUser, setCurrentUser] = useState<firebase.User | null>(null);
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
