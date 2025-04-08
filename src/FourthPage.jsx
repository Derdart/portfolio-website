import React from "react";

function FourthPage() {
  return (
    <div className="FourthPage" id="FourthPage">
      <div className="fourthpagecontent">
        <h1>Portfolio.</h1>
        <p>This is a list of projects I have built.</p>
      </div>
      <div class="lens-background"></div>
      <div class="scroll-container">
        <div class="empty-item"></div>
        <a
          target="_blank"
          href="https://derdart.github.io/website1/"
          class="item"
        >
          <h1>Terminal</h1>
          <img src="content/terminal.png" alt="" />
        </a>
        <a class="item">
          <h1>Coming soon...</h1>
        </a>
        <a class="item">
          <h1>Coming soon...</h1>
        </a>
        <a class="item">
          <h1>Coming soon...</h1>
        </a>
        <a class="item">
          <h1>Coming soon...</h1>
        </a>
        <div class="empty-item"></div>
      </div>
    </div>
  );
}

export default FourthPage;
