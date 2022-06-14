import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyDRjyQxgD2RRH5AHbYa72aleJC9OiokryU",
    authDomain: "todo-crud-a7e96.firebaseapp.com",
    projectId: "todo-crud-a7e96",
    storageBucket: "todo-crud-a7e96.appspot.com",
    messagingSenderId: "115025419107",
    appId: "1:115025419107:web:439be92c8deb5b7ce95156"
  };


  const app = initializeApp(firebaseConfig);
  const db = getFirestore();

  export {db};