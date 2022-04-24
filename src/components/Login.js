import React from 'react'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const history = useNavigate()

    function handleChange(e) {
        if (e.target.type === 'email') {
            setEmail(e.target.value)
            console.log(email)
        } else if (e.target.type === 'password') {
            setPassword(e.target.value)
            console.log(password)
        }
    }

    function handleClick(e) {
        switch(e.target.id) {
            case 'login':
                sessionStorage.setItem('isLoggedIn', true)
                sessionStorage.setItem('email', email)
                history('/')
                break
            case 'register':
                history('/register')
                break
            case 'forgot-password':
                e.preventDefault()
                break
            default:
                break
        }
    }

  return (
    <div className="login-main">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="login-form">
                        <form>
                            <div className="form-group">
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your Email" value={email} onChange={handleChange} />
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={password} onChange={handleChange} />
                                <button type="submit" id="login" className="btn btn-primary" onClick={handleClick}>Login</button>
                                <button type="submit" id="register" className="btn btn-primary" onClick={handleClick}>Register</button>
                                <button type="submit" id="forgot-password" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#forgot-password-modal" onClick={handleClick}>Forgot Password</button>
                            </div>
                        </form>      
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
