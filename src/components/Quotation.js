import React from 'react'
import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function Quotation() {

    const location = useLocation()
    const history = useNavigate()
    const [courses, setCourses] = useState([])

    useEffect(() => {
        setCourses(location.state.courses)
        console.log(courses)
    })

    function handleClick(e) {
        sessionStorage.removeItem('courses')
        history('/')
    }

  return (
    <div className="quotation-main">
        <div className="container text-center">
            <h2>Request Quotation</h2>
            <form>
                <input type="text" class="form-control" id="name" placeholder="Your Name" />
                <input type="text" class="form-control" id="phone" placeholder="Phone Number" />
                <input type="text" class="form-control" id="coaching-name" placeholder="Coaching Name" />
                <label for="courses">Courses Opted:</label>
                {
                    courses.map((course) => <li id="course-list">{course}</li>)
                }
                <button type="button" class="btn btn-primary btn-quotation" onClick={handleClick}>Request Quotation</button>
            </form>
        </div>
    </div>
  )
}
