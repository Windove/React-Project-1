import React from "react"
import ReactDOM from "react-dom"

// import elements
import Header from "./elements/Header"
import Main from "./elements/Main"
import Footer from "./elements/Footer"

// create App element
function App() {
    return (
        <div className="page">
            <Header />
            <Main />
            <Footer />
        </div>

    )
}

// render page
ReactDOM.render(
    <App />,
    document.getElementById("root")
)