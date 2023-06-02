import { createReducer } from '@reduxjs/toolkit';

export const contactReducer = createReducer(
    {},
    {
        contactFormRequest: state => {
            state.loading = true;
        },
        contactFormSuccess: (state, action) => {
            state.loading = false;
            state.message = action.payload;
        },
        contactFormFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        clearError: state => {
            state.error = null;
        },
        clearMessage: state => {
            state.message = null;
        },
    }
)