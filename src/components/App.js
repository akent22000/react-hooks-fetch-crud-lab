import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([]);

  // Add useEffect hook
  useEffect(() => {
    fetch('http://localhost:4000/questions')
      .then((r) => r.json())
      .then((questions) => setQuestions(questions))
  }, [])

  function handleAddItem(newItem) {
    setQuestions([...questions, newItem]);
  }

  function handleDeleteItem(deletedItem) {
    const updatedItems = questions.filter((question) => question.id !== deletedItem.id);
    setQuestions(updatedItems);
  }

  function handleUpdateItem(updatedItem) {
    const updatedItems = questions.map((question) => {
      if (question.id === updatedItem.id) {
        return updatedItem;
      } else {
        return question;
      }
    });
    setQuestions(updatedItems);
    console.log(updatedItems)

  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onAddItem={handleAddItem}
      /> :
        <QuestionList
          questions={questions}
          onDeleteItem={handleDeleteItem}
          onUpdateItem={handleUpdateItem} />}
    </main>
  );
}

export default App;



