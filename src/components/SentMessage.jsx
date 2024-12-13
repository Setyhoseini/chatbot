import React from 'react'
import avatar from '../assets/images/avatar.svg'
import editIcon from '../assets/images/edit-icon.svg'
import copyIcon from '../assets/images/copy-icon.svg'

export default function SentMessage(props) {
  return (
    <div>
        <div className='m-auto flex flex-col gap-4 p-6 border-t-[1px] border-border-color'>
            <div className='flex gap-3 items-center'>
                <img src={avatar} alt="" className='w-[24px] h-[24px]' />
                <span className='font-[600] text-[16px] leading-[20px] text-main-text-color'>You</span>
            </div>

            <p className='w-full text-[16px] leading-[24px] text-green break-words text-left'>{props?.text}</p>

            <div className='flex items-center gap-6'>
                <div className='flex gap-2 items-center'>
                    <img src={editIcon} alt="" />
                    <span className='text-gray-text font-[600] text-[14px] leading-[18px]'>Edit</span>
                </div>
                <div className='flex gap-2 items-center'>
                    <img src={copyIcon} alt="" />
                    <span className='text-gray-text font-[600] text-[14px] leading-[18px]'>Copy</span>
                </div>
            </div>
        </div>
    </div>
  )
}