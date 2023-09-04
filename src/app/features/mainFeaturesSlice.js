/** @format */

import {createSlice} from "@reduxjs/toolkit";

const mainFeaturesSlice = createSlice({
    name: "mainFeatures",
    initialState: {
        questions: null,
        currentQuestion: null,
    },
    reducers: {
        setCurrentQuestion: (state, {payload}) => {
            state.currentQuestion = payload;
        },
        setQuestions: (state, {payload}) => {
            state.questions = payload;
        },
    },
});

export default mainFeaturesSlice.reducer;

export const {setCurrentQuestion,setQuestions} = mainFeaturesSlice.actions;
