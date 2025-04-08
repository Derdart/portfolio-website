import React from "react";

function MainPage() {
  const handleLoaded = (e) => {
    e.target.playbackRate = 0.5;
  };

  const links = document.querySelectorAll(".landingpagecontent a");
  links.forEach((link) => {
    link.addEventListener("mousemove", function (e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      this.style.setProperty("--x", `${x}px`);
      this.style.setProperty("--y", `${y}px`);
    });
  });

  const text = document.getElementById("scrollText");
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const newSize = Math.max(80, 40 + scrollY / 8);
    text.style.fontSize = newSize + "px";
  });

  return (
    <>
      <div className="landingpagecontent">
        <p>
          <b>I am</b>
        </p>
        <h1 id="scrollText">Filipp Landgraf</h1>
        <a href="#SecondPage">
          <span>Learn more</span>
        </a>
        <a href="#q">
          <span>Contact</span>
        </a>
      </div>
      <div class="backgroundvideo" id="bgVideo">
        <video
          autoPlay
          muted
          loop
          playsInline
          onLoadedMetadata={handleLoaded}
          src="./content/vecteezy_minimal-stars-motion-loop-background-for-project-overlay_2016656.mp4"
          type="video/mp4"
        ></video>
      </div>

      <div className="scrollindicator"></div>
    </>
  );
}

export default MainPage;
