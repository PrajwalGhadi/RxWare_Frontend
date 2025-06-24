import {configureStore} from '@reduxjs/toolkit'
import SignupSlice from '../redux/reducers/SignupSlice'

const Store = configureStore ({
    reducer: {
        signup: SignupSlice
    }
})

export default Store