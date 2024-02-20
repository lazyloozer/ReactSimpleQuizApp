import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div>
    <Header />
    <Content />
    <Footer />
  </div>
);

function Header() {
  return <header> Quiz App</header>;
}
function Content() {
  return (
    <form id="form">
      <div>
        <Question
          que="What is Java"
          op1="A. JAVA OOPS"
          op2="B. JAVA is OOFS"
          op3="B. JAVA is OOFS"
          op4="B. JAVA is OOFS"
          name="q1"
        />
        <br></br>
        <Question
          que="What is SQL"
          op1="A. SQL IS SQL"
          op2="B. SQL IS MQL"
          op3="B. SQL IS MQL"
          op4="B. SQL IS MQL"
          name="q2"
        />
        <Question
          que="What is CSS"
          op1="A. CSS IS SQL"
          op2="B. CSS IS MQL"
          op3="C. CSS IS MQL"
          op4="D. CSS IS MQL"
          name="q3"
        />
        <Question
          que="What is JS"
          op1="A. JS IS JS"
          op2="B. JS IS MQL"
          op3="C. JS IS MQL"
          op4="D. JS IS MQL"
          name="q4"
        />
      </div>
      <br />
      <br />
      <input type="submit" value="Submit Quiz"></input>
      <br />
      <br />
    </form>
  );
}
function Footer() {
  return <footer>footer</footer>;
}
function Question(props) {
  return (
    <div>
      <h1>{props.que}</h1>
      <input type="radio" name={props.name} value=""></input>
      <label>{props.op1}</label>
      <input type="radio" name={props.name} value=""></input>
      <label>{props.op2}</label>
      <input type="radio" name={props.name} value=""></input>
      <label>{props.op3}</label>
      <input type="radio" name={props.name} value=""></input>
      <label>{props.op4}</label>
    </div>
  );
}
