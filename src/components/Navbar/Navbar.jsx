import {logo, user, wallet} from '../../assets/icons/index'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
export default function Navbar() {
    useEffect(()=>{
        AOS.init({duration:6000})
    },[])
    return(
        <>
          <nav className="bg-black h-32 border-white border-b-[0.6px] border-opacity-25 flex flex-row">
                <div className="text-white w-60 border-white border-r-[0.6px] border-opacity-25 h-32 flex items-center justify-center">
                   <a href="#" data-aos="fade-up" data-aos-once="true"> <img src={logo} alt="logo" width={126} height={30}/></a>
                </div>
                <div className='w-[1020px] text-white'>
                    <ul className='flex justify-around items-center h-32 myFontMonoMed' data-aos="fade-up" data-aos-once="true">
                      <li className='cursor-pointer hover:opacity-70 ease-in-out' >
                      Staking
                      </li>
                      <li className='cursor-pointer hover:opacity-70 ease-in-out' >
                      IDO Launchpad
                      </li>
                      <li className='cursor-pointer hover:opacity-70 ease-in-out' >
                      INO Launchpad
                      </li>
                    </ul>
                </div>
                <div className="order-2 text-white w-60 border-white border-l-[0.6px] border-opacity-25 h-32 flex justify-center items-center">
                    <div className='mr-8 cursor-pointer hover:opacity-80 ease-in-out hover:contrast-125' data-aos="fade-up" data-aos-once="true">
                        <img src={user} alt="logo" width={16} height={16}/>
                    </div>
                    <div data-aos="fade-up" data-aos-once="true">
                        <img src={wallet} alt="logo" width={102} height={35} className='cursor-pointer hover:opacity-80 ease-in-out' />
                    </div>
                </div>
          </nav>

        </>
        )
}