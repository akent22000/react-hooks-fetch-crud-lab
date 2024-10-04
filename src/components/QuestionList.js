import React, { useState, useEffect } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, onAddItem, onDeleteItem, onUpdateItem }) {

  const displayQuestions =
    questions.map((question) => (
      <QuestionItem
        key={question.id}
        question={question}
        onAddItem={onAddItem}
        onDeleteItem={onDeleteItem}
        onUpdateItem={onUpdateItem}
      />
    ))

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {displayQuestions}
      </ul>

    </section>
  );

}

export default QuestionList;

