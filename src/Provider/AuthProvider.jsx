

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

// import axios from 'axios'
import { app } from './firebase/firebase.config'
import useAxiosCommon from '../hooks/useAxiosCommon'
export const AuthContext = createContext(null)
const auth = getAuth(app)


const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const axiosCommon= useAxiosCommon();

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
 
    return signOut(auth)
  }

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
  }


  // onAuthStateChange
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
      if (currentUser) {
        //todo
        const userInfo= {email:currentUser.email};
        axiosCommon.post('/jwt', userInfo)
        .then(res=>{
          if(res.data.token){
            localStorage.setItem('access-token', res.data.token);
          }
        })

      }
      else{
        //todo
        localStorage.removeItem('access-token');
      }
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
