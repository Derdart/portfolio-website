import React from "react";

function SecondPage() {
  return (
    <div id="SecondPage" className="SecondPage">
      <div className="secondpagecontent">
        <h1>About.</h1>
        <p>
          I am a software engineer with a passion for creating innovative
          solutions. I have experience in various programming languages and
          frameworks, and I enjoy tackling complex challenges.
        </p>
      </div>
      <div className="aboutwindows">
        <div id="scrollImage" className="aboutwindow">
          <div className="windowscontent">
            <h2>Web development</h2>
            <p>
              I am proficient in JavaScript, React, Node.js, and Python. I also
              have experience with databases like MongoDB and PostgreSQL.
            </p>
          </div>
          <div className="img">
            <img src="./content/webdev.jpg" alt="" />
          </div>
        </div>
        <div className="smallwindows">
          <div id="scrollImage" className="aboutwindow1">
            <div className="windowscontent">
              <h2>Content creation</h2>
              <p>
                Video editing, VFX, color correction, sound design using After
                Effects and Premiere Pro.
              </p>
            </div>
            <div className="img">
              <img src="./content/video-editing.jpg" alt="" />
            </div>
          </div>
          <div id="scrollImage1" className="aboutwindow1">
            <div className="windowscontent">
              <h2>3D workshop</h2>
              <p>
                3D modelling, texturing, animation using Blender and Cinema 4D.
              </p>
            </div>
            <div className="img3">
              <img src="./content/3d.jpeg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondPage;
