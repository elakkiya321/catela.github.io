import { configureStore } from '@reduxjs/toolkit';

// Create a Redux store with a dummy reducer (an empty reducer)
const store = configureStore({
  reducer: {}, // No reducers for now, just an empty object
  devTools: process.env.NODE_ENV !== 'production', // Enables Redux DevTools in development mode
});

export default store;
