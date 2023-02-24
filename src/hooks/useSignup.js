import { useAuthContext } from './useAuthContext'
import { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase/config'

export const useSignup = () => {
  const [error, setError] = useState(null)
  const { dispatch } = useAuthContext()

  const signup = (email, password) => {
    setError(null)
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        dispatch({ type: 'LOGIN', payload: res.user })
      })
      .catch((err) => {
        setError(err.message)
      })
  }


  return { error, signup }
}
