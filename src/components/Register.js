import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Register() {

  const history = useNavigate()

  const [userData, setuserData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: ''
  })

  function handleSubmit(e) {
    history('/login')
  }

  return (
    <div className="register-main">
        <div className="container text-center">
          <h2 style ={{marginBottom: '2rem'}}>Register with us!</h2>
            <form>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Name" value={userData.name} onChange={(e) => setuserData({...userData, name: e.target.value})} />
                  <input type="email" className="form-control" placeholder="Email" value={userData.email} onChange={(e) => setuserData({...userData, email: e.target.value})} />
                  <input type="password" className="form-control" placeholder="Password" value={userData.password} onChange={(e) => setuserData({...userData, password: e.target.value})} />
                  <input type="password" className="form-control" placeholder="Confirm Password" value={userData.confirmPassword} onChange={(e) => setuserData({...userData, confirmPassword: e.target.value})} />
                  <input type="text" className="form-control" placeholder="Phone" value={userData.phone} onChange={(e) => setuserData({...userData, phone: e.target.value})} />

                  <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Register</button>
                 </div>
            </form>   
        </div>

    </div>
  )
}
