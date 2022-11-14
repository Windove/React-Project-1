// import icon
import reactIcon from "../media/React-icon.png"

// create Navbar component
export default function Navbar() {
    return (
        <nav className="nav">
            <img src={reactIcon} className="nav_icon" alt="reactIcon" />
            <h3>ReactFacts</h3>
            <h4>React Course - Project 1</h4>
        </nav>
    )
}