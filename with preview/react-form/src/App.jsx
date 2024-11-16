// import { useState } from 'react'

import './App.css'
import ReUsableForm from './reUsableForm/ReUsableForm'
// import Froms from './Component/forms/froms'

function App() {

  const signUphandler = data => {
    console.log(data.name, data.password);
  }

  return (
    <>
      {/* <Froms></Froms> */}
      <ReUsableForm formTitle={"Sign Up"} SubmitHandler={signUphandler} btntext='Sign Up'>
        <div>
          <h4>Sign Up</h4>
          <p>This is Sign Up Activity</p>
        </div>
      </ReUsableForm>
    </>
  )
}

export default App
