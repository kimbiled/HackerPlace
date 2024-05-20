import React, { useState, useEffect } from 'react';
const ItemsComponent = () => {
    const [assignments, setAssignments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchItems = async () => {
        const url = "http://127.0.0.1:8000/api/assignments/modules/5/";
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
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Error: {error}</div>;
    }
  
    return (
      <div className="crypto-container">
        {assignments.length > 0 ? (
          assignments.map(assignment => (
            <div key={assignment.id} className="assignment">
              <h3>{assignment.title}</h3>
              <p>{assignment.description}</p>
              {assignment.image && <img src={assignment.image} alt={assignment.title} />}
              {assignment.video && <video src={assignment.video} controls />}
              <p><strong>Answer:</strong> {assignment.answer}</p>
              {assignment.hints.length > 0 && (
                <div className="hints">
                  <h4>Hints:</h4>
                  {assignment.hints.map(hint => (
                    <div key={hint.id} className="hint">
                      <p>{hint.text}</p>
                      {hint.image && <img src={hint.image} alt={`Hint ${hint.id}`} />}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))
        ) : (
          <p>No assignments available</p>
        )}
      </div>
    );
  };

export default ItemsComponent;
