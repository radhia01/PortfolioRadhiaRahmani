import React from "react";
import "./style.css";
function Home() {
  return (
    <section className="homepage" id="home">
      <div className="">
        <p className="hello">Hello!</p>
        <p className="paragraph1"> I'm Radhia Rahmani </p>
        <br></br>
        <p className="paragraph2">
          A FullStackJs Developer Based on <span>ReactJs</span> and{" "}
          <span>Nodejs</span>
        </p>
      </div>
    </section>
  );
}

export default Home;
