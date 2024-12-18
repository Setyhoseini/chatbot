import React, { useState } from 'react'
import logo from '../assets/images/gpt-logo.svg';
import emailLogo from '../assets/images/email-logo.svg';
import passLogo from '../assets/images/pass-logo.svg';
import googleLogo from '../assets/images/google-logo.svg';
import facebookLogo from '../assets/images/facebook-logo.svg';
import line from '../assets/images/line.svg';
import eye from '../assets/images/eye.svg';
import user from '../assets/images/user-icon.png';

import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, setDoc, doc } from "firebase/firestore"; 

import { useNavigate, Link } from 'react-router-dom';

const firebaseConfig = {
        apiKey: "AIzaSyDKoCxfNPZv3Np29NSGc3wMH0HPwYcYGq4",
        authDomain: "chatbot-daf51.firebaseapp.com",
        projectId: "chatbot-daf51",
        storageBucket: "chatbot-daf51.firebasestorage.app",
        messagingSenderId: "176616104466",
        appId: "1:176616104466:web:14ebc5a47a8ce8195deecb",
        measurementId: "G-55L58ZEH94"
};

function togglePass() {
    var x = document.getElementById("pass");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

export default function Signup() {
    const navigate = useNavigate();
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const auth = getAuth(app);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    
    const signUpUser = async () => {
        if (email != "" && password != "" && name != "") {
            createUserWithEmailAndPassword(auth, email, password)
          .then(async (userCredential) => {
            const user = userCredential.user;
            const userRef = doc(db, "users", user.uid)
            await setDoc(userRef, {
                createdAt: (new Date()).getTime(),
                name: name,
                password: password,
                email: email,
            }).then(() => {
                const url = "/internal/" + user.uid + "/";
                navigate(url);
            })
            .catch(() => alert("Something went wrong!"))
          })
          .catch((error) => {
            if (error.code === "auth/email-already-in-use") {
                alert("Email is already in use.");
            } else if (error.code === "auth/weak-password") {
              alert("Password is too weak.");
            } else {
              alert("Error signing up:", error.message);
            }
          });
        }
        else {
            alert("Please fill the form.")
        }
    };

  return (
        <div className="w-[100vw] max-w-[550px] h-[100vh] min-h-[750px] max-h-[780px] flex flex-col items-center px-8 py-4">
            <div className="flex flex-col gap-[24px] text-left w-full mb-10">
                <img src={logo} alt="" className="w-[64px] h-[64px]" />
                     
                <div className="font-BricolageGrotesque text-[40px] text-main-text-color leading-[48px] font-[600] w-full">
                    Sign up to <span className='app-title font-BricolageGrotesque'>Chat bot AI</span>
                </div>
        
                <div className="font-SFProRounded text-[16px] text-gray-text leading-[24px] w-full">
                    Have an account? <Link to="/" className="text-green font-[600]">Log in</Link>
                </div>
            </div>
        
            <div className="w-full flex flex-col gap-[32px]">
        
                <div className="flex flex-col gap-6 sm:text-[16px] text-[14px]">
                    <div className="flex gap-2 border-[1px] border-border-color rounded-[16px] p-4 w-full">
                        <img src={user} alt="" className="w-[28px] h-[28px]" />
                        <input type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Full name" className="outline-none placeholder:text-gray-text w-[75%]" />
                    </div>

                    <div className="flex gap-2 border-[1px] border-border-color rounded-[16px] p-4 w-full">
                        <img src={emailLogo} alt="" className="w-[28px] h-[28px]" />
                        <input required type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email" className="outline-none placeholder:text-gray-text w-[80%]" /> 
                    </div>
        
                    <div className="flex gap-2 border-[1px] border-border-color rounded-[16px] p-4 w-full">
                        <img src={passLogo} alt="" className="w-[28px] h-[28px]" />
                        <input id='pass' required type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password" className="outline-none placeholder:text-gray-text w-[75%]" />
                        <div className='relative ml-auto'>
                            <input onClick={togglePass} type="checkbox" className='w-[28px] h-[28px] absolute right-0 opacity-0 cursor-pointer' />
                            <img src={eye} alt="" className="w-[28px] h-[28px]" />
                        </div> 
                        
                    </div>
                </div>
        
                <button type='button' onClick={signUpUser} className="bg-green rounded-[36px] text-white text-[16px] leading-[20px] font-[600] sm:px-[161px] px-[40%] py-[18px] w-full">Sign up</button>
        
                <div className="relative">
                    <hr className="w-full border-[0.5px] border-border-color" />
                    <span className="text-gray-text text-[14px] leading-[18px] bg-white px-[24px] relative bottom-[14px]">Or sign up with</span>
                </div>
        
                <div className="flex gap-4 items-center justify-center relative bottom-6">
                    <button className="font-[600] text-[16px] leading-[20px] text-main-text-color sm:px-[12%] px-[10%] py-4 bg-border-color rounded-[36px] flex items-center sm:gap-2 gap-[7%]">
                        <img src={googleLogo} alt="" className="w-[24px] h-[24px]" />
                        <span>Google</span>
                    </button>
        
                    <button className="font-[600] text-[16px] leading-[20px] text-main-text-color sm:px-[12%] py-4 px-[10%] bg-border-color rounded-[36px] flex items-center gap-[7%] sm:gap-2">
                        <img src={facebookLogo} alt="" className="w-[24px] h-[24px]" />
                        <span>Facebook</span>
                    </button>
                </div>
            </div>
        
            <footer className="flex gap-4 text-[14px] leading-[18px] text-gray-text mt-auto">
                <span>Terms of use</span>
                <img src={line} alt="" />
                <span>Privacy policy</span>
            </footer>
        </div>
  )
}
