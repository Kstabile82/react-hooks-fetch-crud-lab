import React, { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((r) => r.json())
      // .then((page) => setPage(page))
      .then((qs) => setQuestions(qs))

  })
  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm questions={questions} setQuestions={setQuestions}/> : <QuestionList setQuestions={setQuestions} questions={questions}/>}
    </main>
  );
}

export default App;
