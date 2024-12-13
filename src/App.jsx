import { useState } from 'react'
import './App.css'

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'


/*// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKoCxfNPZv3Np29NSGc3wMH0HPwYcYGq4",
  authDomain: "chatbot-daf51.firebaseapp.com",
  projectId: "chatbot-daf51",
  storageBucket: "chatbot-daf51.firebasestorage.app",
  messagingSenderId: "176616104466",
  appId: "1:176616104466:web:14ebc5a47a8ce8195deecb",
  measurementId: "G-55L58ZEH94"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Function to fetch messages
const getMessages = async () => {
  const messagesRef = collection(db, 'messages'); // Reference to 'messages' collection
  try {
    const querySnapshot = await getDocs(messagesRef);
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} =>`, doc.data());
    });
  } catch (error) {
    console.error("Error fetching messages:", error);
  }
};

getMessages();*/


function App() {

  return (
    <>
      
    </>
  )
}

export default App
