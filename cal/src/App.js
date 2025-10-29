import { useState } from "react";

function App() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleEquals = () => {
    try {
      // Evaluate the input expression safely
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <div style={styles.container}>
      <h2>React Calculator</h2>
      <input style={styles.input} type="text" value={input} readOnly />
      <div style={styles.buttonGrid}>
        {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+"].map(
          (val) => (
            <button
              key={val}
              style={styles.button}
              onClick={() =>
                val === "=" ? handleEquals() : handleClick(val)
              }
            >
              {val}
            </button>
          )
        )}
        <button style={styles.clearButton} onClick={handleClear}>
          C
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: "260px",
    margin: "50px auto",
    padding: "20px",
    border: "2px solid #ccc",
    borderRadius: "10px",
    textAlign: "center",
    backgroundColor: "#f9f9f9",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
  },
  input: {
    width: "100%",
    height: "40px",
    fontSize: "18px",
    marginBottom: "10px",
    textAlign: "right",
    padding: "5px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  buttonGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "10px",
  },
  button: {
    padding: "15px",
    fontSize: "18px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#007bff",
    color: "white",
    cursor: "pointer",
  },
  clearButton: {
    gridColumn: "span 4",
    padding: "10px",
    fontSize: "18px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#dc3545",
    color: "white",
    cursor: "pointer",
  },
};

export default App;
