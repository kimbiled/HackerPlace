
// import { correct, uncorrect } from "../../assets/icons"
// import { useState } from "react"

// export default function osint() {
//   const [correctAns, setCorrectAns] = useState(false);
//   const [answer, setAnswer] = useState("");
//   const [showHints, setShowHints] = useState(false);
//   const [click, setClick] = useState(0);
//   const [disable, setDisable] = useState(false)
//   const counter = () => {
//     if (click === hints.length - 1) {
//       setDisable(true);
//     } else {
//       setClick(prevClick => prevClick + 1);
//     }
//   };
//   const setAble = () => {
//     setShowHints(true)
//   }

//   const hints = [
//     {
//       id:1,
//       exerciseNum:1,
//       desc:"You must have Маяковская"
//     },
//     {
//       id:2,
//       exerciseNum:1,
//       desc:"You must have Маяковская and num"
//     },
//     {
//       id:3,
//       exerciseNum:1,
//       desc:"You must have Маяковская and num even"
//     },
//     {
//       id:4,
//       exerciseNum:1,
//       desc:"You must have Маяковская 30 + 1"
//     }

//   ]
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(answer)
//     if (answer == "Маяковская 31") {
//       setCorrectAns(true)
//       alert("Ответ правильный")
//     }
//     else {
//       alert("Ответ неправильный")
//     }
//   }

//   const getItems = async (email, password) => {
//     let url = "http://127.0.0.1:8000/api/assignments/modules/2/"
//     const response = await fetch(url,{
//         method: "GET",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({email, password})
//     })
//     const data = await response.json()
//     console.log(data)
// }

//     return(
//         <>
//             <Navbar />
//             {/* <section>
//                 <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
//                     {correctAns? (<img src={correct} alt="correct" />) : (<img src={uncorrect} alt="uncorrect" />)}
                    
//                     {showHints? (<>
//                       <span>{hints[click].desc}</span>
//                       <button  className={`border w-96 ${disable ? 'bg-gray-400' : 'bg-blue-500'}`} onClick={counter}>Next hint</button>
                    
//                     </>) : ( <button onClick={setAble}>SHOW HINTS</button>)}
//                 </div>
//                 <div className="flex justify-center min-h-screen items-center py-3 px-2">
//       <div className="bg-white flex flex-col gap-3 sm:flex-row items-center justify-around py-5 drop-shadow-lg rounded-lg max-w-5xl w-full px-5">
//         <div className="max-w-lg flex justify-center flex-col gap-3">
//           <h2 className="text-2xl lg:text-4xl  font-bold text-start">
//             Let&apos; bring your dream to real
//           </h2>
//           <p className="text-base md:text-lg text-gray-500">
//             Are looking for going fast in your business?
//             <br /> Send your mail address we will contact you soon.&quot;
//           </p>
//           <div className="flex flex-col sm:flex-row gap-5 max-w-md">
//             <input
//               type="text"
//               className=" rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#3651BF] focus:border-transparent"
//               placeholder="Email"
//               onChange={e => setAnswer(e.target.value)}
//             />
//             <button
//               className="px-4 py-2 text-base font-semibold text-white bg-[#3651BF] rounded-lg shadow-md hover:bg-[#32439B] focus:outline-none focus:ring-2 focus:ring-[#547FDD] focus:ring-offset-2 focus:ring-offset-[#C7D9F6]"
//               type="submit"
//               onClick={handleSubmit}
//             >
//               Subscribe
//             </button>
//           </div>
//         </div>
//         <div className="flex items-center justify-center sm:justify-end max-w-xs w-full">
//           <img
//             src="https://www.tailwindtap.com/assets/components/subscription-cta/jar.jpg"
//             alt="flower image"
//             className="rounded-md object-cover"
//           />
//         </div>
//       </div>
//     </div>
//             </section>
//              */}

//              http://127.0.0.1:8000/api/assignments/modules/1/assignments/1/
//             <Footer />
//         </>
//     )
// }

// import Navbar from "../Navbar/Navbar"
// import Footer from "../Footer/Footer"
// import { correct, uncorrect } from "../../assets/icons"
// import React, { useState, useEffect } from 'react';
// const ItemsComponent = () => {
//     const [correctAns, setCorrectAns] = useState(false);
//     const [answer, setAnswer] = useState("");
//     const [assignments, setAssignments] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
    
//     const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(answer)
//     if (answer == "Маяковская 31") {
//       setCorrectAns(true)
//       alert("Ответ правильный")
//     }
//     else {
//       alert("Ответ неправильный")
//     }
//   }
//     useEffect(() => {
//       const fetchItems = async () => {
//         const url = "http://127.0.0.1:8000/api/assignments/modules/4/";
//         try {
//           const response = await fetch(url, {
//             method: "GET",
//             headers: { "Content-Type": "application/json" }
//           });
//           if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//           }
//           const data = await response.json();
//           setAssignments(data.assignments || []); // Убедитесь, что данные являются массивом
//         } catch (error) {
//           setError(error.message);
//         } finally {
//           setLoading(false);
//         }
//       };
  
//       fetchItems();
//     }, []);
  
//     if (loading) {
//       return <div>Loading...</div>;
//     }
  
//     if (error) {
//       return <div>Error: {error}</div>;
//     }
  
