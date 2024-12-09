import menuIcon from '../assets/images/menu-icon.svg'
import logo from '../assets/images/gpt-logo.svg'
import exportIcon from '../assets/images/export-icon.svg'
import sendIcon from '../assets/images/send-icon.svg'


import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";


function Internal() {


    
    

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
    const auth = getAuth(app);
    const user = auth.currentUser;


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

            <div>{user.displayName}</div>

            <footer className='flex gap-[4%] w-full mt-auto items-center justify-center py-6 px-3'>
                <input type="text" placeholder='Ask me anything...' className='placeholder-gray-text text-[16px] leading-[24px] border-[1px] border-border-color rounded-[30px] px-6 py-4 w-[80%]' />
                <img src={sendIcon} alt="" className='w-[56px] h-[56px]' />
            </footer>
        </div>
    )
}

export default Internal