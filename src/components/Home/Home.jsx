import React from "react";
import "./Home.css";
import PlusSign from "./PlusSign";


function Home() {
    

  return (
    <>
      <div className="home-container">
        <div className="plusSign-container">
          <PlusSign />
        </div>
        <div className="h1-container">
          <h1
            className="trinidad-text"
          >
            I am Trinidad
          </h1>
        </div>

      </div>

    
    </>
  );

}

export default Home