import React, { useState } from "react";
import "./App.css";

function App() {
  const [candidates, setCandidates] = useState([
    { name: "Alice", votes: 0 },
    { name: "Bob", votes: 0 },
    { name: "Charlie", votes: 0 },
  ]);

  const handleVote = (index) => {
    const newCandidates = [...candidates];
    newCandidates[index].votes += 1;
    setCandidates(newCandidates);
  };

  return (
    <div className="App">
      <h1>🗳 Voting Application</h1>
      {candidates.map((candidate, index) => (
        <div key={index} className="candidate">
          <h2>{candidate.name}</h2>
          <p>Votes: {candidate.votes}</p>
          <button onClick={() => handleVote(index)}>Vote</button>
        </div>
      ))}
    </div>
  );
}

export default App;
