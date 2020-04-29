/* eslint-disable no-console */
import React, { useReducer, useState, useEffect } from "react"

import Layout from "../components/Layout"
import Hero from "../components/Hero"
import { questions } from "./questions"
import QUESTION_TYPES from "./QUESTION_TYPES.json"
import { hashFromString } from "../utils/hash-from-string"

const ACTIONS = {
  ADD_RESPONSE: "ADD_RESPONSE",
}

const initialState = {}

const responseObject = (identifier, updatedResponse) => {
  const update = { ...updatedResponse }
  const id = hashFromString(identifier)
  return { [id]: update }
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_RESPONSE:
      return { ...state, ...action.payload }
    default:
      throw new Error()
  }
}

const FormSection = ({ question, options, type, outputState }) => {
  const [simpleState, setSimpleState] = useState("")

  if (type === QUESTION_TYPES.BUTTON) {
    return (
      <fieldset>
        <legend>{question}</legend>
        {options.map((option) => (
          <label key={option}>
            <button
              onClick={() => {
                outputState(true)
              }}
            >
              {option}
            </button>
          </label>
        ))}
      </fieldset>
    )
  }

  if (type === QUESTION_TYPES.CHECKBOX) {
    const [state, dispatch] = useReducer(reducer, initialState)
    useEffect(() => {
      setSimpleState(
        Object.values(state)
          .filter((option) => option.checked)
          .map(({ option }) => option)
      )
    }, [state])

    return (
      <fieldset>
        <legend>{question}</legend>
        {options.map((option) => (
          <label key={option}>
            {option}
            <input
              onChange={(e) => {
                dispatch({
                  type: ACTIONS.ADD_RESPONSE,
                  payload: responseObject(option, {
                    option,
                    checked: e.target.checked,
                  }),
                })
              }}
              type="checkbox"
              name={option}
              value={
                state[hashFromString(option)] &&
                state[hashFromString(option)].checked
              }
            />
          </label>
        ))}
        <button
          onClick={() => {
            outputState(simpleState)
          }}
        >
          next
        </button>
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
              onClick={() => {
                outputState(option)
              }}
              name={question}
              value={option}
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
          your email
          <input
            value={simpleState}
            onChange={(e) => {
              setSimpleState(e.target.value)
            }}
            type="email"
          />
        </label>
        <button
          onClick={() => {
            outputState(simpleState)
          }}
        >
          next
        </button>
      </fieldset>
    )
  }

  return (
    <fieldset>
      <legend>{question}</legend>
      <label>
        <input
          value={simpleState}
          onChange={(e) => {
            setSimpleState(e.target.value)
          }}
        />
      </label>
      <button
        onClick={() => {
          outputState(simpleState)
        }}
      >
        next
      </button>
    </fieldset>
  )
}

const Quote = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <Layout
      pageClass="contact"
      title="Radically Digital - Contact us"
      description="Get in touch with the team at Radically Digital"
    >
      <Hero inverted={true}>
        <h1 className="hero__heading">Get a quote</h1>
      </Hero>

      {JSON.stringify({ state })}
      <form onSubmit={(e) => e.preventDefault()}>
        {questions.map((question) => (
          <FormSection
            key={question.question}
            {...question}
            outputState={(response) =>
              dispatch({
                type: ACTIONS.ADD_RESPONSE,
                payload: responseObject(question.question, {
                  response,
                  question: question.question,
                }),
              })
            }
          />
        ))}
        <button>Submit</button>
      </form>
    </Layout>
  )
}

export default Quote
