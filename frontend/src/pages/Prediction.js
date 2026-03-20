
import React, { useState } from "react";
import axios from "axios";

function Prediction() {
  const [distance, setDistance] = useState("");
  const [temperature, setTemperature] = useState("");
  const [result, setResult] = useState(null);

  const handlePredict = async () => {
    try {
      const response = await axios.post("http://localhost:8000/api/v1/predict", {
        distance: Number(distance),
        temperature: Number(temperature),
      });

      setResult(response.data);
    } catch (error) {
  console.error("FULL ERROR:", error);
  alert("Error connecting to backend");
}
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Water Activity Prediction</h2>

      <input
        type="number"
        placeholder="Distance"
        value={distance}
        onChange={(e) => setDistance(e.target.value)}
      />
      <br /><br />

      <input
        type="number"
        placeholder="Temperature"
        value={temperature}
        onChange={(e) => setTemperature(e.target.value)}
      />
      <br /><br />

      <button onClick={handlePredict}>Predict</button>

      {result && (
        <div style={{ marginTop: "20px" }}>
          <h3>Prediction: {result.prediction}</h3>
          <h4>Confidence: {result.confidence}</h4>
        </div>
      )}
    </div>
  );
}

=======
import React, { useState } from "react";
import axios from "axios";

function Prediction() {
  const [distance, setDistance] = useState("");
  const [temperature, setTemperature] = useState("");
  const [result, setResult] = useState(null);

  const handlePredict = async () => {
    try {
      const response = await axios.post("http://localhost:8000/api/v1/predict", {
        distance: Number(distance),
        temperature: Number(temperature),
      });

      setResult(response.data);
    } catch (error) {
  console.error("FULL ERROR:", error);
  alert("Error connecting to backend");
}
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Water Activity Prediction</h2>

      <input
        type="number"
        placeholder="Distance"
        value={distance}
        onChange={(e) => setDistance(e.target.value)}
      />
      <br /><br />

      <input
        type="number"
        placeholder="Temperature"
        value={temperature}
        onChange={(e) => setTemperature(e.target.value)}
      />
      <br /><br />

      <button onClick={handlePredict}>Predict</button>

      {result && (
        <div style={{ marginTop: "20px" }}>
          <h3>Prediction: {result.prediction}</h3>
          <h4>Confidence: {result.confidence}</h4>
        </div>
      )}
    </div>
  );
}

>>>>>>> 1c8d98ff6cc0f09900797b78a673bdca2f038158
export default Prediction;   