import React from 'react';
import './App.css';

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { Firestore } from 'firebase/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyAVF6JEvlnsLbD3zlMftRjig8zVpudGpiw",
  authDomain: "md-chat-app-b81aa.firebaseapp.com",
  projectId: "md-chat-app-b81aa",
  storageBucket: "md-chat-app-b81aa.appspot.com",
  messagingSenderId: "443937191063",
  appId: "1:443937191063:web:d116b0ec9ea7627c5ca5d2",
  measurementId: "G-W7TTDKXLTE"
})


function App() {

  const auth = firebase.auth();
  const [ user ] = useAuthState(auth);
  
  return (
    <div className="App">
      <header className="App-header">
      </header>
       <section>
          {user ? <ChatRoom /> : < SignIn />}
       </section>
    </div>
  );


  function SignIn() {
    const signInWithGoogle = () =>{
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider);
    }
    return (
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    )
  }

  function SignOut() {
    return auth.currentUser && (
      <button onClick={() => auth.signOut()}>Sign Out</button>
    )
  }

  function ChatRoom() {
    const messagesRef = Firestore.collection('messages');
    const query = messagesRef.orderBy('CreatedAt').limit(25);
    const [messages] = useCollectionData(querry, {idField: 'id'});
  }

  return (
    <>
      <div>
        {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg}/>)}
      </div>
    </>
  )
}

function ChatMessage(props) {
  const {text, uid } = props.message;
  return <p>{text}</p>
}
export default App;
