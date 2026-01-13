import { createSlice } from "@reduxjs/toolkit";

const questionnaireSlice = createSlice({
  name: "questionnaire",
  initialState: {
    questions: [
  {
    id: "q1",
    text: "What is React mainly used for?",
    options: [
      { value: "ui", label: "Building user interfaces" },
      { value: "db", label: "Managing databases" },
    ],
    correctValue: "ui",
  },
  {
    id: "q2",
    text: "What does useState return?",
    options: [
      { value: "array", label: "An array: [state, setState]" },
      { value: "object", label: "An object with state fields" },
    ],
    correctValue: "array",
  },
  {
    id: "q3",
    text: "When do we use useEffect?",
    options: [
      { value: "sideEffects", label: "For side effects (e.g., fetching data)" },
      { value: "styling", label: "For styling components" },
    ],
    correctValue: "sideEffects",
  },
  {
    id: "q4",
    text: "What is a key prop used for in lists?",
    options: [
      { value: "identify", label: "To help React identify list items" },
      { value: "css", label: "To apply CSS styles" },
    ],
    correctValue: "identify",
  },
  {
    id: "q5",
    text: "Props in React are…",
    options: [
      { value: "readonly", label: "Read-only input data for a component" },
      { value: "mutable", label: "Mutable state inside a component" },
    ],
    correctValue: "readonly",
  },
],
    answers: {},
    submitted: false,
    result: null,
    error: null,
  },
  reducers:{ 
    answerQuestion(state, action){
       const { questionId, selectedValue } = action.payload;
      state.answers[questionId] = selectedValue;
      state.error = null;
      state.submitted = false;
      state.result = null;

    },
    submitAnswers(state){
    const total = state.questions.length;
    const answeredCount = Object.keys(state.answers).length;
    if(answeredCount < total){
      state.error = "Please answer all questions.";
      state.submitted = false;
      state.result = null;
      return
    }
    let correctCount = 0;
    for(const q of state.questions){
      const userValue = state.answers[q.id];
      if(userValue === q.correctValue) {
        correctCount +=1;
      }
    }
    state.result = {correctCount, total};
    state.submitted = true;
    state.error = null;
  }
}
})

export const {answerQuestion, submitAnswers} = questionnaireSlice.actions
export default questionnaireSlice.reducer