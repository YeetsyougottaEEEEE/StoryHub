import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
    apiKey: "AIzaSyD7fDqY5CqWtOPnGo84QXBMdJsCL3-bGVU",
    authDomain: "newsteller-999b1.firebaseapp.com",
    databaseURL: "https://newsteller-999b1-default-rtdb.firebaseio.com",
    projectId: "newsteller-999b1",
    storageBucket: "newsteller-999b1.appspot.com",
    messagingSenderId: "279253785505",
    appId: "1:279253785505:web:2d95ba355a8c8852bbc9e0"
  };

  firebase.initializeApp(firebaseConfig);
  
  export deafault firebase.firestore();