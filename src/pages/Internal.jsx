import menuIcon from '../assets/images/menu-icon.svg'
import logo from '../assets/images/gpt-logo.svg'
import exportIcon from '../assets/images/export-icon.svg'
import sendIcon from '../assets/images/send-icon.svg'
import SentMessage from '../components/SentMessage.jsx';
import ReceivedMessage from '../components/ReceivedMessage.jsx';

import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { getFirestore, collection, getDocs, query, where, setDoc, doc } from "firebase/firestore"; 
import { useState, useEffect, useRef } from 'react';



const firebaseConfig = {
        apiKey: "AIzaSyDKoCxfNPZv3Np29NSGc3wMH0HPwYcYGq4",
        authDomain: "chatbot-daf51.firebaseapp.com",
        projectId: "chatbot-daf51",
        storageBucket: "chatbot-daf51.firebasestorage.app",
        messagingSenderId: "176616104466",
        appId: "1:176616104466:web:14ebc5a47a8ce8195deecb",
        measurementId: "G-55L58ZEH94"
    };
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const auth = getAuth(app);
    const user = await auth.currentUser;
    
   /* const getUserByEmail = async (email) => {
          // Reference to the 'users' collection
          const usersRef = collection(db, 'users');
      
          // Create a query to find a user with the specified email
          const q = query(usersRef, where('uid', '==', email));
      
          // Execute the query
          const querySnapshot = await getDocs(q);
      
          // Check if any document matches the query
          if (querySnapshot.empty) {
            console.log('No user found with the given email.');
           // console.log(usersRef);
            
            return null;
          }
      
          // Process and return the user data
          return querySnapshot;
      }; */
/*async function getData() {
    
    const chatsRef = await collection(db, `users/1RonqG0kpWMYkPwl6bMA/chats/AQSIch9PKa67xWFBkS8y/messages`);
    const querySnapshot = await getDocs(chatsRef);

    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} =>`, doc.data().prompt);
      });
} */
/*async function gettttt() {
    console.log(await getUserByEmail('v7x1XY5FTvgRDKBObhOlKLiEzUB2'));
}*/



let chatRef = null;


function Internal() {

    const [messages, setMessges] = useState([]);

    async function sendMessage() {
        const input = document.getElementById('input').value;
        if (input != "") {
            const ans = await getData(input);
            if (ans != 0) {
                setMessges([
                    ...messages,
                    [input, ans]
                ]);
                saveMessage(input, ans);
            }
            else {
                alert("Something went wrong! :( Try again.");
            };
            
        }
    }

    async function saveMessage(prompt, answer) {
        if (chatRef == null) {
            const chatID = user.uid + (((new Date()).getTime()));
            chatRef = doc(db, "users", user.uid, "chats", chatID);
            await setDoc(chatRef, {
                timestamp: new Date(),
            }).then(() => {
                const messagesRef = doc(collection(chatRef, "messages"));
                setDoc(messagesRef,{
                prompt: prompt,
                answer: answer,
                timestamp: new Date() }).then(() => {}).catch(() => {
                    alert("Something went wrong!");
                });
            })
            .catch(() => {
                alert("Something went wrong!");
            });
        }
        else {
            const messagesRef = doc(collection(chatRef, "messages"));
            setDoc(messagesRef,{
            prompt: prompt,
            answer: answer,
            timestamp: new Date() }).then(() => {}).catch(() => {
                alert("Something went wrong!");
            });
        }
    }

    async function getData(city) {
       var final = true;
       const weather = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=PPNU9JCK2J63WJATWK8989VW4`)
        .then(r => {
            
            if (!r.ok) {
                console.log(r.status);
                final = false;
                return null;   
            }
            return r.json() });
        return final ? weather.days[0].humidity : 0;
    }



    const bottomRef = useRef(null);
    
    useEffect(() => {
        // Scroll to the bottom of the container
         bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]); 



    return  (
        <div className="w-[100vw] max-w-[550px] h-[100vh] min-h-[750px] max-h-[770px] flex flex-col items-center">
            <header className="flex items-center gap-4 p-4 w-full py-9 border-b-[1px] border-border-color">
                <img src={menuIcon} alt="" className='w-[40px] h-[40px]' />
                <div className='flex gap-4 items-center'>
                    <img src={logo} alt="" className='w-[40px] h-[40px]' />
                    <span className='font-[600] font-Poppins text-[20px] leading-[24px] text-main-text-color'>GPT 4o</span>
                </div>
                <img src={exportIcon} alt="" className='w-[40px] h-[40px] ml-auto' />
            </header>

          {/*  <div>{user.displayName}</div> */}

            <div id='messageContainer' className='w-full overflow-y-scroll relative top-[-1px]'>
                {messages.map((message, index) => (
                    <div key={index}><SentMessage text={message[0]}  /> <ReceivedMessage text={message[1]}  /></div>
                    ))}
               <div ref={bottomRef} />
            </div>

            <footer className='flex gap-[4%] w-full mt-auto items-center justify-center py-6 px-3'>
                <input type="text" id='input' placeholder='Ask me anything...' className='placeholder-gray-text text-[16px] leading-[24px] border-[1px] border-border-color rounded-[30px] px-6 py-4 w-[80%]' />
                <button onClick={sendMessage} id='send' className='w-[56px] h-[56px] rounded-[50%] p-0'><img src={sendIcon} alt="" className='w-full' /></button>
            </footer>
        </div>
    )
}

export default Internal