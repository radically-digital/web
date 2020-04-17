/* eslint-disable no-console */
import React, { useState } from 'react';

const CheckboxComponent = () => <p>Checkbox.</p>;
const TextComponent = () => <p>Text.</p>;

const ButtonComponent = ({ options, question, handleChange }) => (
  <div>
    <p>{question}</p>
    {options.map(option => (
      <label key={option}>
        {option}
        <input onChange={handleChange(option)} value={option} type="radio" />
      </label>
    ))}
  </div>
);

const typeMapping = ({ options, question, handleChange }) => {
  return {
    checkbox: <CheckboxComponent />,
    text: <TextComponent />,
    button: (
      <ButtonComponent
        options={options}
        question={question}
        handleChange={handleChange}
      />
    ),
  };
};

const QuoteForm = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [formState, setFormState] = useState({});
  const currentQuestion = questions[currentQuestionIndex];

  const handleChange = value => e =>
    setFormState({ ...formState, [currentQuestionIndex]: value });

  const Component = typeMapping({
    handleChange,
    options: currentQuestion.options,
    question: currentQuestion.question,
  })[currentQuestion.type];

  console.log(Component);

  const handleSubmit = e => {
    e.preventDefault();
    const answersKeys = Object.keys(formState);
    if (!answersKeys.length) {
      return;
    }
    const fetchParams = {
      method: 'POST',
      body: JSON.stringify(formState),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    fetch(
      'https://1un8zjny3m.execute-api.us-east-1.amazonaws.com/dev/static-site-mailer',
      fetchParams
    ).then(res => {
      return res;
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {Component}
      <button onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}>
        Progress
      </button>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default QuoteForm;
