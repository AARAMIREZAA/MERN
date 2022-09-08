import React, { useState } from "react"
import axios from "axios"
import {useNavigate} from "react-router-dom"


const RegLog = (props) => {

    const navigate = useNavigate()

    const [registerState, setRegisterState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    const [errorState, setErrorState] = useState({})

    const [loginState, setLoginState] = useState({
        email: "",
        password: ""
    })

    // const getAllUsers = () => {
    //     axios.get("http://localhost:8000/api/users", { withCredentials: true })
    //         .then(res => console.log(res))
    //         .catch(err => {
    //             console.log(err)
    //             if (err.response.status === 401) {
    //                 console.log("UNAUTHORIZED")
    //             }
    //             else if (err.response.status === 400) {
    //                 console.log("BAD REQUEST")
    //             }
    //         })
    // }

    const registerSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/users/register", registerState, { withCredentials: true })
            .then(res => navigate ("/dashboard") )
            .catch(err => {
                console.log(err)
                const { errors } = err.response.data;
                console.log(errors)
                const errObj = {}

                for (const [key, value] of Object.entries(errors)) {
                    console.log(errors[key])
                    errObj[key] = value;
                }
                setErrorState(errObj)
            })
    }

    const loginSubmit = e => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/users/login", loginState, { withCredentials: true })
            .then(res => navigate ("/dashboard"))
            .catch(err => console.log(err))
    }

    const registerChangeHandler = e => {
        setRegisterState({
            ...registerState,
            [e.target.name]: e.target.value
        })
    }

    const loginChangeHandler = e => {
        setLoginState({
            ...loginState,
            [e.target.name]: e.target.value
        })
    }


    let [authMode, setAuthMode] = useState("signin")

    const changeAuthMode = () => {
        setAuthMode(authMode === "signin" ? "signup" : "signin")
    }

    if (authMode === "signin") {
            return (
                <div className="Auth-form-container">
                    <form className="Auth-form" onSubmit={loginSubmit}>
                        <div className="Auth-form-content">
                            <img src="./cd_black_logo.png" alt="Coding dojo logo" />
                            <h3 className="Auth-form-title">Sign In</h3>
                            <div className="text-center">
                                Not registered yet?{" "}
                                <span className="link-primary" onClick={changeAuthMode}>
                                    Sign Up
                                </span>
                            </div>
                            <div className="form-group mt-3">
                                <label>Email address</label>
                                <input
                                    type="email"
                                    className="form-control mt-1"
                                    placeholder="Enter email"
                                    onChange={loginChangeHandler}
                                    name="email"
                                />
                            </div>
                            <div className="form-group mt-3">
                                <label>Password</label>
                                <input
                                    type="password"
                                    className="form-control mt-1"
                                    placeholder="Enter password"
                                    onChange={loginChangeHandler}
                                    name="password"
                                />
                            </div>
                            <div className="d-grid gap-2 mt-3">
                                <button type="submit" className="btn btn-primary">
                                    Submit
                                </button>
                            </div>
                            <p className="text-center mt-2">
                                Forgot <a href="#">password?</a>
                            </p>
                        </div>
                    </form>
                </div>
            )
        }

        return (
            <div className="Auth-form-container">
                <form className="Auth-form" onSubmit={registerSubmit}>
                    <div className="Auth-form-content">
                        <img src="./cd_black_logo.png" alt="Coding dojo logo" />
                        <h3 className="Auth-form-title">Sign Up</h3>
                        <div className="text-center">
                            Already registered?{" "}
                            <span className="link-primary" onClick={changeAuthMode}>
                                Sign In
                            </span>
                        </div>
                        <div className="form-group mt-3">
                            <label>First Name</label>
                            <input
                                type="text"
                                className="form-control mt-1"
                                placeholder="First Name"
                                name="firstName"
                                onChange={registerChangeHandler}
                            />
                            {(errorState.firstName) ? <small className="ml-1 text-danger font-weight-bold">WRONG</small> : null}
                        </div>
                        <div className="form-group mt-3">
                            <label>Last Name</label>
                            <input
                                type="text"
                                className="form-control mt-1"
                                placeholder="Last Name"
                                name="lastName"
                                onChange={registerChangeHandler}
                            />
                            {(errorState.lastName) ? <small className="ml-1 text-danger font-weight-bold">WRONG</small> : null}
                        </div>
                        <div className="form-group mt-3">
                            <label>Email address</label>
                            <input
                                type="text"
                                className="form-control mt-1"
                                placeholder="Email Address"
                                name="email"
                                onChange={registerChangeHandler}
                            />
                            {(errorState.email) ? <small className="ml-1 text-danger font-weight-bold">WRONG</small> : null}
                            {(errorState.duplicate) ? <small className="ml-1 text-danger font-weight-bold">EMAIL EXISTS</small> : null}
                        </div>
                        <div className="form-group mt-3">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control mt-1"
                                placeholder="Password"
                                name="password"
                                onChange={registerChangeHandler}
                            />
                            {(errorState.password) ? <small className="ml-1 text-danger font-weight-bold">WRONG</small> : null}
                        </div>
                        <div className="form-group mt-3">
                            <label>Confirm Password</label>
                            <input
                                type="password"
                                className="form-control mt-1"
                                placeholder="Confirm Password"
                                name="confirmPassword"
                                onChange={registerChangeHandler}
                            />
                            {(errorState.password) ? <small className="ml-1 text-danger font-weight-bold">WRONG</small> : null}
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </div>
                        <p className="text-center mt-2">
                            Forgot <a href="#">password?</a>
                        </p>
                    </div>
                </form>
            </div>
        )
    }
export default RegLog