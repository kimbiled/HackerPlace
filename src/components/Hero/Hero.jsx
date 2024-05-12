import { bgVideo } from "../../assets/videos"
import { getstarted, buydunes, Subtract, refund} from "../../assets/icons/index"
import { useEffect } from "react"
import AOS from 'aos'
import 'aos/dist/aos.css'
import {    chaingpt, mexc, gains, chappyz, seedify, gateio} from '../../assets/partners/index'
export default function Hero() {
    useEffect(()=>{
        AOS.init({duration:1000})
    },[])
    return(
        <>
            <div className="w-full h-screen bg-black">
                <div className="overlay"></div>
                <video src={bgVideo} autoPlay muted loop/>
                <div className="content w-full mx-auto flex flex-col text-white gap-16">
                        <div className="myFontScienceReg w-[490px] h-8 text-center mx-auto mt-20" data-aos="fade-up" data-aos-once="true">
                            <h3>Platform forged from Sands of ancient desert to provide incubation to Innovations on Runes protocol</h3>
                        </div>
                        <div className="myFontScienceMed text-6xl w-[674px] text-center mx-auto" data-aos="fade-up" data-aos-once="true">
                           <h1>Join the most  <span className="text-[#81D100]">innovative   </span> launchpad of 2024</h1> 
                        </div>
                        <div className="text-center mx-auto flex flex-row justify-center items-center w-[490px] gap-10 mt-36" data-aos="fade-up" data-aos-once="true">
                            <img src={getstarted} alt="getStartedButton" className='cursor-pointer hover:opacity-80 hover:contrast-125 ease-in-out'/>
                            <img src={buydunes} alt="buyDunesButton"className='cursor-pointer hover:opacity-80 ease-in-out' />
                        </div>
                        <div className="flex flex-row mx-auto w-full mt-4" data-aos="fade-up" data-aos-once="true">
                            <div className="w-[1280px] border-white gap-4 border-opacity-25 h-40 border-t-[0.6px] border-b-[0.6px] flex flex-col px-12">
                                <div className="flex flex-row gap-3 items-center">
                                    <p className="myFontMonoReg opacity-70 mt-4 uppercase">Trusted by </p>
                                    <img src={Subtract} alt="downEl" className="w-[15px] h-[10px] mt-4"/>
                                </div>
                                <div className="flex flex-row justify-between">
                                    <div className="flex flex-row justify-around w-full h-[51px] ">
                                        <img src={chaingpt}  alt="chaingpt"/>
                                        <img src={mexc}  alt="mexc"/>
                                        <img src={gains}  alt="gains"/>
                                        <img src={chappyz}  alt="chappyz" className="opacity-80"/>
                                        <img src={seedify}  alt="seedify" className="opacity-70"/>
                                        <img src={gateio}  alt="gateio" className="opacity-50"/>
                                    </div>
                                </div>
                            </div>
                            <div>
                                    <div className="w-60 flex justify-center h-[160px] items-center border-white border-opacity-25 border-l-[0.6px] border-b-[0.6px] border-t-[0.6px]">
                                        <img src={refund} alt="refundIcon"/>
                                    </div>
                            </div>
                        </div>
                </div>
            </div>
        </>
    )
}