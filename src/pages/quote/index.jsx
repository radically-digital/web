/* eslint-disable no-console */
import React, { useReducer, useState, useEffect } from "react"

import Layout from "../../components/Layout"
import Hero from "../../components/Hero"
import { questions } from "./questions"
import { hashFromString } from "../../utils/hash-from-string"
import { FormSection } from "../../components/FormSection"

export const ACTIONS = {
  ADD_RESPONSE: "ADD_RESPONSE",
}

export const initialState = {}

export const responseObject = (identifier, updatedResponse) => {
  const update = { ...updatedResponse }
  const id = hashFromString(identifier)
  return { [id]: update }
}

export const complexStateReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_RESPONSE:
      return { ...state, ...action.payload }
    default:
      throw new Error()
  }
}

const Quote = () => {
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
    <Layout
      pageClass="contact"
      title="Radically Digital - Contact us"
      description="Get in touch with the team at Radically Digital"
    >
      <Hero inverted={true}>
        <h1 className="hero__heading">Get a quote</h1>
      </Hero>

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
    </Layout>
  )
}

export default Quote
