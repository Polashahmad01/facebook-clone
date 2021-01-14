import { configureStore } from '@reduxjs/toolkit';
import signUpReducer from '../features/SignUp/signUpSlice';
import signInReducer from '../features/SignIn/signInSlice';

export default configureStore({
  reducer: {
    signUp: signUpReducer,
    signIn: signInReducer,
  },
});
