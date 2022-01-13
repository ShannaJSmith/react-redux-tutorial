import React from 'react'
import { useDispatch } from 'react-redux' // used for modifying state
import { login, logout } from '../features/user'

const Login = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => {
        dispatch(login({ name: 'inuyasha', age: 50, email: 'inuyasha@gmail.com' }))
      }}>Login</button>
      <button onClick={() => {
        dispatch(logout())
      }}>Logout</button>
    </div>
  )
}

export default Login

