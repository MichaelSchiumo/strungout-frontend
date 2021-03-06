import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from '../actions/loginForm.js'
import { login } from '../actions/currentUser.js'
// import { Route, Redirect } from 'react-router'



const Login = ({loginForm, login, updateLoginForm, history }) => {

  const handleInputChange = event => {
    const { name, value } = event.target
    const updateFormInfo = {
      ...loginForm,
      [name]: value
    }
    updateLoginForm(updateFormInfo)
  }


  const handleSubmit = event => {
    event.preventDefault()
    login(loginForm, history);
    //I want to redirect to the root URL after it successfully logs in.//
  }

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="email" value={loginForm.email} name="email" type="text" onChange={handleInputChange}/>
      <input placeholder="password" value={loginForm.password} name="password" type="password" onChange={handleInputChange}/>
      <input type="submit" value="Log In"/>
    </form>
  )
}

const mapstateToProps = state => {
  return {
    loginForm: state.loginForm
  }
}


export default connect(mapstateToProps, { updateLoginForm, login })(Login)
