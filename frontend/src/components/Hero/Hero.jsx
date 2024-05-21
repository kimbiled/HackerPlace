
import { hero } from "../../assets/icons/index"
import { animateScroll as scroll} from 'react-scroll';
import { Link } from "react-router-dom"
export default function Hero() {
    const scrollTo = () => {
		scroll.scrollTo(1570);
	  };
    return(
        <>
            <section className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl font-['Montserrat']">
                <div className="container flex flex-col sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex flex-col justify-center text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-5xl font-bold leading-none sm:text-6xl">Welcome to the<br/>
                            <span className="text-violet-600">Cybersecurity</span> World!
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12">Here, anyone can become a master of digital security. 
                            <br  className="hidden md:inline lg:hidden" /> Our interactive labs, captivating challenges, and expert learning materials will equip you with the skills needed for a successful career in cybersecurity.
                        </p>
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <Link rel="noopener noreferrer" to="play" className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-600 dark:text-gray-50">Get try</Link>
                            <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-800" onClick={()=>scrollTo()}>More info</a>
                        </div>
                    </div>
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src={hero} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>
                </div>
            </section>
        </>
    )
}