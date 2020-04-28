import firebase from 'firebase/app';
import 'firebase/auth';   
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/messaging';

const firebaseConfig = {
  apiKey: "AIzaSyBq1qb5YLW-nNp4IHnu-UjDYuOBDja1--I",
  authDomain: "gdg-guatemala-web-app.firebaseapp.com",
  databaseURL: "https://gdg-guatemala-web-app.firebaseio.com",
  projectId: "gdg-guatemala-web-app",
  storageBucket: "gdg-guatemala-web-app.appspot.com",
  messagingSenderId: "472750774952",
  appId: "1:472750774952:web:22460d558267f3a9fc809d",
  measurementId: "G-S7SLGWCM4H"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().enablePersistence({synchronizeTabs:!0}).catch(()=>{console.warn("DB offline support not available")})
export default{
  notificationSupported:firebase.messaging.isSupported(),
  messaging: (firebase.messaging.isSupported())?firebase.messaging():null,
  firestore: firebase.firestore(),
  auth:firebase.auth(),
  storage:firebase.storage(),
};
