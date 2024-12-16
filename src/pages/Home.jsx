import React from 'react'
import arrow from '../assets/images/arrow-icon.svg'
import avatar from '../assets/images/avatar.svg'
import logo from '../assets/images/gpt-logo.svg'
import plus from '../assets/images/plus.svg'
import search from '../assets/images/search-icon.svg'

export default function Home() {
  return (
    <div className='w-[100vw] max-w-[550px] h-[100vh] min-h-[750px] max-h-[770px] flex flex-col items-center overflow-y-scroll'>
        <header className='w-full sticky top-0 flex p-6 bg-white z-[99]'>
            <div className='flex items-center gap-5'>
                <img src={arrow} alt="" className='w-[24px] h-[24px]' />
                <span className='font-[600] text-[20px] leading-6 text-main-text-color'>Back</span>
            </div>
            <img src={avatar} alt="" className='w-10 h-10 ml-auto' />
        </header>

        <section className='w-full p-6 border-b-[1px] border-border-color'>
            <div className='sm:text-[40px] text-[35px] leading-[48px] text-main-text-color text-left font-[600] w-full'>
                <div className='font-BricolageGrotesque'>Start a new chat</div>
                <div className='flex items-center gap-3 font-BricolageGrotesque'><span className='font-BricolageGrotesque'>With</span> <img src={logo} alt="" className='w-10 h-10' /></div>
                <div className='flex items-center'>
                    <div id='app-title' className='font-BricolageGrotesque'>Chat bot AI</div>
                    <button type='button' className="bg-green rounded-[36px] text-white sm:text-[16px] leading-[20px] font-[600] text-[14px] sm:px-6 px-3 py-4 flex items-center gap-2 ml-auto">
                        <img src={plus} alt="" className='sm:w-6 sm:h-6 w-5 h-5' />
                        <span>New Topic</span>
                    </button>
                </div>
            </div>
        </section>

        <section className='w-full flex justify-between items-center p-6'>
            <div className='w-full flex justify-between items-center'>
                <span className='font-[600] text-[24px] leading-[32px] text-main-text-color'>History</span>
                <div className='relative sm:w-[75%] w-[70%] rounded-[32px] border-[1px] border-border-color py-3 px-6 bg-white flex items-center justify-between'>
                    <input type="text" placeholder='Search...' className='placeholder-gray-text text-main-text-color font-[600] text-[16px] leading-[20px] bg-transparent outline-none w-[90%]'/>
                    <img src={search} alt="" className='w-6 h-6 relative right-0 bottom-0' />
                </div>
            </div>
        </section>

        <section className='w-full p-4 gap-4 flex flex-wrap items-center justify-around'>
            <div className='text-left border-[1px] border-border-color rounded-[36px] sm:w-[47%] sm:min-w-[167px] flex gap-3 pr-6 py-8 flex-col max-h-[300px] w-[95%]'>
                <div className='text-green font-[600] text-[16px] leading-5 ml-[18px]'>Tell me the story of a student who was going to school an...</div>
                <div className='text-gray-text text-[16px] leading-6 ml-[26px]'>Once upon a time, in the quaint town of Meadowville, there lived a spirited high school student name...</div>
                <div className='text-gray-text font-[600] text-[14px] leading-[18px] opacity-70 ml-[26px]'>5 days ago</div>
            </div>
            <div className='text-left border-[1px] border-border-color rounded-[36px] w-[47%] flex gap-3 pr-6 py-8 flex-col min-w-[167px] max-h-[300px]'>
                <div className='text-green font-[600] text-[16px] leading-5 ml-[18px]'>Tell me the story of a student who was going to school an...</div>
                <div className='text-gray-text text-[16px] leading-6 ml-[26px]'>Once upon a time, in the quaint town of Meadowville, there lived a spirited high school student name...</div>
                <div className='text-gray-text font-[600] text-[14px] leading-[18px] opacity-70 ml-[26px]'>5 days ago</div>
            </div>
            <div className='text-left border-[1px] border-border-color rounded-[36px] w-[47%] flex gap-3 pr-6 py-8 flex-col min-w-[167px] max-h-[300px]'>
                <div className='text-green font-[600] text-[16px] leading-5 ml-[18px]'>Tell me the story of a student who was going to school an...</div>
                <div className='text-gray-text text-[16px] leading-6 ml-[26px]'>Once upon a time, in the quaint town of Meadowville, there lived a spirited high school student name...</div>
                <div className='text-gray-text font-[600] text-[14px] leading-[18px] opacity-70 ml-[26px]'>5 days ago</div>
            </div>
            <div className='text-left border-[1px] border-border-color rounded-[36px] w-[47%] flex gap-3 pr-6 py-8 flex-col min-w-[167px] max-h-[300px]'>
                <div className='text-green font-[600] text-[16px] leading-5 ml-[18px]'>Tell me the story of a student who was going to school an...</div>
                <div className='text-gray-text text-[16px] leading-6 ml-[26px]'>Once upon a time, in the quaint town of Meadowville, there lived a spirited high school student name...</div>
                <div className='text-gray-text font-[600] text-[14px] leading-[18px] opacity-70 ml-[26px]'>5 days ago</div>
            </div>
        </section>
    </div>
  )
}
