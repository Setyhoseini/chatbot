import React from 'react'
import arrow from '../assets/images/arrow-icon.svg'
import avatar from '../assets/images/avatar.svg'
import logo from '../assets/images/gpt-logo.svg'
import plus from '../assets/images/plus.svg'
import search from '../assets/images/search-icon.svg'
import ChatCard from '../components/ChatCard.jsx';

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

        <section className='w-full p-4 gap-4 flex flex-wrap items-center sm:justify-start justify-around'>
            <ChatCard prompt="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus inventore eaque quae explicabo deserunt, voluptatum quos debitis corrupti nemo harum non! Est eaque eos totam expedita qui praesentium voluptatum distinctio! Eligendi, officia atque alias similique ipsa inventore explicabo accusantium magnam. Tempore dignissimos neque sint deserunt accusantium voluptatibus distinctio totam autem ullam cumque? Facere quos culpa beatae autem provident iste repellat! Non hic dolorem fugit aspernatur repellat perferendis soluta eum molestias perspiciatis dicta natus tenetur commodi impedit consectetur nulla quod, in beatae ipsam esse. Libero itaque soluta consequatur mollitia ipsam optio repudiandae alias minus, ex consectetur neque fugit quibusdam non deserunt." answer="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem error, cupiditate molestias obcaecati fuga quod facere voluptates quidem id recusandae tenetur tempore velit sequi unde numquam ipsam iure itaque voluptatum provident fugit iste magni minus soluta tempora. Maiores iure consectetur, sequi inventore ex ut qui suscipit maxime ratione ea rem veritatis sit itaque aperiam corrupti doloribus ducimus molestias nostrum fugiat vero fugit nisi? Iste fuga impedit est molestiae architecto minima atque, omnis quam non, molestias veritatis optio, odit totam. Voluptatem natus voluptatibus tempora sint eaque iste veritatis. Dolores, molestiae iusto? Mollitia deleniti distinctio corporis officia maiores facilis. Nemo, recusandae nihil. Porro aliquid inventore corporis harum voluptate aspernatur error dolor, debitis iusto amet quia et repellat totam deleniti illum blanditiis, ad ut id provident facere, distinctio odit quos! Nostrum, alias expedita ea debitis ducimus laboriosam sed, commodi accusamus facere consequatur, voluptas eum! Eveniet sint quae quibusdam quisquam mollitia eius sequi aliquam exercitationem dolor quasi, dignissimos velit id modi odio unde rem quis ratione in voluptate adipisci magnam laudantium iste eligendi sit! Sit dignissimos laudantium similique tempore iure expedita! Perferendis dolore aspernatur magni earum, autem suscipit nesciunt iure neque iste fugiat assumenda fugit ab illo error delectus veniam rem eius unde inventore." time="1734382117939" />

                        <ChatCard prompt="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus inventore eaque quae explicabo deserunt, voluptatum quos debitis corrupti ibero itaque soluta consequatur mollitia ipsam optio repudiandae alias minus, ex consectetur neque fugit quibusdam non deserunt." answer="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem error, cupiditate moiure expedita! Pet assumenda fugit ab illo error delectus veniam rem eius unde inventore." time="1734382117939" />

        </section>
    </div>
  )
}
