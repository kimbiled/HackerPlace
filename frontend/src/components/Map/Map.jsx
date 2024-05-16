import { } from "../../assets/icons/index"
import {  } from "../../assets/videos/index"
import { useEffect } from "react"
import AOS from 'aos'
import 'aos/dist/aos.css'
export default function Map() {
    useEffect(()=>{
        AOS.init({duration:1000})
    },[])
    return(
        <>
            <div className="w-full h-[860px] bg-black px-12 mt-[-105px] flex flex-col">
            <div className="flex flex-col justify-between ">
                <div className="w-[420px] h-[290px] border-white border-opacity-25 border-r-[0.6px] border-t-[0.6px] border-l-[0.6px] flex flex-col" data-aos="fade-up" data-aos-once="true">
                    <div className="w-[420px] h-[156px] border-white border-opacity-25 border-r-[0.6px] border-b-[0.6px] flex flex-col items-end justify-end"> </div>
                    <div className="w-[420px] h-[60px] border-white border-opacity-25 border-r-[0.6px] border-b-[0.6px]">
                        <img src={featured} alt="Featured Launch" width={420} height={60}/>
                    </div>
                </div>
                <div className="w-full border-white border-opacity-25 border-t-[0.6px] border-r-[0.6px] border-l-[0.6px] h-[47px]"></div>
            </div>
            <div className="w-full h-[478px] border-white border-[0.86px] flex flex-row">
                <div className="flex flex-col">
                    <div className="w-[420px] h-[175px] border-white border-opacity-25 border-b-[0.6px] border-l-[0.6px flex flex-col gap-12">
                        <div className="flex flex-row h-12 px-8 py-6" data-aos="fade-up" data-aos-once="true">
                            <div className="">
                                <img src={evermoon} width={47} height={47} alt="toneCoin"/>
                            </div>
                            <div className="text-white myFontScienceMed text-[28px] mt-2 ml-4">
                                <p>Evermoon</p>
                            </div>
                        </div>
                        <div className="flex flex-row gap-8 px-8" data-aos="fade-up" data-aos-once="true">
                            <img src={twitter} width={16} height={16} alt="X social" className="opacity-70 cursor-pointer hover:opacity-100 hover:contrast-125 ease-in-out"/>
                            <img src={www} width={16} height={16} alt="World wide" className="opacity-70 cursor-pointer hover:opacity-100 hover:contrast-125 ease-in-out"/>
                            <img src={discord} width={17} height={16} alt="discord" className="opacity-70 cursor-pointer hover:opacity-100 hover:contrast-125 ease-in-out"/>
                            <img src={telegram} width={16} height={16} alt="telegram" className="opacity-70 cursor-pointer hover:opacity-100 hover:contrast-125 ease-in-out"/>
                        </div>
                        <div className="flex flex-row gap-4 text-white myFontMonoLight text-[9px] px-8 mt-[-25px]" data-aos="fade-up" data-aos-once="true">
                            <button className="w-16 h-[20px] rounded-2xl border-[#81D100] border-[0.86px] flex justify-center items-center cursor-pointer hover:opacity-80 hover:contrast-125 ease-in-out">Gaming</button>
                            <button className="w-16 h-[20px] rounded-2xl border-[#81D100] border-[0.86px] flex justify-center items-center cursor-pointer hover:opacity-80 hover:contrast-125 ease-in-out">Web3</button>
                        </div>
                    </div>
                    <div className="w-[420px] h-[300px] text-white px-8 flex flex-col gap-6" data-aos="fade-up" data-aos-once="true">
                        <div className="mt-8">
                            <h3 className="myFontScienceSemi text-[28px] w-[300px]">Next-Gen 5v5 3-lane MOBA</h3>
                        </div>
                        <div className="flex flex-col gap-4 myFontScienceMed text-sm">
                            <h5>Total Raise: <span className="text-[#81D100]">$300,000</span></h5>
                            <h5>Registration Ends in: <span className="text-[#81D100]">8d 6h 50m 31s</span></h5>
                        </div>
                        <div className="flex flex-row gap-8">
                            <div>
                                <img src={participate} alt="participate" width={151} height={41} className="cursor-pointer hover:opacity-80 ease-in-out"/>
                            </div>
                            <div className="flex flex-row gap-2 justify-center items-center">
                                <div>
                                    <img src={warning} alt="participate" />
                                </div>
                                <div className="myFontScienceReg text-[10px]">
                                    <p>No KYC required to opt-in</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-once="true" >
                    
                    <video src={launch} loop muted autoPlay width={847} className="scale-x-[1.20] ml-[69px]"/>
                </div>
            </div>
            </div>    
        </>
    )
}