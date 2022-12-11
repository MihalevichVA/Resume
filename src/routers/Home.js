import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Vlad</h2>
        <div className="prompt">
          <p>
            I am a student of BSU, I am fond of frontend. Looking for a Junior
            Developer position.
          </p>
          <EmailIcon />
          <GitHubIcon />
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>ReactJS, Redux, HTML, CSS, MaterialUI, TailwindCSS</span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>SQL</span>
          </li>
          <li className="item">
            <h2>Programming languages</h2>
            <span>JavaScript, C++, Java</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>English(A2)</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
