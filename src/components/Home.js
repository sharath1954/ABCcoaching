import React from 'react'
import { useEffect, useState } from 'react'
import LoginPrompt from './LoginPrompt'
import { useNavigate } from 'react-router-dom'

import Footer from './Footer'

export default function Home() {

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [coursesSelected, setCourseSelected] = useState([])
    const history = useNavigate()

    useEffect(() => {

        if(sessionStorage.getItem('isLoggedIn') === null) {
            setIsLoggedIn(false)
        }
        else if(sessionStorage.getItem('isLoggedIn') === 'true') {
            setIsLoggedIn(true)
        }
        else {
            setIsLoggedIn(false)
        }

        let proceedBtn = document.querySelector('.checkout-btn')
         if(coursesSelected.length === 0) {
            proceedBtn.style.display = 'none'
        }
        else {
            proceedBtn.style.display = 'block'
        }

    }, [coursesSelected])

    function handleClick(e) {

        e.target.classList.toggle('selected')
        if(coursesSelected.includes(e.target.getElementsByTagName('h3')[0].innerHTML)) {
            setCourseSelected(coursesSelected.filter(course => course !== e.target.getElementsByTagName('h3')[0].innerHTML))
        }
        else {
            setCourseSelected(coursesSelected.concat(e.target.getElementsByTagName('h3')[0].innerHTML))
        }
    }

    function handleCart(e) {
        sessionStorage.setItem('courses', JSON.stringify(coursesSelected))
        history('/cart')
    }

  return (
    <div className="home-main">
        {isLoggedIn ? null : <LoginPrompt />}

        <div className="home-title-content">
            <h3 id="title" className="text-center">Our Course List</h3>
            <p className="m-6 text-center ml-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem sint fuga, consequatur vel quasi exercitationem illum, laboriosam esse distinctio qui eaque culpa dicta ipsum placeat numquam. Fugiat, cupiditate cumque. Facere?
            Cumque numquam accusamus quisquam reiciendis iste iure suscipit, et nostrum pariatur delectus soluta fuga assumenda corrupti eos nulla voluptates beatae commodi velit. Possimus eos saepe error omnis ut ducimus magnam.</p>
        </div>

        <div className="container justify-content-center">

            <button className="btn btn-secondary checkout-btn" onClick={handleCart}>Proceed to checkout</button>

            <div className="row justify-content-center bg-dark">

                <div className="col-md-4 col-1 text-center"  id="card-container">
                   <div className="card" onClick={handleClick}>
                        <h3>Java</h3>
                   </div>
                </div>
                <div className="col-md-4 col-2 text-center" id="card-container">
                    <div className="card" onClick={handleClick}>
                        <h3>C#</h3>
                    </div>
                </div>
                <div className="col-md-4 col-3 text-center" id="card-container">
                    <div className="card" onClick={handleClick}>
                        <h3>Python</h3>
                    </div>
                </div>
                <div className="col-md-4 col-4 text-center" id="card-container">
                    <div className="card" onClick={handleClick}>
                        <h3>JavaScript</h3>
                    </div>
                </div>
                <div className="col-md-4 col-5 text-center" id="card-container">
                    <div className="card" onClick={handleClick}>
                        <h3>R</h3>
                    </div>
                </div>
                <div className="col-md-4 col-3 text-center" id="card-container">
                    <div className="card" onClick={handleClick}>
                        <h3>C</h3>
                    </div>
                </div>
                <div className="col-md-4 col-6 text-center" id="card-container">
                    <div className="card" onClick={handleClick}>
                        <h3>C++</h3>
                    </div>
                </div>
                <div className="col-md-4 col-7 text-center" id="card-container">
                    <div className="card" onClick={handleClick}>
                        <h3>HTML</h3>
                    </div>
                </div>

            </div>
        </div>

    <Footer />
    </div>
  )
}
