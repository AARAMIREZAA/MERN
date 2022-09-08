
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'

const ProductForm = (props) => {
	// STATE
	const [title, setTitle] = useState()
	const [price, setPrice] = useState()
	const [description, setDescription] = useState()

	// DESTRUCTURE REFRESH FUNCTION
	const { refresh } = props

	const createProduct = (e) => {
		e.preventDefault();
		const productObj = {
			title,
			price,
			description
		}

		// AXIOS POST
		axios.post("http://localhost:8000/api/products", productObj)
			.then(newProduct => refresh())
			.catch(error => console.log(error))
	}

	return (
		<div className='container w-50'>

			<div className='dashb-bcolor'>
            <div>
                <header className='dashb-color leftContent-flex'>
                    <h1>Coding Dojo</h1>
                    <h2>Onsite Tracks</h2>
                </header>
            </div>
            <div className='leftContent-flex'>
                <div>
                    <h1>HOME</h1>
                </div>
                <div>
                    <h1>LEARN</h1>
                </div>
                <div>
                    <h1>CONTACT</h1>
                </div>
                <div>
                    <img src="./profile_placeholder.png" alt="web icon" />
                </div>
            </div>

            <div className='lowerBody flex'>

                <div className='leftContent'>
                    <h1>Completed Courses</h1>
                    <ul className='leftContent-flex' style={{ listStyleType: "none" }}>
                        <li> <img src="./icon1.png" alt="web icon" />Web Fundamentals</li>
                        <li> <img src="./icon1.png" alt="web icon" /> MEAN</li>
                        <li> <img src="./icon1.png" alt="web icon" /> PYTHON</li>
                    </ul>
                    <ul className='leftContent-flex' style={{ listStyleType: "none" }}>
                        <li> <img src="./icon1.png" alt="web icon" /> RAILS</li>
                        <li> <img src="./icon1.png" alt="web icon" /> IOS</li>
                        <li> <img src="./icon1.png" alt="web icon" /> C#/.NET</li>
                    </ul>
                    <ul className='leftContent-flex' style={{ listStyleType: "none" }}>
                        <li> <img src="./icon1.png" alt="web icon" /> JAVA</li>
                        <li> <img src="./icon1.png" alt="web icon" /> MERN</li>
                        <li> <img src="./icon1.png" alt="web icon" /> PROGRAMMING BASICS</li>
                    </ul>
                    <div className='leftContent-flex'>
                        <button className='button'>DATA SCIENCE</button>
                        <button className='button'>CYBER SECURITY</button>
                        <button className='button'>UI/UX DESIGN</button>
                    </div>
                </div>

                <div className='rightContent'>
                    <h1>Career Prospect</h1>
                    <h3> <link rel="stylesheet" href="https://www.indeed.com/jobs?q=web%20developer&l=Los%20Angeles%2C%20CA&vjk=ff36ebf7600f0016" />WEB DEVELOPER</h3>
                    <h2 className="text2"></h2>
                    <h2 className="text2">A web developer writes all of the code for a website, tests and troubleshoots
                        interactivity, uses CSS to create an attractive design and monitors the site's effectiveness. Web
                        developers who attend a coding bootcamp learn the basics and advanced techniques for HTML, CSS,
                        UI/UX design and accessibility.</h2>
                    <h2></h2>
                    <h2 className="text2">National Average Salary: $78,409 </h2>
                    <h2></h2>
                    <h2 className="text2">Lowest salary job found in Los Angeles: $43,680 </h2>
                </div>
            </div>
            
        </div>
			<form onSubmit={createProduct}>
				<div className="row mb-3">
					<label className="col-sm-2 col-form-label">Title:</label>
					<input onChange={(e) => setTitle(e.target.value)} name="title" type="text" className="form-control" />
				</div>
				<div className="row mb-3">
					<label className="col-sm-2 col-form-label">Price:</label>
					<input onChange={(e) => setPrice(e.target.value)} name='price' type="number" className="form-control" />
				</div>
				<div className="row mb-3">
					<label className="col-sm-2 col-form-label">Description:</label>
					<input onChange={(e) => setDescription(e.target.value)} name='description' type="text" className="form-control" />
				</div>
				<button type="submit" className="btn btn-primary float-end">add</button>
			</form>
		</div>
	)
}

export default ProductForm