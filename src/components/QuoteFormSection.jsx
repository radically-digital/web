import React, { useReducer, useState, useEffect } from "react"
import PropTypes from "prop-types"

import QUESTION_TYPES from "../pages/quote/QUESTION_TYPES.json"
import { hashFromString } from "../utils/hash-from-string"
import {
  complexStateReducer,
  initialState,
  ACTIONS,
  responseObject,
} from "./QuoteForm"

const ButtonNextQuestion = ({ outputState, questionState }) => (
  <button
    onClick={() => {
      outputState(questionState)
    }}
  >
    Next
  </button>
)

export const FormSection = ({ question, options, type, outputState }) => {
  const [questionState, setQuestionState] = useState("")

  if (type === QUESTION_TYPES.CHECKBOX) {
    const [stateCheckBoxGroup, dispatchCheckBoxGroupAction] = useReducer(
      complexStateReducer,
      initialState
    )

    useEffect(() => {
      setQuestionState(
        Object.values(stateCheckBoxGroup)
          .filter((option) => option.checked)
          .map(({ option }) => option)
      )
    }, [stateCheckBoxGroup])

    return (
      <fieldset>
        <legend>{question}</legend>
        {options.map((option) => (
          <label key={option}>
            {option}
            <input
              type="checkbox"
              name={option}
              value={
                stateCheckBoxGroup[hashFromString(option)] &&
                stateCheckBoxGroup[hashFromString(option)].checked
              }
              onChange={(e) => {
                dispatchCheckBoxGroupAction({
                  type: ACTIONS.ADD_RESPONSE,
                  payload: responseObject(option, {
                    option,
                    checked: e.target.checked,
                  }),
                })
              }}
            />
          </label>
        ))}
        <ButtonNextQuestion
          outputState={outputState}
          questionState={questionState}
        />
      </fieldset>
    )
  }

  if (type === QUESTION_TYPES.RADIO) {
    return (
      <fieldset>
        <legend>{question}</legend>
        {options.map((option) => (
          <label key={option}>
            {option}
            <input
              type="radio"
              name={question}
              value={option}
              onClick={() => {
                outputState(option)
              }}
            />
          </label>
        ))}
      </fieldset>
    )
  }

  if (type === QUESTION_TYPES.EMAIL) {
    return (
      <fieldset>
        <legend>{question}</legend>
        <label>
          Your email
          <input
            type="email"
            value={questionState}
            onChange={(e) => {
              setQuestionState(e.target.value)
            }}
          />
        </label>
        <ButtonNextQuestion
          outputState={outputState}
          questionState={questionState}
        />
      </fieldset>
    )
  }

  return (
    <fieldset>
      <legend>{question}</legend>
      <label>
        <input
          value={questionState}
          onChange={(e) => {
            setQuestionState(e.target.value)
          }}
        />
      </label>
      <ButtonNextQuestion
        outputState={outputState}
        questionState={questionState}
      />
    </fieldset>
  )
}

FormSection.propTypes = {
  question: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  outputState: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string),
}
