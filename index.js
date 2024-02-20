import React from "react";
import ReactDOM from "react-dom";

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
  return <header>QuizApp</header>;
}

function Content() {
  function getResults(event) {
    event.preventDefault(); // prevent form submission
    let marks = 0;

    // Loop through each question
    for (let i = 1; i <= 10; i++) {
      let answer = event.target["q" + i].value;
      if (
        answer === "Java is OOPS" ||
        answer === "A.SQL IS STRUCTURE QUERY LANGUAGE" ||
        answer === "A.JS IS JAVASCRIPT" ||
        answer === "A.4" ||
        answer === "A.CHILD INHERTS PARENT" ||
        answer === "A.NO" ||
        answer === "B.UPDATE" ||
        answer === "A.UPDATE" ||
        answer === "A.SAVE THE TRANSCATION" ||
        answer === "A.LENGTH"
      ) {
        marks++;
      }
    }

    alert("Marks:" + marks);
  }

  return (
    <form onSubmit={getResults}>
      <div>
        <Question
          que="1. What is Java"
          op1="Java is OOPS"
          op2="B. JAVA IS SCRIPTING LANGUAGE"
          op3="C. JAVA IS AI"
          op4="D. JAVA IS MACHINE LEARNING"
          name="q1"
        />
        <br />
        <Question
          que="2. What is SQL"
          op1="A. SQL IS STRUCTURE QUERY LANGUAGE"
          op2="B. SQL IS OOPS"
          op3="C. SQL IS NO SQL"
          op4="D. SQL IS MANGODB"
          name="q2"
        />
        <br />
        <Question
          que="3. What is JS"
          op1="A. JS IS JAVASCRIPT"
          op2="B. JS IS QUERYSCRIPT"
          op3="C. PROGRAMMING LANGUAGE"
          op4="D. JS IS JAVA"
          name="q3"
        />
        <br />
        <Question
          que="4. WHAT IS SIZE OF ANY INT IN JAVA"
          op1="A. 4"
          op2="B. 2"
          op3="C. 1"
          op4="D. 8"
          name="q4"
        />
        <br />
        <Question
          que="5. What is INHERITANCE"
          op1="A. CHILD INHERITS PARENT"
          op2="B. PARENT INHERITS CHILD"
          op3="C. MULTIPLE CHILD INHERITS PARENT"
          op4="D. MULTIPLE CHILD INHERITS MULTIPLE PARENT"
          name="q5"
        />
        <br />
        <Question
          que="6. DO JAVA SUPPORTS MULTIPLY INHERITANCE"
          op1="A. YES"
          op2="B. NO"
          op3="C. SOMETIMES"
          op4="D. NONE OF THIS"
          name="q6"
        />
        <br />
        <Question
          que="7. WHICH KEYWORD IS USED TO MODIFY EXISTING DATA"
          op1="A. ALTER"
          op2="B. UPDATE"
          op3="C. MODIFY"
          op4="D. CHANGE"
          name="q7"
        />
        <br />
        <Question
          que="8. WHICH IS DML COMMAND"
          op1="A. UPDATE"
          op2="B. CREATE"
          op3="C. SELECT"
          op4="D. GRANT"
          name="q8"
        />
        <br />
        <Question
          que="9. What is COMMIT"
          op1="A. SAVE THE TRANSACTION"
          op2="B. NO SAVE THE TRANSACTION"
          op3="C. NO OPTION"
          op4="D. NONE OF THE ABOVE"
          name="q9"
        />
        <br />
        <Question
          que="10. What is KEYWORD IS USED TO CHECK LENGTH OF DATA IN SQL"
          op1="A. LENGTH"
          op2="B. SIZE"
          op3="C. DATA.LENGTH"
          op4="D. SIZE.LENGTH"
          name="q10"
        />
        <br />
      </div>
      <br />
      <br />
      <input type="submit" value="Submit Quiz" />
      <br />
      <br />
    </form>
  );
}

function Footer() {
  return <footer>Footer</footer>;
}

function Question(props) {
  return (
    <div>
      <h1>{props.que}</h1>
      <input type="radio" name={props.name} value="Java is OOPS" />
      <label>{props.op1}</label>
      <input
        type="radio"
        name={props.name}
        value="B. JAVA IS SCRIPTING LANGUAGE"
      />
      <label>{props.op2}</label>
      <input type="radio" name={props.name} value="C. JAVA IS AI" />
      <label>{props.op3}</label>
      <input
        type="radio"
        name={props.name}
        value="D. JAVA IS MACHINE LEARNING"
      />
      <label>{props.op4}</label>
    </div>
  );
}
