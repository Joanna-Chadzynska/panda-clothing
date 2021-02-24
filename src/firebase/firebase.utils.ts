import 'firebase/analytics';
import firebase from 'firebase/app';
// Add the Firebase products that you want to use
import 'firebase/auth';
import 'firebase/firestore';

export const firebaseConfig = {
	apiKey: process.env.REACT_APP_FB_API_KEY,
	authDomain: process.env.REACT_APP_FB_AUTH_DOMAIN,
	projectId: process.env.REACT_APP_FB_PROJECT_ID,
	storageBucket: process.env.REACT_APP_FB_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_FB_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_FB_APP_ID,
	measurementId: process.env.REACT_APP_FB_MEASUREMENT_ID,
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Initialize analytics
firebase.analytics();

const auth = firebase.auth();
const firestore = firebase.firestore();

// Google auth
var provider = new firebase.auth.GoogleAuthProvider();
// provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
provider.setCustomParameters({ prompt: 'select_account' });
firebase.auth().useDeviceLanguage();
const signInWithGoogle = () => auth.signInWithPopup(provider);
// .then((result) => {
// 	let token = result.credential;
// 	let user = result.user;
// });

export { auth, firestore, firebase, signInWithGoogle };
