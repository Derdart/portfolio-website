import React from "react";

function ThirdPage() {
  return (
    <>
      <div className="ThirdPage" id="ThirdPage">
        <div className="thirdpagecontent">
          <h1>Technologies.</h1>
          <p>This is a list of technologies I have worked with.</p>
          <ul>
            <li>
              <a
                target="_blank"
                href="https://developer.mozilla.org/en-US/docs/Web/HTML"
              >
                <img className="techicon" src="./content/html.png" alt="" />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://developer.mozilla.org/en-US/docs/Web/CSS"
              >
                <img className="techicon" src="./content/css.png" alt="" />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              >
                <img className="techicon" src="./content/js.png" alt="" />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://react.dev/">
                <img className="techicon" src="./content/react.png" alt="" />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://tailwindcss.com/">
                <img className="techicon" src="./content/tailwind.png" alt="" />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://nodejs.org/en">
                <img className="techicon" src="./content/node.png" alt="" />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.figma.com/">
                <img className="techicon" src="./content/figma.png" alt="" />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://git-scm.com/">
                <img className="techicon" src="./content/git.png" alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <video
        autoPlay
        muted
        loop
        playsInline
        id="video2"
        src="./content/portfolio.mp4"
      ></video>
    </>
  );
}

export default ThirdPage;
