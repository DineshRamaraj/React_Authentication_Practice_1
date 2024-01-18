// Write your JS code here
import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    isErrorMessage: '',
  }

  onSuccess = () => {
    // console.log(this.props)

    const {history} = this.props
    // history.push('/')
    history.replace('/')

    // console.log(history)
  }

  submitForm = async event => {
    event.preventDefault()

    // console.log('Hello Dinesh')

    const {username, password} = this.state

    const userDetails = {username, password}
    // console.log(userDetails)

    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)

    // console.log(response)

    const data = await response.json()

    if (response.ok === true) {
      this.onSuccess()
      this.setState({isErrorMessage: ''})
      //   console.log('It is Successfully')
    } else {
      this.setState({isErrorMessage: data.error_msg})
    }

    // const data = await response.json()

    // console.log(data)

    // this.errorMessage(data.error_msg)
  }

  onChangeUserName = event => {
    // console.log(event.target.value)
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    // console.log(event.target.value)
    this.setState({password: event.target.value})
  }

  render() {
    const {username, password, isErrorMessage} = this.state
    return (
      <div className="login-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="login-sm-form-logo"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="login-website-image"
        />
        <div className="login-form-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="login-lg-form-logo"
          />
          <form className="form-container" onSubmit={this.submitForm}>
            <label htmlFor="username" className="label">
              USERNAME
            </label>
            <input
              type="text"
              className="username-input"
              id="username"
              placeholder="Username"
              onChange={this.onChangeUserName}
              value={username}
            />

            <label htmlFor="password" className="label">
              PASSWORD
            </label>
            <input
              type="password"
              className="password-input"
              id="password"
              placeholder="Password"
              onChange={this.onChangePassword}
              value={password}
            />

            <button type="submit" className="form-button">
              Login
            </button>
          </form>
          <p className="error-message">{isErrorMessage}</p>
        </div>
      </div>
    )
  }
}

export default LoginForm
