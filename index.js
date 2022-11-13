// import React from "react"
// import ReactDOM from "react-dom"

// define staticPage element
const staticPage = (
    <div>
        <img src="./react-icon.png" width="150px"/>
        <h1>Fun facts about React</h1>
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100K stars on Github</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </div>
)

// render staticPage element
ReactDOM.render(
    staticPage,
    document.getElementById("root")
)