import React, { useState } from "react";

const questions = [
  {
    question: "Welche Gehirnregion steuert bewusste Bewegungen?",
    options: ["Kleinhirn", "Frontallappen", "Hippocampus", "Thalamus"],
    answer: 1,
  },
  {
    question: "Wo findet die Verarbeitung von Emotionen statt?",
    options: ["Hypothalamus", "Amygdala", "Hippocampus", "Thalamus"],
    answer: 1,
  },
];

function App() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (index) => {
    if (index === questions[current].answer) {
      setScore(score + 10);
    }
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setFinished(true);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>🧠 Gehirn Quiz</h1>
      {!finished ? (
        <div>
          <p>{questions[current].question}</p>
          {questions[current].options.map((opt, i) => (
            <button key={i} onClick={() => handleAnswer(i)} style={{ display: "block", margin: "8px 0" }}>
              {opt}
            </button>
          ))}
        </div>
      ) : (
        <div>
          <h2>Fertig! Dein Punktestand: {score}</h2>
        </div>
      )}
    </div>
  );
}

export default App;