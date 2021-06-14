import firebase from "firebase/app";
import 'firebase/auth'
import 'firebase/database'
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyB5lyG36oIdZk5ljHmWFKEttfMcNcBstvk",
    authDomain: "react-trip-planner-98d25.firebaseapp.com",
    databaseURL: "https://react-trip-planner-98d25-default-rtdb.firebaseio.com",
    projectId: "react-trip-planner-98d25",
    storageBucket: "react-trip-planner-98d25.appspot.com",
    messagingSenderId: "1084613887856",
    appId: "1:1084613887856:web:69620acd1e523235edb1b5"
  };
  // Initialize Firebase
export const firebaseApp =  firebase.initializeApp(firebaseConfig);

export const database = firebase.database() ;

// export default firebaseApp ;
