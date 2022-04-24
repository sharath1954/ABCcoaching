import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function CartItems() {

    let courses = sessionStorage.getItem('courses')
    const [coursesSelected, setCoursesSelected] = useState([])
    const history = useNavigate()

    useEffect(() => {
        convertJSONtoArray()

    }, [courses])

    function handleClick(e) {

        const element = document.getElementById(e.target.id).parentElement
        element.remove()


        const item = e.target.id;
        const index = coursesSelected.indexOf(item)
        coursesSelected.splice(index, 1)

         if(coursesSelected.length === 0) {
            sessionStorage.removeItem('courses')
            // document.getElementById('course-msg').style.display = 'none'
            // document.getElementById('msg').style.display = 'block'
            history('/cart')
        }
    }

    function convertJSONtoArray() {
        const coursesSelected = JSON.parse(courses)
        const coursesArray = []
        for(var i in coursesSelected) {
            coursesArray.push(coursesSelected[i])
        }
        setCoursesSelected(coursesArray)
    }

    function handleQuotationBtn(e) {
        history('/quotation', {state: {courses: coursesSelected}})
    }

  return (
    <div className="cart-items-main">
        <div className="container">
            <h2 id="course-msg">Your selected courses:</h2>
            <ul id="items-list">
                {courses !== null ? coursesSelected.map(course => {
                    return (
                        <li className="item" key={course}>
                            <h3>{course}</h3>
                            <button className="btn btn-primary trash-btn" id={course} onClick={handleClick}> Remove <span className="glyphicon glyphicon-trash" aria-hidden="true"></span> </button>
                        </li>
                    )
                }) : null}
            </ul>
        </div>
        <h3 id="msg" style={{display: 'none', textAlign: 'center'}}>You have no item in the cart!</h3>

        <div className="container">
            <button className="btn btn-secondary quotation-btn" onClick={handleQuotationBtn}>Request for a Quotation</button>
        </div>
    </div>
  )
}
