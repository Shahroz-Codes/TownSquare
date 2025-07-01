import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlice'
// (later) import eventReducer from './eventSlice'
// (later) import feedbackReducer from './feedbackSlice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    // event: eventReducer,
    // feedback: feedbackReducer,
  },
})

export default store
