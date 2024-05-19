

import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import { correct, uncorrect } from "../../assets/icons"
import { useState } from "react"

export default function osint() {
  const [correctAns, setCorrectAns] = useState(false);
  const [answer, setAnswer] = useState("");
  const [showHints, setShowHints] = useState(false);
  const [click, setClick] = useState(0);
  const [disable, setDisable] = useState(false)
  const counter = () => {
    if (click === hints.length - 1) {
      setDisable(true);
    } else {
      setClick(prevClick => prevClick + 1);
    }
  };
  const setAble = () => {
    setShowHints(true)
  }

  const hints = [
    {
      id:1,
      exerciseNum:1,
      desc:"You must have Маяковская"
    },
    {
      id:2,
      exerciseNum:1,
      desc:"You must have Маяковская and num"
    },
    {
      id:3,
      exerciseNum:1,
      desc:"You must have Маяковская and num even"
    },
    {
      id:4,
      exerciseNum:1,
      desc:"You must have Маяковская 30 + 1"
    }

  ]
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(answer)
    if (answer == "Маяковская 31") {
      setCorrectAns(true)
      alert("Ответ правильный")
    }
    else {
      alert("Ответ неправильный")
    }
  }
    return(
        <>
            <Navbar />
            <section>
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    {correctAns? (<img src={correct} alt="correct" />) : (<img src={uncorrect} alt="uncorrect" />)}
                    
                    {showHints? (<>
                      <span>{hints[click].desc}</span>
                      <button  className={`border w-96 ${disable ? 'bg-gray-400' : 'bg-blue-500'}`} onClick={counter}>Next hint</button>
                    
                    </>) : ( <button onClick={setAble}>SHOW HINTS</button>)}
                </div>
                <div className="flex justify-center min-h-screen items-center py-3 px-2">
      <div className="bg-white flex flex-col gap-3 sm:flex-row items-center justify-around py-5 drop-shadow-lg rounded-lg max-w-5xl w-full px-5">
        <div className="max-w-lg flex justify-center flex-col gap-3">
          <h2 className="text-2xl lg:text-4xl  font-bold text-start">
            Let&apos; bring your dream to real
          </h2>
          <p className="text-base md:text-lg text-gray-500">
            Are looking for going fast in your business?
            <br /> Send your mail address we will contact you soon.&quot;
          </p>
          <div className="flex flex-col sm:flex-row gap-5 max-w-md">
            <input
              type="text"
              className=" rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#3651BF] focus:border-transparent"
              placeholder="Email"
              onChange={e => setAnswer(e.target.value)}
            />
            <button
              className="px-4 py-2 text-base font-semibold text-white bg-[#3651BF] rounded-lg shadow-md hover:bg-[#32439B] focus:outline-none focus:ring-2 focus:ring-[#547FDD] focus:ring-offset-2 focus:ring-offset-[#C7D9F6]"
              type="submit"
              onClick={handleSubmit}
            >
              Subscribe
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center sm:justify-end max-w-xs w-full">
          <img
            src="https://www.tailwindtap.com/assets/components/subscription-cta/jar.jpg"
            alt="flower image"
            className="rounded-md object-cover"
          />
        </div>
      </div>
    </div>
            </section>
            
            <Footer />
        </>
    )
}