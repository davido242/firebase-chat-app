import React from 'react';
import './App.css';

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyAVF6JEvlnsLbD3zlMftRjig8zVpudGpiw",
  authDomain: "md-chat-app-b81aa.firebaseapp.com",
  projectId: "md-chat-app-b81aa",
  storageBucket: "md-chat-app-b81aa.appspot.com",
  messagingSenderId: "443937191063",
  appId: "1:443937191063:web:d116b0ec9ea7627c5ca5d2",
  measurementId: "G-W7TTDKXLTE"
})

const auth = firebase.auth();

const [ user ] = useAuthState(auth);



function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
       <section>
          {user ? <ChatRoom /> : < SignIn />}
       </section>
    </div>
  );
}

export default App;
