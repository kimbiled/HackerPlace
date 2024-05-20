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
  const [hints, setHints] = useState([]);
  const [hintIndex, setHintIndex] = useState(0);

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
    const assignment = assignments.find(a => a.id === id);
    setHints(assignment.hints || []);
    setHintIndex(0);
  };

  const handleNextHint = () => {
    if (hintIndex < hints.length - 1) {
      setHintIndex(hintIndex + 1);
    }
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
                  {answers[currentAssignment.id] !== undefined ? (
                    answers[currentAssignment.id] ? (
                      <img src={correct} alt="correct" className="w-8 h-8" />
                    ) : (
                      <img src={uncorrect} alt="uncorrect" className="h-8 w-8" />
                    )
                  ) : null}
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
                {currentAssignment.file && (
                  <button
                    className="px-4 py-2 text-base font-semibold text-white bg-[#3651BF] rounded-lg shadow-md hover:bg-[#32439B] focus:outline-none focus:ring-2 focus:ring-[#547FDD] focus:ring-offset-2 focus:ring-offset-[#C7D9F6] mt-2"
                    onClick={() => handleDownload(currentAssignment.file)}
                  >
                    Download File
                  </button>
                )}
              </div>

              <div>
                {currentAssignment.image && <img src={currentAssignment.image} alt={currentAssignment.title} width={680} />}
                {currentAssignment.video && <video src={currentAssignment.video} controls />}
              </div>
              {hints.length > 0 && (
                <div className="hints mt-4">
                  <h4>Hints:</h4>
                  {hints.slice(0, hintIndex + 1).map((hint, index) => (
                    <div key={index} className="hint mb-2">
                      <p>{hint.text}</p>
                      {hint.image && <img src={hint.image} alt={`Hint ${index}`} />}
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
            <p>Please select an assignment to view details</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ItemsComponent;
