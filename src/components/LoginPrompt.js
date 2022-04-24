import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function LoginPrompt() {

    const history = useNavigate()

    function handleClick(e) {
        switch(e.target.innerHTML) {
            case 'Login':
                history('/login')
                break
            case 'Register':
                history('/register')
                break
            default:
                break;
        }
    }

  return (
    <div className="login-prompt-main">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h3>Please login to place an order, get a quotation, and many endless possible things!</h3>
                </div>
                <div className="col-md-6 btn-col">
                    <a onClick={handleClick} className="btn btn-primary">Login</a>
                    <a onClick={handleClick} className="btn btn-primary">Register</a>
                </div>
            </div>
        </div>
    </div>
  )
}
