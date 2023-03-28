import { configureStore } from '@reduxjs/toolkit';
import projectReducer from '../Slicers/projectSlicer';
import usersReducer from '../Slicers/userSlicer';
import logInReducer from '../Slicers/LogInSlicer';
import paymentSlicer from '../Slicers/paymentSlicer';

export const Store = configureStore({
    reducer: {
        project: projectReducer,
        user: usersReducer,
        login: logInReducer,
        paymentLink: paymentSlicer
    }
});

