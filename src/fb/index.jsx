import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
	apiKey: "AIzaSyB6YvSMimT1AjQ0qHYtBKk4f_tvcc9pIcw",
	authDomain: "portfolio-c683b.firebaseapp.com",
	projectId: "portfolio-c683b",
	storageBucket: "portfolio-c683b.appspot.com",
	messagingSenderId: "569958861730",
	appId: "1:569958861730:web:b68d01c20f0717d8b940fb",
	measurementId: "G-83D3TD0KPT"
};

export default firebase.initializeApp(firebaseConfig).firestore();
