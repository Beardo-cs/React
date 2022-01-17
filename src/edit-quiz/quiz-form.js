import { useState } from "react";
import { Form, SelectInput, TextInput } from "./form-components";
import "./quiz-form.css";

const difficultyOptions = [
  { value: "easy", label: "Easy" },
  { value: "medium", label: "Medium" },
  { value: "hard", label: "Hard" },
];

function QuizForm({ initialData = {}, onSave, onDelete, isSaving }) {
  const [formValues, setFormValues] = useState({
    title: initialData.title ?? "",
    description: initialData.description ?? "",
    difficulty: initialData.difficulty ?? "easy",
    question: initialData.question ?? "",
    correctanswer: initialData.correctanswer ?? "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    onSave(formValues);
  };

  const onTitleChange = (e) => {
    setFormValues((prev) => {
      return { ...prev, title: e.target.value };
    });
  };
  // const onDescriptionChange = (e) =>
  //   setFormValues((prev) => ({ ...prev, description: e.target.value }));
  // const onDifficultyChange = (e) =>
  //   setFormValues((prev) => ({ ...prev, difficulty: e.target.value }));
  //   const onQuestionChange = (e) =>
  //   setFormValues((prev) => ({ ...prev, question : e.target.value }));
  //   const onCorrectAnswerChange = (e) =>
  //   setFormValues((prev) => ({ ...prev, correctAnswer : e.target.value }));
  //   const onInCorrectAnswerChange = (e) =>
  //   setFormValues((prev) => ({ ...prev, incorrectAnswer : e.target.value }));

  return (
    <Form onSubmit={onSubmit} disabled={isSaving}>
      <h2>Quiz Info</h2>
      <TextInput label="Title" name="title" value={formValues.title} onChange={onTitleChange} />
      <TextInput
        label="Description"
        name="description"
        value={formValues.description}
        onChange={onDescriptionChange}
      />
      <SelectInput
        label="Difficulty"
        name="difficulty"
        options={difficultyOptions}
        value={formValues.difficulty}
        onChange={onDifficultyChange}
      />
      <h2>Questions</h2>
      <p>TODO!</p>
      <TextInput
        label="Question"
        name="Question"
        value={formValues.question}
        onChange={onQuestionChange}
      />
      
      <TextInput
        label="CorrectAnswer"
        name="CorrectAnswer"
        value={formValues.correctAnswer}
        onChange={onCorrectAnswerChange}
      />
      <TextInput
        label="InCorrectAnswer"
        name="InCorrectAnswer"
        value={formValues.InCorrectAnswer}
        onChange={onInCorrectAnswerChange}
      />
      <TextInput
        label="InCorrectAnswer"
        name="InCorrectAnswer"
        value={formValues.InCorrectAnswer}
        onChange={onInCorrectAnswerChange}
      />
      <TextInput
        label="InCorrectAnswer"
        name="InCorrectAnswer"
        value={formValues.InCorrectAnswer}
        onChange={onInCorrectAnswerChange}
      />
      <div className="quiz-form__buttons">
      <button type="submit">Add Questions</button>
        <button type="submit">Save Quiz</button>
        <button type="button" onClick={onDelete}>
          Delete Quiz
        </button>
      </div>
      
    </Form>
  );
}

export default QuizForm;
