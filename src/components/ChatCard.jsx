import React from 'react'
import { useNavigate } from 'react-router-dom';



export default function ChatCard(props) {

    const uid = props.uid;
    const chatId = props.chatId;
    const navigate = useNavigate();
    const goToChat = () => {
    const url = "/internal/" + uid + "/" + chatId;
    navigate(url);
  }

    let prompt = props?.prompt;
    let answer = props?.answer;
    const time = Math.floor(Number(props?.time));
    const now = Math.floor(((new Date).getTime())/1000);
    let diff = Math.abs(time-now);

    if (diff >= 365*24*60*60) {
        diff = Math.floor(diff/(365*24*60*60));
        diff += (diff==1) ? " year ago" : " years ago";
    }
    else if (diff >= 30*24*60*60) {
        diff = Math.floor(diff/(30*24*60*60));
        diff += (diff==1) ? " month ago" : " months ago";
    }
    else if (diff >= 24*60*60) {
        diff = Math.floor(diff/(24*60*60));
        diff += (diff==1) ? " day ago" : " days ago";
    }
    else if (diff >= 60*60) {
        diff = Math.floor(diff/(60*60));
        diff += (diff==1) ? " hour ago" : " hours ago";
    }
    else if (diff >= 60) {
        diff = Math.floor(diff/60);
        diff += (diff==1) ? " minute ago" : " minutes ago";
    }
    else {
        diff = "moments ago";
    }

    if (prompt.length > 60) {
        prompt = prompt.substring(0, 57) + "...";
    }
    if (answer.length > 93) {
        answer = answer.substring(0, 90) + "...";
    }
  return (
        <button onClick={goToChat} className='bg-transparent w-[95%] max-w-[360px] sm:max-h-[350px] max-h-[300px] sm:w-[47%] sm:min-w-[167px] rounded-[36px] p-0'>
            <div className='text-left border-[1px] border-border-color rounded-[36px] flex gap-3 pr-6 py-8 flex-col w-full'>
                <div className='text-green font-[600] text-[16px] leading-5 ml-[18px] break-words'>{prompt}</div>
                <div className='text-gray-text text-[16px] leading-6 ml-[26px] break-words'>{answer}</div>
                <div className='text-gray-text font-[600] text-[14px] leading-[18px] opacity-70 ml-[26px]'>{diff}</div>
            </div>
        </button>
  )
}