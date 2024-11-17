import React from 'react'
import RegistrationForm from './RegistrationForm'
import ShowData from './ShowData'
import { useNavigate } from 'react-router-dom';
import Login from '../component/Login'

const Home = () => {

  const navigate= useNavigate()
  return (
    <div>
      {
        localStorage.getItem('token') ? (
          <>
            <RegistrationForm />
            <ShowData />
          </>

        ):(
          
          <Login />

        )
      }



    </div>
  )
}

export default Home
