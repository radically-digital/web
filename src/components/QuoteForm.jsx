/* eslint-disable no-console */
import React, { useReducer, useState, useEffect } from "react"

import { questions } from "../pages/quote/questions"
import { FormSection } from "./QuoteFormSection"
import { hashFromString } from "../utils/hash-from-string"

export const ACTIONS = {
  ADD_RESPONSE: "ADD_RESPONSE",
}

export const initialState = {}

export const responseObject = (identifier, updatedResponse) => ({
  [hashFromString(identifier)]: updatedResponse,
})

export const complexStateReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_RESPONSE:
      return { ...state, ...action.payload }
    default:
      throw new Error()
  }
}

export const QuoteForm = () => {
  const [questionIndex, setQuestionIndex] = useState(0)
  const [submit, setSubmit] = useState(false)
  const [stateForm, dispatchFormAction] = useReducer(
    complexStateReducer,
    initialState
  )

  useEffect(() => {
    if (questionIndex === questions.length) {
      console.log("submit!", { stateForm })
      setSubmit(true)
    }
  }, [questionIndex])

  if (submit) {
    return <>Thanks!</>
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      {questions.map(
        (question, index) =>
          questionIndex >= index && (
            <FormSection
              key={question.question}
              outputState={(response) => {
                dispatchFormAction({
                  type: ACTIONS.ADD_RESPONSE,
                  payload: responseObject(question.question, {
                    response,
                    question: question.question,
                  }),
                })
                setQuestionIndex(index + 1)
              }}
              {...question}
            />
          )
      )}
    </form>
  )
}
