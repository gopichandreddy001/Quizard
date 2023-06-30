import { useState } from "react"

export default function Header(){
    const [quizCode,setQuizCode] = useState('Enter Code')
    return (
        <header className="border-bottom border-light border-5 mb-5 p-2">
            <div className="container">
                <div className="row">
                    <nav className="navbar navbar-expand-lg">
                        <a className="navbar-brand ms-2 fs-2 fw-bold text-black" href='/'>Quizzard</a>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav">
                                <li className="nav-item fs-5"><a className="nav-link" href="/welcome">Home</a></li>
                            </ul>
                        </div>
                        <ul className="navbar-nav">
                            <input type="text" name="quizcode" value={quizCode} onChange={(event) => {setQuizCode(event.target.value)}}/>
                            <li className="nav-item fs-5"><a className="nav-link" href="/">Login</a></li>
                            <li className="nav-item fs-5"><a className="nav-link" href="/logout">Logout</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}