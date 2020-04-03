/* eslint-disable no-console */
import React, { useState } from 'react';

// const CheckboxComponent = () => <p>Checkbox.</p>;
// const TextComponent = () => <p>Text.</p>;

// const typeMapping = {
//   checkbox: <CheckboxComponent />,
//   text: <TextComponent />,
// };

const QuoteForm = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentQuestion = questions[currentQuestionIndex];
  // const Component = () => typeMapping[currentQuestion.type];
  const [formState, setFormState] = useState({});

  return (
    <form
      onSubmit={e => {
        e.preventDefault() || console.log(formState);
      }}
    >
      <label>
        {currentQuestion.question}
        <input
          onChange={e => {
            setFormState({
              ...formState,
              [`question_${[currentQuestionIndex]}`]: e.target.value,
            });
          }}
        />

        <button
          onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}
        >
          Progress
        </button>
      </label>
      {/* <Component /> */}
    </form>
  );
};

export default QuoteForm;
