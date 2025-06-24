import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    email: '',
    otp: '',
    details: {},
    domain: ''
}

const SignupSlice =  createSlice (
    {
        name: 'signup',
        initialState,
        reducers: {
            setEmail: (state, action) => {
                state.email = action.payload
            },
            setOtp: (state, action) => {
                state.otp = action.payload
            },
            setDetails: (state, action) => {
                state.details = action.payload
            },
            setDomain: (state, action) => {
                state.domain = action.payload
            }
        }
    }
)

export const {setEmail, setOtp, setDetails, setDomain} = SignupSlice.actions

export default SignupSlice.reducer