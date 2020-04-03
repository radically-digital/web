import React, { useState } from 'react';

const CheckboxComponent = () => <p>Checkbox.</p>;
const TextComponent = () => <p>Text.</p>;

const typeMapping = {
  checkbox: <CheckboxComponent/>,
  text: <TextComponent/>
};

const QuoteForm = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentQuestion = questions[currentQuestionIndex];
  const Component = () => typeMapping[currentQuestion.type];
  return (
    <form>
      <input>
      </input>
      <Component/>
    </form>
  );
};

export default QuoteForm;
