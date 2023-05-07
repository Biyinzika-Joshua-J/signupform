import { configureStore } from '@reduxjs/toolkit'
import { formStepReducer } from '../features/index'

export const store = configureStore({
  reducer: {
    step:formStepReducer,
  },
})