import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about">

      <div className="about-header">
        <h1>About the Project</h1>

        <p>
          A smart system for automated urine test strip analysis.
        </p>
      </div>


      <div className="about-content">

        <div>
          <h2>The Problem</h2>

          <p>
            Traditional urine strips are read by comparing
            colours with a printed colour chart. This can
            result in differences in visual interpretation.
          </p>
        </div>


        <div>
          <h2>Our Solution</h2>

          <p>
            Our system uses a camera, controlled lighting,
            computer vision and machine learning to analyze
            the strip automatically.
          </p>
        </div>

      </div>


      <div className="technology">

        <h2>Technology Used</h2>

        <p>Raspberry Pi</p>
        <p>Camera</p>
        <p>Computer Vision</p>
        <p>Machine Learning</p>

      </div>

    </div>
  );
}

export default About;