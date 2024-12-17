import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  getFirestore,
  collection,
  getDocs,
  query,
  orderBy,
  limit,
  getDoc,
  doc
} from 'firebase/firestore';
import { initializeApp } from "firebase/app";
import ChatCard from '../components/ChatCard.jsx';

import arrow from '../assets/images/arrow-icon.svg'
import avatar from '../assets/images/avatar.svg'
import logo from '../assets/images/gpt-logo.svg'
import plus from '../assets/images/plus.svg'
import search from '../assets/images/search-icon.svg'

const firebaseConfig = {
  apiKey: 'AIzaSyDKoCxfNPZv3Np29NSGc3wMH0HPwYcYGq4',
  authDomain: 'chatbot-daf51.firebaseapp.com',
  projectId: 'chatbot-daf51',
  storageBucket: 'chatbot-daf51.firebasestorage.app',
  messagingSenderId: '176616104466',
  appId: '1:176616104466:web:14ebc5a47a8ce8195deecb',
  measurementId: 'G-55L58ZEH94'
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default function Home() {
  const { uid } = useParams();
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const list = [];
        const chatsRef = collection(db, `users/${uid}/chats`);
        const chatDocs = await getDocs(chatsRef);

        for (const chatDoc of chatDocs.docs) {
          const messagesRef = collection(db, `users/${uid}/chats/${chatDoc.id}/messages`);
          const firstMessageQuery = query(messagesRef, orderBy('timestamp', 'asc'), limit(1));
          const firstMessageSnapshot = await getDocs(firstMessageQuery);

          if (!firstMessageSnapshot.empty) {
            const firstMessage = firstMessageSnapshot.docs[0];
            const firstMessageData = firstMessage.data();

            list.push({
              prompt: firstMessageData.prompt,
              answer: firstMessageData.answer,
              time: firstMessageData.timestamp.seconds
            });
          }
        }

        setHistory(list);
        setLoading(false);
      } catch (error) {
        alert("Couldn't load history :( Try again.")
        setLoading(false);
      }
    };

    fetchHistory();
  }, [uid]);

  if (loading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className='w-[100vw] max-w-[550px] h-[100vh] min-h-[750px] max-h-[770px] flex flex-col items-center overflow-y-scroll'>
      <header className='w-full sticky top-0 flex p-6 bg-white z-[99]'>
        <div className='flex items-center gap-5'>
          <img src={arrow} alt='Back' className='w-[24px] h-[24px]' />
          <span className='font-[600] text-[20px] leading-6 text-main-text-color'>Back</span>
        </div>
        <img src={avatar} alt='Avatar' className='w-10 h-10 ml-auto' />
      </header>

      <section className='w-full p-6 border-b-[1px] border-border-color'>
        <div className='sm:text-[40px] text-[35px] leading-[48px] text-main-text-color text-left font-[600] w-full'>
          <div className='font-BricolageGrotesque'>Start a new chat</div>
          <div className='flex items-center gap-3 font-BricolageGrotesque'>
            <span className='font-BricolageGrotesque'>With</span>
            <img src={logo} alt='Logo' className='w-10 h-10' />
          </div>
          <div className='flex items-center'>
            <div id='app-title' className='font-BricolageGrotesque'>Chat bot AI</div>
            <button
              type='button'
              className='bg-green rounded-[36px] text-white sm:text-[16px] leading-[20px] font-[600] text-[14px] sm:px-6 px-3 py-4 flex items-center gap-2 ml-auto'
            >
              <img src={plus} alt='New Topic' className='sm:w-6 sm:h-6 w-5 h-5' />
              <span>New Topic</span>
            </button>
          </div>
        </div>
      </section>

      <section className='w-full flex justify-between items-center p-6'>
        <span className='font-[600] text-[24px] leading-[32px] text-main-text-color'>History</span>
        <div className='relative sm:w-[75%] w-[70%] rounded-[32px] border-[1px] border-border-color py-3 px-6 bg-white flex items-center'>
          <input
            type='text'
            placeholder='Search...'
            className='placeholder-gray-text text-main-text-color font-[600] text-[16px] leading-[20px] bg-transparent outline-none w-[90%]'
          />
          <img src={search} alt='Search' className='w-6 h-6' />
        </div>
      </section>

      <section className='w-full p-4 gap-4 flex flex-wrap items-center sm:justify-start justify-around'>
        {history.map((chat, index) => (
          <ChatCard key={index} time={chat.time} prompt={chat.prompt} answer={chat.answer} />
        ))}
      </section>
    </div>
  );
}