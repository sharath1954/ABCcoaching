import React from 'react'
import logo_white from '../Assets/logo_white.png'
import { Link, useNavigate } from 'react-router-dom'
import {useEffect, useState} from 'react'

export default function Navbar() {

    const [email, setEmail] = useState('')
    const history = useNavigate()

    useEffect(() => {
        if(sessionStorage.getItem('isLoggedIn') === null) {
            setEmail('')
        }
        else if(sessionStorage.getItem('isLoggedIn') === 'true') {
            setEmail(sessionStorage.getItem('email'))
            document.getElementById('btn-logout').style.display = 'block'
        }
        else {
            setEmail('')
            document.getElementById('btn-logout').style.display = 'none'
        }

    }, [email])

    function handleLogout(e) {
        sessionStorage.removeItem('email')
        sessionStorage.removeItem('isLoggedIn')
        sessionStorage.removeItem('courses')
        document.getElementById('btn-logout').style.display = 'block'
        history('/')
        e.preventDefault()
    }

  return (
    <div className="navbar-main">
        <nav>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2 logo-col">
                        <Link to="/"> <img id="logo" src={logo_white} alt="logo"/> </Link>
                    </div>
                    <div className="col-md-7 nav-links">
                        <ul>
                            <Link to="/"> <li> <a>HOME &nbsp; <span className="glyphicon glyphicon-home" aria-hidden="true"></span> </a></li> </Link>
                            <Link to="/about"> <li><a>ABOUT &nbsp; <span className="glyphicon glyphicon-education" aria-hidden="true"></span> </a></li> </Link>
                            <Link to="/cart"> <li><a>CART &nbsp; <span className="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span> </a></li> </Link>
                        </ul>
                    </div>
                    <div className="col-md-1">
                        <button onClick={handleLogout} className="btn btn-secondary float-end" id="btn-logout" style={{display: "none"}}>Logout</button>
                    </div>
                    <div className="col-md-2 cart" style={{textAlign: "right"}}>
                        { email == '' ? 'Hi, there' : 'Hi, ' + email }
                    </div>
                </div>
            </div>
        </nav>
    </div>
  )
}
