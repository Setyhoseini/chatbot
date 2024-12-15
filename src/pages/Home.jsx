import React from 'react'
import arrow from '../assets/images/arrow-icon.svg'
import avatar from '../assets/images/avatar.svg'
import logo from '../assets/images/gpt-logo.svg'
import plus from '../assets/images/plus.svg'

export default function Home() {
  return (
    <div className='w-[100vw] max-w-[550px] h-[100vh] min-h-[750px] max-h-[770px] flex flex-col items-center bg-slate-300'>
        <header className='w-full sticky top-0 flex p-6'>
            <div className='flex items-center gap-5'>
                <img src={arrow} alt="" className='w-[24px] h-[24px]' />
                <span className='font-[600] text-[20px] leading-6 text-main-text-color'>Back</span>
            </div>
            <img src={avatar} alt="" className='w-10 h-10 ml-auto' />
        </header>

        <section className='w-full p-6 border-b-[1px] border-border-color'>
            <div className='text-[40px] leading-[48px] text-main-text-color text-left font-[600] w-full'>
                <div className='font-BricolageGrotesque'>Start a new chat</div>
                <div className='flex items-center gap-3 font-BricolageGrotesque'><span className='font-BricolageGrotesque'>With</span> <img src={logo} alt="" className='w-10 h-10' /></div>
                <div className='flex items-center'>
                    <div id='app-title' className='font-BricolageGrotesque'>Chat bot AI</div>
                    <button type='button' className="bg-green rounded-[36px] text-white text-[16px] leading-[20px] font-[600] px-6 py-4 flex items-center gap-2 ml-auto">
                        <img src={plus} alt="" className='w-6 h-6' />
                        <span>New Topic</span>
                    </button>
                </div>
            </div>
            
        </section>
    </div>
  )
}
