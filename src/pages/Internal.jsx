import menuIcon from '../assets/images/menu-icon.svg'
import logo from '../assets/images/gpt-logo.svg'
import exportIcon from '../assets/images/export-icon.svg'
import sendIcon from '../assets/images/send-icon.svg'

function Internal() {
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

            <footer className='flex gap-[4%] w-full mt-auto items-center justify-center'>
                <input type="text" placeholder='Ask me anything...' className='placeholder-gray-text text-[16px] leading-[24px] border-[1px] border-border-color rounded-[30px] px-6 py-4 w-[80%]' />
                <img src={sendIcon} alt="" className='w-[56px] h-[56px]' />
            </footer>
        </div>
    )
}

export default Internal