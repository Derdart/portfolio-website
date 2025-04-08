import React from "react";

function Header() {
  return (
    <>
      <div className="header">
        <ul>
          <a href="#bgVideo">
            <li>
              <img src="./content/logo.png" alt="" />
            </li>
          </a>
          <a href="#SecondPage">
            <li>About</li>
          </a>
          <a href="#scrollImage1">
            <li>Tech</li>
          </a>
          <a href="#FourthPage">
            <li>Works</li>
          </a>
          <a href="#q">
            <li>Contact</li>
          </a>
        </ul>
      </div>
    </>
  );
}

export default Header;
