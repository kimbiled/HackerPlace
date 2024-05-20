
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import { Link } from "react-router-dom"
export default function Play() {
    const exercises = [
        {
           id: 1,
           title: "Advanced Web Exploitation",
           date: "01",
           task: "Discover sophisticated methods to exploit and secure web applications effectively",
           category: "webExp",
           url:'/webExp'
        },
        {
           id: 2,
           title: "Steganography Techniques",
           date: "02",
           task: "Learn advanced methods for hiding and detecting information in media",
           category: "steganography",
           url:'/steganography'
        },
        {
           id: 3,
           title: "Expert Open-Source Intelligence (OSINT)",
           date: "03",
           task: "Master advanced techniques for gathering and analyzing publicly available data",
           category: "osint",
           url:'/osint'
        },
        {
           id: 4,
           title: "Intermediate Cryptography",
           date: "04",
           task: "Enhance your understanding of cryptographic algorithms and secure communication methods",
           category: "cryptography",
           url:'/cryptography'
        },
        {
           id: 5,
           title: "Introductory Reverse Engineering",
           date: "05",
           task: "Introduction to software disassembly, analysis, and vulnerability detection techniques",
           category: "reverseEng",
           url:'/reverseEng'
        },
        {
           id: 6,
           title: "Binary Exploitation",
           date: "06",
           task: "Basic concepts of binary exploitation, including buffer overflows and ROP",
           category: "binaryExp",
           url:'/binaryExp'
        }
     ]

    //  const navigate = useNavigate();
//    const handleButtonClick = (exercise) => {
//       if (
//          exercise.category == "webExp"
//       ) {
//          navigate("/webExp");
//       } else if (
//          exercise.category == "steganography"
//       ) {
//          navigate("/steganography");
//       } else if (
//          exercise.category == "taskWriting1" ||
//          exercise.category == "taskWriting2"
//       ) {
//          navigate(`/practice/writing?category=${exercise.category}`);
//       } else if (exercise.category == "readingTasks") {
//          navigate(`/practice/readingMock?category=${exercise.category}`);
//       } else if (exercise.category == "listeningTasks") {
//          navigate(`/practice/listeningMock?category=${exercise.category}`);
//       } else if (exercise.category == "speakingTasks") {
//          navigate(`/practice/speakingMock?category=${exercise.category}`);
//       }
//       {
//          console.log("hello");
//       }
//       window.scrollTo(0, 0);
//    };
    return(
        <>
            <Navbar />
                <div className="mt-20 font-['Montserrat']">
                <div className="text-center mt-16">
                    <p className="text-black-700 text-4xl font-bold">
                        Categories
                    </p>
                    <p className="text-violet-600 text-3xl mt-4">Tasks for each category</p>
                </div>
                {exercises.map((exercise) => (
               <div
                  key={exercise.id}
                  className="hoverShadow flex flex-wrap justify-between items-center mx-auto max-w-screen-xl font-['Montserrat'] h-32 border-[1px] rounded-md mb-6 mt-8 border-practiceBorderGray p-6 ss:p-8"
               >
                  <div className="flex flex-row gap-2 xs:gap-4 ss:gap-6">
                     <p className="text-violet-600 font-black text-5xl">
                        {exercise.date}
                     </p>

                     <div className="ml-4">
                        <p className="text-base ss:text-xl text-smrtBlack">
                           {exercise.title}
                        </p>
                        <p className="font-medium text-practiceGray">
                           {exercise.task}
                        </p>
                     </div>
                  </div>

                  <Link to={exercise.url}>
                     <button
                        className="hoverButton w-36 h-11 border-[1px] border-smrtBlue text-smrtBlue text-sm rounded-md"
                        onClick={() => handleButtonClick(exercise)}
                     >
                        Start 
                     </button>
                  </Link>
               </div>
            ))}
                </div>
            <Footer />
        </>
    )
}