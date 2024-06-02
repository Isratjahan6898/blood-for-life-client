

import PropTypes from 'prop-types'
import { createContext, useEffect, useState } from 'react'
import {

  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,

  signInWithEmailAndPassword,

  signOut,
  updateProfile,
} from 'firebase/auth'

import axios from 'axios'
import { app } from './firebase/firebase.config'
export const AuthContext = createContext(null)
const auth = getAuth(app)


const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }



  

  const logOut = async () => {
    setLoading(true)
    await axios.get(`${import.meta.env.VITE_API_URL}/logout`, {
      withCredentials: true,
    })
    return signOut(auth)
  }

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
  }
  // Get token from server
//   const getToken = async email => {
//     const { data } = await axios.post(
//       `${import.meta.env.VITE_API_URL}/jwt`,
//       { email },
//       { withCredentials: true }
//     )
//     return data
//   }

  // onAuthStateChange
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
    //   if (currentUser) {
    //     getToken(currentUser.email)
    //   }
      setLoading(false)
    })
    return () => {
      return unsubscribe()
    }
  }, [])

  const authInfo = {
    user,
    loading,
    setLoading,
    createUser,
    signIn,

    logOut,
    updateUserProfile,
  }

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  // Array of children.
  children: PropTypes.array,
}

export default AuthProvider
