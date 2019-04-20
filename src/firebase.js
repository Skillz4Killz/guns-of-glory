const config = {
	apiKey: "AIzaSyCZ2ttqEtlXQX1BLX4hHEnWTksm_CrZx5I",
	authDomain: "guns-of-glory-485ce.firebaseapp.com",
	databaseURL: "https://guns-of-glory-485ce.firebaseio.com",
	projectId: "guns-of-glory-485ce",
	storageBucket: "guns-of-glory-485ce.appspot.com",
	messagingSenderId: "471636103016"
};

let firebaseCache

export const getUiConfig = firebase => ({
	signInFlow: 'popup',
	signInOptions: [
		firebase.auth.GoogleAuthProvider.PROVIDER_ID,
		firebase.auth.EmailAuthProvider.PROVIDER_ID,
	],
})

const getFirebase = firebase => {
	if (firebaseCache) {
		return firebaseCache
	}

	firebase.initializeApp(config)
	firebaseCache = firebase
	return firebase
}

export default getFirebase
