import React from 'react'
import logo from '../assets/images/gpt-logo.svg';
import copyIcon from '../assets/images/copy-icon.svg';
import shareIcon from '../assets/images/share-icon.svg';
import regenerateIcon from '../assets/images/regenerate-icon.svg';

export default function ReceivedMessage(props) {
  return (
    <div>
        <div className='m-auto flex flex-col gap-4 p-6 border-t-[1px] border-border-color'>
            <div className='flex gap-3 items-center'>
                <img src={logo} alt="" className='w-[24px] h-[24px]' />
                <span className='font-[600] text-[16px] leading-[20px] text-main-text-color'>Chat Bot AI</span>
            </div>

            <p className='w-full text-[16px] leading-[24px] text-main-text-color break-words text-left'>{props?.text}</p>

            <div className='flex items-center gap-6'>
                <div className='flex gap-2 items-center'>
                    <img src={copyIcon} alt="" />
                    <span className='text-gray-text font-[600] text-[14px] leading-[18px]'>Copy</span>
                </div>
                <div className='flex gap-2 items-center'>
                    <img src={shareIcon} alt="" />
                    <span className='text-gray-text font-[600] text-[14px] leading-[18px]'>Share</span>
                </div>
                <div className='flex gap-2 items-center'>
                    <img src={regenerateIcon} alt="" />
                    <span className='text-gray-text font-[600] text-[14px] leading-[18px]'>Regenerate</span>
                </div>
            </div>
        </div>
    </div>
  )
}
