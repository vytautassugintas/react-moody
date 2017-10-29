const firebaseConfig = {
  apiKey: process.env.REACT_APP_SECRET_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_SECRET_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_SECRET_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_SECRET_FIREBASE_PROJECT_ID,
  storageBucket: "",
  messagingSenderId: process.env.REACT_APP_SECRET_FIREBASE_MESSAGING_SENDER_ID
};

export default firebaseConfig;