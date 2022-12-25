import firebase from "firebase/compat/app";
import "firebase/compat/database";


const config = {
  apiKey: "AIzaSyA0_aOxgThszUwPZOCuXtEm35Rt8qENvnM",
  authDomain: "awesome-chat-f4723.firebaseapp.com",
  projectId: "awesome-chat-f4723",
  storageBucket: "awesome-chat-f4723.appspot.com",
  messagingSenderId: "486683733703",
  appId: "1:486683733703:web:528d1eddafc511466ad8e2"
}

const db = firebase.initializeApp(config)
export default db