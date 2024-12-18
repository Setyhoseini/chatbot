import menuIcon from '../assets/images/menu-icon.svg'
import logo from '../assets/images/gpt-logo.svg'
import exportIcon from '../assets/images/export-icon.svg'
import sendIcon from '../assets/images/send-icon.svg'
import SentMessage from '../components/SentMessage.jsx';
import ReceivedMessage from '../components/ReceivedMessage.jsx';

import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, getDocs, query, where, setDoc, doc, orderBy } from "firebase/firestore"; 
import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';


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

let chatRef = null;
let isNew = true;

function Internal() {
    const {uid, chatId} = useParams();
    const [messages, setMessges] = useState([]);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    if (isNew == true) {
        chatRef = (chatId!="" && chatId != undefined && chatId != null) ? (doc(db, `users/${uid}/chats/${chatId}`)) : null;
        isNew = false;
    }
    
    useEffect(() => {
        const auth = getAuth(app);
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
              if (currentUser) {
                setUser(currentUser);
                if (currentUser.uid !== uid) {
                  navigate("/");
                } else {
                    try {
                        const list = [];
                        const messagesRef = collection(db, `users/${uid}/chats/${chatId}/messages`);
                        const messagesQuery = query(messagesRef, orderBy('timestamp', 'asc'));
                        const messagesSnapshot = await getDocs(messagesQuery);
    
                        for (const messageDoc of messagesSnapshot.docs) {
                        const prompt = messageDoc.data().prompt;
                        const answer = messageDoc.data().answer;
                        const time = messageDoc.data().timestamp.seconds;
                        list.push([prompt, answer, time]);
                        }
                        setMessges(list);
                        setLoading(false);
                    } catch (error) {
                        alert("Couldn't load history :( Try again.")
                        setLoading(false);
                    }
                }
              } else {
                navigate("/");
              }
              setLoading(false);
            });
            return () => unsubscribe();
    }, []);

    const handleKeyDown = (event) => {
        if (event.key == "Enter") {
            sendMessage();
        }
    }

    async function sendMessage() {
        const input = document.getElementById('input').value;
        if (input != "") {
            const ans = await getData(input);
            if (ans != 0) {
                setMessges([
                    ...messages,
                    [input, ans, ((new Date()).getTime())/1000]
                ]);
                document.getElementById('input').value = "";
                saveMessage(input, ans);
            }
            else {
                alert("Something went wrong! :( Try again.");
            };
        }
    }

    async function saveMessage(prompt, answer) {
        if (chatRef == null) {
            isNew = false;
            const chatID = uid + (((new Date()).getTime()));
            console.log(chatID);
            
            chatRef = doc(db, "users", uid, "chats", chatID);
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
         bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]); 

    if (loading) {
        return (
            <div>Loading...</div>
        )
    }
    return  (
        <div className="w-[100vw] max-w-[550px] h-[100vh] min-h-[750px] max-h-[770px] flex flex-col items-center">
            <header className="sticky top-0 flex items-center gap-4 p-4 w-full py-9 border-b-[1px] border-border-color">
                <img src={menuIcon} alt="" className='w-[40px] h-[40px]' />
                <div className='flex gap-4 items-center'>
                    <img src={logo} alt="" className='w-[40px] h-[40px]' />
                    <span className='font-[600] font-Poppins text-[20px] leading-[24px] text-main-text-color'>GPT 4o</span>
                </div>
                <img src={exportIcon} alt="" className='w-[40px] h-[40px] ml-auto' />
            </header>

            <div id='messageContainer' className='w-full overflow-y-scroll relative top-[-1px]'>
                {messages.map((message, index) => (
                    <div key={index}><SentMessage text={message[0]}  /> <ReceivedMessage text={message[1]}  /></div>
                    ))}
               <div ref={bottomRef} />
            </div>

            <footer className='flex gap-[4%] w-full mt-auto items-center justify-center py-6 px-3'>
                <input onKeyDown={handleKeyDown} type="text" id='input' placeholder='Ask me anything...' className='placeholder-gray-text text-[16px] leading-[24px] border-[1px] border-border-color rounded-[30px] px-6 py-4 w-[80%]' />
                <button  onClick={sendMessage} id='send' className='w-[56px] h-[56px] rounded-[50%] p-0'><img src={sendIcon} alt="" className='w-full' /></button>
            </footer>
        </div>
    )
}

export default Internal