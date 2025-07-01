import {Routes, Route} from 'react-router-dom'
import SignUp from '../pages/auth/signup/SignUp'

import SignIn from '../pages/auth/SignIn'
import Landing from '../pages/landing/Landing'
import ContactUs from '../pages/landing/ContactUs'
import CreateSiteLoader from '../pages/loaders/CreateSiteLoader'

const Routers = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Landing />}></Route>
            <Route path='/contactUs' element = {<ContactUs />}></Route>
            <Route path='/signin' element = {<SignIn />}></Route>
            {/* <Route path='/signup' element = {<SignUp />}></Route> */}
            <Route path='/signup/email' element = {<SignUp />}/>
            <Route path='/signup/otp' element = {<SignUp />}/>
            <Route path='/signup/details' element = {<SignUp />}/>
            <Route path='/signup/domain' element = {<SignUp />}/>

            <Route path='/create-site' element={<CreateSiteLoader />}></Route>
        </Routes>
    </>
  )
}

export default Routers