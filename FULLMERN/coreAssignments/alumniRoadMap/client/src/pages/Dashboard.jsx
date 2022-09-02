import React from 'react'

const Dashboard = () => {
    return (
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
                    <img src="./profile_placeholder.png" alt="" />
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
        
    )
}

export default Dashboard