import QUESTION_TYPES from "./QUESTION_TYPES.json"

export const questions = [
  {
    type: QUESTION_TYPES.RADIO,
    question:
      "In under 60 seconds and just a few Qs, you can help us understand your challenge. Sound good?",
    options: ["Yes"],
  },
  {
    type: QUESTION_TYPES.CHECKBOX,
    question: "What is your industry?",
    options: [
      "Retail",
      "Financial Services",
      "Technology, Healthcare",
      "Energy/Utilities",
      "Mining",
      "Food/Drinks",
      "Automotive",
      "Real Estate",
      "Manufacturing",
      "Education",
      "Tourism",
      "Media",
    ],
  },
  {
    type: QUESTION_TYPES.TEXT,
    question:
      "What challenge can we help with? Feel free to select multiple options from the selection below ",
  },
  {
    type: QUESTION_TYPES.TEXT,
    question:
      "Any Specific Project Goals?\ne.g. Building a new product\nStream line operations\nAgile Coaching\netc",
  },
  {
    type: QUESTION_TYPES.RADIO,
    question: "That all sounds great! How soon are you looking to start?",
    options: ["Asap!", "Within 1 month", "Within 2 months", "2 months+"],
  },
  {
    type: QUESTION_TYPES.EMAIL,
    question:
      "Excellent a [dependent on answer selection in Q2] coming your way. Enter your email address and we will send your options over! ",
  },
]
