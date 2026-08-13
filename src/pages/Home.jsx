import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">

      <div className="hero">
        <div>
          <h1>Urine Test Strip Reader</h1>

          <p>
            An AI-based system for automated urine strip
            analysis and digital report generation.
          </p>

          <button>Start Test</button>
        </div>

        <div className="box">
          <h2>🧪</h2>
          <h3>System Ready</h3>
          <p>Place your test strip to begin.</p>
        </div>
      </div>


      <div className="how">
        <h2>How It Works</h2>

        <div className="steps">

          <div>
            <h3>1. Place Strip</h3>
            <p>Place the strip inside the device.</p>
          </div>

          <div>
            <h3>2. Wait</h3>
            <p>Wait for 120 seconds.</p>
          </div>

          <div>
            <h3>3. Analyze</h3>
            <p>The camera analyzes the strip.</p>
          </div>

          <div>
            <h3>4. Results</h3>
            <p>Get your digital report.</p>
          </div>

        </div>
      </div>

    </div>
  );
}

export default Home;