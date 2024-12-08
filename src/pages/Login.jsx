import React from "react";
import logo from '../assets/images/gpt-logo.svg';
import emailLogo from '../assets/images/email-logo.svg';
import passLogo from '../assets/images/pass-logo.svg';
import googleLogo from '../assets/images/google-logo.svg';
import facebookLogo from '../assets/images/facebook-logo.svg';
import line from '../assets/images/line.svg';
import eye from '../assets/images/eye.svg';

function Login() {
    return (
        <div className="w-full max-w-[550px] px-8 h-full min-h-[750px] max-h-[886px] flex flex-col items-center">
            <div className="flex flex-col gap-[24px] text-left w-full mb-10">

                <img src={logo} alt="" className="w-[64px] h-[64px]" />
             
                <div className="font-BricolageGrotesque text-[40px] text-main-text-color leading-[48px] font-[600] w-full">
                    Login to your account
                </div>

                <div className="font-SFProRounded text-[16px] text-gray-text leading-[24px] w-full">
                    Don’t have an account? <span className="text-green font-[600]">Sign Up</span>
                </div>
            </div>


            <form action="" className="w-full flex flex-col gap-[32px]">

                <div className="flex flex-col gap-6">
                    <div className="flex gap-2 border-[1px] border-border-color rounded-[16px] p-4 w-full">
                        <img src={emailLogo} alt="" className="w-[28px] h-[28px]" />
                        <input type="text" placeholder="Email" className="outline-none placeholder:text-gray-text w-[80%]" /> 
                    </div>

                    <div className="flex gap-2 border-[1px] border-border-color rounded-[16px] p-4 w-full">
                        <img src={passLogo} alt="" className="w-[28px] h-[28px]" />
                        <input type="text" placeholder="Password" className="outline-none placeholder:text-gray-text w-[75%]" /> 
                        <img src={eye} alt="" className="w-[28px] h-[28px] ml-auto" />
                    </div>

                    <div className="text-green font-[600] text-[14px] leading-[18px] text-right">Forgot Password?</div>
                </div>

                <button className="bg-green rounded-[36px] text-white text-[16px] leading-[20px] font-[600] px-[161px] py-[18px] w-full">Login</button>

                <div className="relative">
                    <hr className="w-full border-[0.5px] border-border-color" />
                    <span className="text-gray-text text-[14px] leading-[18px] bg-white px-[24px] relative bottom-[14px]">Or login with</span>
                </div>

                <div className="flex gap-4">
                    <button className="font-[600] text-[16px] leading-[20px] text-main-text-color  px-[12%] py-4 bg-border-color rounded-[36px] flex items-center gap-2">
                        <img src={googleLogo} alt="" className="w-[24px] h-[24px]" />
                        <span>Google</span>
                    </button>

                    <button className="font-[600] text-[16px] leading-[20px] text-main-text-color  px-[12%] py-4 bg-border-color rounded-[36px] flex items-center gap-2">
                        <img src={facebookLogo} alt="" className="w-[24px] h-[24px]" />
                        <span>Facebook</span>
                    </button>
                </div>
            </form>

            <footer className="flex gap-4 text-[14px] leading-[18px] text-gray-text mt-auto">
                <span>Terms of use</span>
                <img src={line} alt="" />
                <span>Privacy policy</span>
            </footer>
        </div>
    )
}

export default Login