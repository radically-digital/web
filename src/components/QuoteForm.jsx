import React, { useState } from 'react';

const CheckboxComponent = () => <p>Checkbox.</p>;
const TextComponent = () => <p>Text.</p>;

const typeMapping = {
  checkbox: <CheckboxComponent />,
  text: <TextComponent />,
};

const QuoteForm = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [formState, setFormState] = useState({});
  const currentQuestion = questions[currentQuestionIndex];
  const Component = typeMapping[currentQuestion.type];

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
      <input type="submit" value="Submit" />
    </form>
  );
};

export default QuoteForm;
