import menuIcon from '../assets/images/menu-icon.svg'
import logo from '../assets/images/gpt-logo.svg'
import exportIcon from '../assets/images/export-icon.svg'
import sendIcon from '../assets/images/send-icon.svg'
import SentMessage from '../components/SentMessage.jsx';
import ReceivedMessage from '../components/ReceivedMessage.jsx';

import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore"; 



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
      


    const getUserByEmail = async (email) => {
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
      };

async function getData() {
    
    const chatsRef = await collection(db, `users/1RonqG0kpWMYkPwl6bMA/chats/AQSIch9PKa67xWFBkS8y/messages`);
    const querySnapshot = await getDocs(chatsRef);

    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} =>`, doc.data().prompt);
      });
}

async function gettttt() {
    console.log(await getUserByEmail('v7x1XY5FTvgRDKBObhOlKLiEzUB2'));
}


function Internal() {

     
  //  const querySnapshot = await getDocs(collection(db, "users"));
   // querySnapshot.forEach((doc) => {
  //      console.log(`${doc.id} =>`, doc.data());
 //   });
   
    
    getData();
 //  gettttt();

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
                <SentMessage />
            </div>

            <footer className='flex gap-[4%] w-full mt-auto items-center justify-center py-6 px-3'>
                <input type="text" placeholder='Ask me anything...' className='placeholder-gray-text text-[16px] leading-[24px] border-[1px] border-border-color rounded-[30px] px-6 py-4 w-[80%]' />
                <img src={sendIcon} alt="" className='w-[56px] h-[56px]' />
            </footer>
        </div>
    )
}

export default Internal