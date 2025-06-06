import React from "react";

const quizQuestions = [
  {
    id: 1,
    question: "MERN stands for?",
    options: [
      "MongoDB, Express, React, Node.js",
      "MySQL, Express, React, Node.js",
      "MongoDB, Express, Ruby, Node.js",
      "MySQL, Express, Ruby, Node.js"
    ],
    answer: 0,
  },
  {
    id: 2,
    question: "Which of the following is a NoSQL database?",
    options: [
      "MongoDB",
      "MySQL",
      "PostgreSQL",
      "SQLite"
    ],
    answer: 0,
  }
];

function Quiz() {
  const [selectedAnswers, setSelectedAnswers] = React.useState({});
  const [showResults, setShowResults] = React.useState(false);

  const handleOptionChange = (questionId, optionIndex) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: optionIndex
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowResults(true);
  };

  const calculateScore = () => {
    let score = 0;
    quizQuestions.forEach((question) => {
      if (selectedAnswers[question.id] === question.answer) {
        score++;
      }
    });
    return score;
  };

  return (
    <div style={{ width: "50%", margin: "auto", padding: "20px", border: "1px solid #ccc", borderRadius: "8px", backgroundColor: "#f9f9f9" }}>
      <h1>Interactive Quiz</h1>
      <form onSubmit={handleSubmit}>
        {quizQuestions.map((question) => (
          <div
            key={question.id}
            style={{
              marginBottom: "20px",
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "4px",
              backgroundColor: showResults
                ? selectedAnswers[question.id] === question.answer
                  ? "#d4edda"
                  : "#f8d7da"
                : "#fff"
            }}
          >
            <p style={{ fontWeight: "bold" }}>{question.question}</p>
            {question.options.map((option, index) => (
              <label
                key={index}
                style={{
                  display: "block",
                  cursor: "pointer",
                  marginBottom: "10px",
                  color: showResults
                    ? selectedAnswers[question.id] === index
                      ? index === question.answer
                        ? "#155724"
                        : "#721c24"
                      : "#000"
                    : "#000"
                }}
              >
                <input
                  type="radio"
                  name={`question-${question.id}`}
                  value={index}
                  checked={selectedAnswers[question.id] === index}
                  onChange={() => handleOptionChange(question.id, index)}
                  disabled={showResults}
                  style={{ marginRight: "10px" }}
                />
                {option}
              </label>
            ))}
          </div>
        ))}

        {!showResults && (
          <button
            type="submit"
            disabled={Object.keys(selectedAnswers).length < quizQuestions.length}
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer"
            }}
          >
            Submit
          </button>
        )}
      </form>

      {showResults && (
        <div style={{ marginTop: "20px" }}>
          <h2>Your Score: {calculateScore()}/{quizQuestions.length}</h2>
        </div>
      )}
    </div>
  );
}

export default Quiz;
