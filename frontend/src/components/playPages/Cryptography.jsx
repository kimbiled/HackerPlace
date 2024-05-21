import React, { useState, useEffect, useContext } from 'react';
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { correct, uncorrect } from "../../assets/icons/index";
import AuthContext from '../../context/AutoContext';
const ItemsComponent = () => {
  const { authTokens, user } = useContext(AuthContext);
  const [currentAssignmentId, setCurrentAssignmentId] = useState(null);
  const [answers, setAnswers] = useState({});
  const [inputValues, setInputValues] = useState({});
  const [assignments, setAssignments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hints, setHints] = useState([]);
  const [hintIndex, setHintIndex] = useState(0);
  const [startTime, setStartTime] = useState(null);
  const [timeTaken, setTimeTaken] = useState({});
  const [showHints, setShowHints] = useState(false);

  useEffect(() => {
    const fetchItems = async () => {
      const url = "http://127.0.0.1:8000/api/assignments/modules/2/";
      try {
        const response = await fetch(url, {
          method: "GET",
          headers: { "Content-Type": "application/json" }
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setAssignments(data.assignments || []);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  const handleSubmit = async (e, assignmentId, correctAnswer) => {
    e.preventDefault();
    const userAnswer = inputValues[assignmentId];
    const isCorrect = userAnswer === correctAnswer;
    setAnswers(prevAnswers => ({ ...prevAnswers, [assignmentId]: isCorrect }));
    alert(isCorrect ? "Ответ правильный" : "Ответ неправильный");

    const currentTime = new Date();
    const timeDiff = Math.round((currentTime - startTime) / 1000);
    setTimeTaken(prevTimeTaken => ({ ...prevTimeTaken, [assignmentId]: timeDiff }));

    if (!authTokens || !authTokens.access) {
      setError("Нет авторизационного токена");
      return;
    }

    try {
      const url = `http://127.0.0.1:8000/api/assignments/user-assignments/${assignmentId}/submit/`;
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authTokens.access}`,
        },
        body: JSON.stringify({
          user_answer: userAnswer,
          time_taken: timeDiff,
        }),
      });
      const responseText = await response.text();
      console.log('Response text:', responseText);
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${responseText}`);
      }
      const data = JSON.parse(responseText);
      console.log('Response data:', data);
    } catch (error) {
      setError(error.message);
      console.error("Ошибка при отправке данных на сервер:", error);
    }
  };

  const handleSubmit2 = async (e, assignmentId, correctAnswer) => {
    e.preventDefault();
    const userAnswer = inputValues[assignmentId];
    const isCorrect = userAnswer === correctAnswer;
    setAnswers(prevAnswers => ({ ...prevAnswers, [assignmentId]: isCorrect }));
    alert(isCorrect ? "Ответ правильный" : "Ответ неправильный");

    const currentTime = new Date();
    const timeDiff = Math.round((currentTime - startTime) / 1000);
    setTimeTaken(prevTimeTaken => ({ ...prevTimeTaken, [assignmentId]: timeDiff }));
  };

  const handleChange = (e, id) => {
    setInputValues({ ...inputValues, [id]: e.target.value });
  };

  const handleAssignmentClick = (id) => {
    setCurrentAssignmentId(id);
    const assignment = assignments.find(a => a.id === id);
    setHints(assignment.hints || []);
    setHintIndex(0);
    setStartTime(new Date());
    setShowHints(false);
  };

  const handleNextHint = () => {
    if (hintIndex < hints.length - 1) {
      setHintIndex(hintIndex + 1);
    }
  };

  const handleShowHints = () => {
    setShowHints(true);
  };

  const handleDownload = async (fileUrl) => {
    try {
      const response = await fetch(fileUrl);
      if (!response.ok) {
        throw new Error('Ошибка при загрузке файла');
      }
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.download = fileUrl.split('/').pop();
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      alert('Не удалось скачать файл');
    }
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
          <h2 className='text-xl font-medium mb-6'>Assignments</h2>
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
        <div className="w-3/4 border-black border-opacity-10 border-[1px] rounded-3xl shadow-xl h-auto">
          {currentAssignment ? (
            <div className="assignment flex flex-col mb-16 w-full p-8">
              <div className='flex flex-col gap-3'>
                <div className="flex flex-row justify-between">
                  <h3 className="text-2xl font-medium">{currentAssignment.title}</h3>
                  {answers[currentAssignment.id] !== undefined && (
                    <img src={answers[currentAssignment.id] ? correct : uncorrect} alt={answers[currentAssignment.id] ? "correct" : "uncorrect"} className="w-8 h-8" />
                  )}
                </div>
                <p>{currentAssignment.description}</p>
                <input
                  type="text"
                  className="border rounded-lg p-1 px-2"
                  value={inputValues[currentAssignment.id] || ''}
                  onChange={e => handleChange(e, currentAssignment.id)}
                />
                <div className='flex flex-row justify-between w-full'>
                  <div className='flex flex-row gap-8'> 
                  {user ? (
                    <button
                      className="px-4 py-2 text-base font-semibold text-white bg-[#3651BF] rounded-lg shadow-md hover:bg-[#32439B] focus:outline-none focus:ring-2 focus:ring-[#547FDD] focus:ring-offset-2 focus:ring-offset-[#C7D9F6] mt-2"
                      type="submit"
                      onClick={e => handleSubmit(e, currentAssignment.id, currentAssignment.answer)}
                    >
                      Submit
                    </button>
                  ) : (
                    <button
                      className="px-4 py-2 text-base font-semibold text-white bg-[#3651BF] rounded-lg shadow-md hover:bg-[#32439B] focus:outline-none focus:ring-2 focus:ring-[#547FDD] focus:ring-offset-2 focus:ring-offset-[#C7D9F6] mt-2"
                      type="submit"
                      onClick={e => handleSubmit2(e, currentAssignment.id, currentAssignment.answer)}
                    >
                      Submit
                    </button>
                  )}
                  {currentAssignment.file && (
                    <button
                      className="px-4 py-2 h-12 text-base font-semibold text-white bg-[#3651BF] rounded-lg shadow-md hover:bg-[#32439B] focus:outline-none focus:ring-2 focus:ring-[#547FDD] focus:ring-offset-2 focus:ring-offset-[#C7D9F6] mt-2"
                      onClick={() => handleDownload(currentAssignment.file)}
                    >
                      Download File
                    </button>
                  )}
                  </div>
                  <div> 
                  {!showHints && (
                                    <button
                                      className="px-4 h-12 w-48 py-2 text-base font-semibold text-white rounded-lg shadow-md mt-2 bg-[#3651BF] hover:bg-[#32439B] focus:outline-none focus:ring-2 focus:ring-[#547FDD] focus:ring-offset-2 focus:ring-offset-[#C7D9F6]"
                                      onClick={handleShowHints}
                                    >
                                      Show Hints
                                    </button>
                                  )}
                  </div>
                </div>
                {answers[currentAssignment.id] && timeTaken[currentAssignment.id] !== undefined && (
                  <div className='mt-4'>
                    <p>Time taken: {timeTaken[currentAssignment.id]} seconds</p>
                  </div>
                )}
              </div>

              <div className='mt-8 w-full flex flex-col items-center justify-center'>
                {currentAssignment.image && <img src={currentAssignment.image} alt={currentAssignment.title} className='w-auto h-auto rounded-2xl' />}
                {currentAssignment.video && <video src={currentAssignment.video} controls />}
              </div>


              {showHints && hints.length > 0 && (
                <div className="hints mt-4">
                  {hints.slice(0, hintIndex + 1).map((hint, index) => (
                    <div key={index} className="hint mb-8">
                      <p className='mb-8'>{hint.text}</p>
                      <div className='flex flex-col justify-center items-center'>
                        {hint.image && <img src={hint.image} alt={`Hint ${index}`}/>}
                      </div>
                    </div>
                  ))}
                  <button
                    className={`px-4 py-2 text-base font-semibold text-white rounded-lg shadow-md mt-2 ${hintIndex >= hints.length - 1 ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#3651BF] hover:bg-[#32439B] focus:outline-none focus:ring-2 focus:ring-[#547FDD] focus:ring-offset-2 focus:ring-offset-[#C7D9F6]'}`}
                    onClick={handleNextHint}
                    disabled={hintIndex >= hints.length - 1}
                  >
                    Next hint
                  </button>
                </div>
              )}
            </div>
          ) : (
            <p className='flex flex-row justify-center items-center h-[800px]'>Please select an assignment to view details</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ItemsComponent;
