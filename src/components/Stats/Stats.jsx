import { } from "../../assets/icons/index"
import { useEffect } from "react"
import AOS from 'aos'
import 'aos/dist/aos.css'
export default function Stats() {
    useEffect(()=>{
        AOS.init({duration:1000})
    }, [])
    return(
        <>
          <div className="w-full h-[860px] bg-black mt-28 px-12 flex flex-col">
            <div className="flex flex-row justify-between">
                <div className="w-[420px] h-[290px] border-white border-opacity-25 border-r-[0.6px] border-l-[0.6px] flex flex-wrap" data-aos="fade-up" data-aos-once="true">
                    <div className="w-[210px] h-[156px] border-white border-opacity-25 border-r-[0.6px] border-b-[0.6px] flex flex-col items-end justify-end">
                        <img src={idos} alt="IDOs" width={210}/>
                    </div>
                    <div className="w-[208px] h-[156px] border-white border-opacity-25 border-b-[0.6px]"></div>
                    <div className="w-[210px] h-[134px] border-white border-opacity-25 border-r-[0.6px] border-b-[0.6px]">
                        <div className="h-[60px] flex flex-col justify-center items-center border-white border-opacity-25 border-b-[0.6px]">
                            <p className="myFontMonoReg text-white text-sm uppercase text-center opacity-60"> Live & UPCOMING</p>
                        </div>
                    </div>
                    <div className="w-[208px] h-[134px] border-white border-opacity-25 border-b-[0.6px]">
                        <div className="h-[60px] flex flex-col justify-center items-center border-white border-opacity-25 border-b-[0.6px]">
                            <p className="myFontMonoReg text-white text-sm uppercase text-center">FINISHED</p>
                        </div>
                    </div>
                </div>
                <div className="w-48 border-white border-opacity-25 border-l-[0.6px]"></div>
            </div>
            <div className="flex flex-row justify-between" data-aos="fade-up" data-aos-once="true">
                <div className="w-[420px] h-[465px] border-[#EAE9E6] border-[0.83px] relative flex flex-col">
                    <div>
                        <img src={cat} alt="cat" className=" w-[420px] border-white border-b-[0.6px] border-opacity-25"/>
                        <img src={circleCat} alt="circleCat" className="centreIcons"/>
                    </div>
                    <div className="flex flex-col">
                        <div className="text-white uppercase myFontScienceReg text-[32px] h-[70px] flex items-center justify-center border-white border-b-[0.6px] border-opacity-25">
                            <p>Catamoto  CATA</p>
                        </div>
                        <div className="flex flex-row text-white myFontScienceSemi text-xs opacity-70">
                            <div className="w-[210px] h-[49px] flex items-center justify-center border-white border-b-[0.6px] border-r-[0.6px] border-opacity-25">
                                <p>TOTAL RAISED</p>
                            </div>
                            <div className="w-[210px] h-[49px] flex items-center justify-center border-white border-b-[0.6px] border-opacity-25">
                                <p>ATH ROI</p>
                            </div>
                        </div>
                        <div className="flex flex-row text-white myFontScienceReg text-xl">
                            <div className="w-[210px] h-[84px] flex flex-row gap-2 items-center justify-center border-white border-b-[0.6px] border-r-[0.6px] border-opacity-25">
                                <div className="mt-[-5px]">
                                    <img src={tone} alt="toneCoin"/>
                                </div>
                                <div>
                                    <p>225,000</p>
                                </div>
                            </div>
                            <div className="w-[210px] h-[84px] flex items-center justify-center border-white border-b-[0.6px] border-opacity-25">
                                <p>25x</p>
                            </div>
                        </div>
                        <div className="flex flex-row justify-center items-center gap-8 h-[73px] border-white border-b-[0.6px] border-opacity-25">
                            <img src={twitter} width={27} height={27} alt="X social" className="opacity-70 cursor-pointer hover:opacity-100 hover:contrast-125 ease-in-out"/>
                            <img src={www} width={27} height={27} alt="World wide" className="opacity-70 cursor-pointer hover:opacity-100 hover:contrast-125 ease-in-out"/>
                            <img src={telegram} width={27} height={27} alt="telegram" className="opacity-70 cursor-pointer hover:opacity-100 hover:contrast-125 ease-in-out"/>
                        </div>
                        <div className="text-white uppercase myFontMonoLight text-[15px] h-[65px] flex items-center justify-center">
                            <p className="cursor-pointer hover:opacity-80 hover:contrast-125 ease-in-out">MORE DETAILS</p>
                        </div>
                    </div>
                </div>
                <div className="w-[420px] h-[465px] border-[#EAE9E6] border-[0.83px] relative flex flex-col">
                    <div>
                        <img src={lemon} alt="cat" className=" w-[420px] border-white border-b-[0.6px] border-opacity-25"/>
                        <img src={circleLemon} alt="circleCat" className="centreIcons2"/>
                    </div>
                    <div className="flex flex-col">
                        <div className="text-white  myFontScienceReg text-[32px] h-[70px] flex items-center justify-center border-white border-b-[0.6px] border-opacity-25">
                            <p>Eesee ESE</p>
                        </div>
                        <div className="flex flex-row text-white myFontScienceSemi text-xs opacity-70">
                            <div className="w-[210px] h-[49px] flex items-center justify-center border-white border-b-[0.6px] border-r-[0.6px] border-opacity-25">
                                <p>TOTAL RAISED</p>
                            </div>
                            <div className="w-[210px] h-[49px] flex items-center justify-center border-white border-b-[0.6px] border-opacity-25">
                                <p>ATH ROI</p>
                            </div>
                        </div>
                        <div className="flex flex-row text-white myFontScienceReg text-xl">
                            <div className="w-[210px] h-[84px] flex flex-row gap-2 items-center justify-center border-white border-b-[0.6px] border-r-[0.6px] border-opacity-25">
                                <div className="mt-[-5px]">
                                    <img src={tone} alt="toneCoin"/>
                                </div>
                                <div>
                                    <p>500,000</p>
                                </div>
                            </div>
                            <div className="w-[210px] h-[84px] flex items-center justify-center border-white border-b-[0.6px] border-opacity-25">
                                <p>8x</p>
                            </div>
                        </div>
                        <div className="flex flex-row justify-center items-center gap-8 h-[73px] border-white border-b-[0.6px] border-opacity-25">
                            <img src={twitter} width={27} height={27} alt="X social"  className="opacity-70 cursor-pointer hover:opacity-100 hover:contrast-125 ease-in-out"/>
                            <img src={telegram} width={27} height={27} alt="telegram"  className="opacity-70 cursor-pointer hover:opacity-100 hover:contrast-125 ease-in-out"/>
                        </div>
                        <div className="text-white uppercase myFontMonoLight text-[15px] h-[65px] flex items-center justify-center">
                            <p className=" cursor-pointer hover:opacity-80 ease-in-out">MORE DETAILS</p>
                        </div>
                    </div>
                </div>
                <div className="w-[420px] h-[465px] border-[#EAE9E6] border-[0.83px] relative flex flex-col">
                    <div>
                        <img src={gem} alt="cat" className=" w-[420px] border-white border-b-[0.6px] border-opacity-25"/>
                        <img src={circleGem} alt="circleCat" className="centreIcons"/>
                    </div>
                    <div className="flex flex-col">
                        <div className="text-white uppercase myFontScienceReg text-[32px] h-[70px] flex items-center justify-center border-white border-b-[0.6px] border-opacity-25">
                            <p>Next Gem AI</p>
                        </div>
                        <div className="flex flex-row text-white myFontScienceSemi text-xs opacity-70">
                            <div className="w-[210px] h-[49px] flex items-center justify-center border-white border-b-[0.6px] border-r-[0.6px] border-opacity-25">
                                <p>TOTAL RAISED</p>
                            </div>
                            <div className="w-[210px] h-[49px] flex items-center justify-center border-white border-b-[0.6px] border-opacity-25">
                                <p>ATH ROI</p>
                            </div>
                        </div>
                        <div className="flex flex-row text-white myFontScienceReg text-xl">
                            <div className="w-[210px] h-[84px] flex flex-row gap-2 items-center justify-center border-white border-b-[0.6px] border-r-[0.6px] border-opacity-25">
                                <div className="mt-[-5px]">
                                    <img src={tone} alt="toneCoin"/>
                                </div>
                                <div>
                                    <p>90,000</p>
                                </div>
                            </div>
                            <div className="w-[210px] h-[84px] flex items-center justify-center border-white border-b-[0.6px] border-opacity-25">
                                <p>2x</p>
                            </div>
                        </div>
                        <div className="flex flex-row justify-center items-center gap-8 h-[73px] border-white border-b-[0.6px] border-opacity-25">
                            <img src={twitter} width={27} height={27} alt="X social" className="opacity-70 cursor-pointer hover:opacity-100 hover:contrast-125 ease-in-out"/>
                            <img src={www} width={27} height={27} alt="World wide" className="opacity-70 cursor-pointer hover:opacity-100 hover:contrast-125 ease-in-out"/>
                            <img src={discord} width={27} height={27} alt="discord" className="opacity-70 cursor-pointer hover:opacity-100 hover:contrast-125 ease-in-out"/>
                            <img src={telegram} width={27} height={27} alt="telegram" className="opacity-70 cursor-pointer hover:opacity-100 hover:contrast-125 ease-in-out"/>
                        </div>
                        <div className="text-white uppercase myFontMonoLight text-[15px] h-[65px] flex items-center justify-center">
                            <p className=" cursor-pointer hover:opacity-80 ease-in-out">MORE DETAILS</p>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </>
    )
}