//     return (
//        <>
//         <Navbar />
//             <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl font-['Montserrat'] mt-16">
//                 {assignments.length > 0 ? (
//                 assignments.map(assignment => (
//                     <div key={assignment.id} className="assignment flex flex-row mb-16 justify-between w-full">
//                         <div>
//                             <div className="flex flex-row justify-between"> 
//                                 <h3 className="text-2xl font-medium">{assignment.title}</h3>
//                                 {correctAns? (<img src={correct} alt="correct" className="w-8 h-8"/>) : (<img src={uncorrect} alt="uncorrect" className="h-8 w-8"/>)}
//                             </div>
//                             <p>{assignment.description}</p>
//                             <input type="text" className="border" onChange={e => setAnswer(e.target.value)}></input>
//                             <button
//                                className="px-4 py-2 text-base font-semibold text-white bg-[#3651BF] rounded-lg shadow-md hover:bg-[#32439B] focus:outline-none focus:ring-2 focus:ring-[#547FDD] focus:ring-offset-2 focus:ring-offset-[#C7D9F6]"
//                                type="submit"
//                                onClick={handleSubmit}
//                              >
//                                Subscribe
//                              </button>
//                             <p><strong>Answer:</strong> {assignment.answer}</p>
//                         </div>

//                         <div>
//                             {assignment.image && <img src={assignment.image} alt={assignment.title} width={680}/>}
//                             {assignment.video && <video src={assignment.video} controls />}
//                         </div>
//                         {assignment.hints.length > 0 && (
//                             <div className="hints">
//                             <h4>Hints:</h4>
//                             {assignment.hints.map(hint => (
//                                 <div key={hint.id} className="hint">
//                                 <p>{hint.text}</p>
//                                 {hint.image && <img src={hint.image} alt={`Hint ${hint.id}`} />}
//                                 </div>
//                             ))}
//                             </div>
//                         )}
//                     </div>
//                 ))
//                 ) : (
//                 <p>No assignments available</p>
//                 )}
//             </div>
//         <Footer />
//        </>
//     );
//   };

// export default ItemsComponent;



import React, { useState, useEffect } from 'react';
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { correct, uncorrect } from "../../assets/icons";

const ItemsComponent = () => {
  const [currentAssignmentId, setCurrentAssignmentId] = useState(null);
  const [answers, setAnswers] = useState({});
  const [inputValues, setInputValues] = useState({});
  const [assignments, setAssignments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      const url = "http://127.0.0.1:8000/api/assignments/modules/4/";
      try {
        const response = await fetch(url, {
          method: "GET",
          headers: { "Content-Type": "application/json" }
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setAssignments(data.assignments || []); // Убедитесь, что данные являются массивом
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  const handleSubmit = (e, id, correctAnswer) => {
    e.preventDefault();
    const userAnswer = inputValues[id];
    if (userAnswer === correctAnswer) {
      setAnswers(prevAnswers => ({ ...prevAnswers, [id]: true }));
      alert("Ответ правильный");
    } else {
      setAnswers(prevAnswers => ({ ...prevAnswers, [id]: false }));
      alert("Ответ неправильный");
    }
  };

  const handleChange = (e, id) => {
    setInputValues({ ...inputValues, [id]: e.target.value });
  };

  const handleAssignmentClick = (id) => {
    setCurrentAssignmentId(id);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const currentAssignment = assignments.find(assignment => assignment.id === currentAssignmentId);

  return (
    <>
      <Navbar />
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl font-['Montserrat'] mt-16">
        <div className="w-1/4">
          <h2>Assignments</h2>
          {assignments.map(assignment => (
            <button
              key={assignment.id}
              className="block px-4 py-2 text-base font-semibold text-white bg-[#3651BF] rounded-lg shadow-md hover:bg-[#32439B] focus:outline-none focus:ring-2 focus:ring-[#547FDD] focus:ring-offset-2 focus:ring-offset-[#C7D9F6] mb-2"
              onClick={() => handleAssignmentClick(assignment.id)}
            >
              {assignment.title}
            </button>
          ))}
        </div>
        <div className="w-3/4">
          {currentAssignment ? (
            <div className="assignment flex flex-col mb-16 w-full">
              <div>
                <div className="flex flex-row justify-between">
                  <h3 className="text-2xl font-medium">{currentAssignment.title}</h3>
                  {answers[currentAssignment.id] ? (
                    <img src={correct} alt="correct" className="w-8 h-8" />
                  ) : (
                    <img src={uncorrect} alt="uncorrect" className="h-8 w-8" />
                  )}
                </div>
                <p>{currentAssignment.description}</p>
                <input
                  type="text"
                  className="border"
                  value={inputValues[currentAssignment.id] || ''}
                  onChange={e => handleChange(e, currentAssignment.id)}
                />
                <button
                  className="px-4 py-2 text-base font-semibold text-white bg-[#3651BF] rounded-lg shadow-md hover:bg-[#32439B] focus:outline-none focus:ring-2 focus:ring-[#547FDD] focus:ring-offset-2 focus:ring-offset-[#C7D9F6] mt-2"
                  type="submit"
                  onClick={e => handleSubmit(e, currentAssignment.id, currentAssignment.answer)}
                >
                  Submit
                </button>
                <p><strong>Answer:</strong> {currentAssignment.answer}</p>
              </div>

              <div>
                {currentAssignment.image && <img src={currentAssignment.image} alt={currentAssignment.title} width={680} />}
                {currentAssignment.video && <video src={currentAssignment.video} controls />}
              </div>
              {currentAssignment.hints.length > 0 && (
                <div className="hints">
                  <h4>Hints:</h4>
                  {currentAssignment.hints.map(hint => (
                    <div key={hint.id} className="hint">
                      <p>{hint.text}</p>
                      {hint.image && <img src={hint.image} alt={`Hint ${hint.id}`} />}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <p>Please select an assignment to view details</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ItemsComponent;
