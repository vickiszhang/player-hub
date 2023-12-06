import './Navbar.css'
import { useState } from "react"
export default function Navbar() {

    //GOING TO IMPLEMENT HIDING NAVBAR ON DOWNSCROLL (AND DOWNSCROLL + PAUSE)
    // - appear on window open
    // - appear when scrolling up
    
    // const [isVisable, setIsVisable] = useState(false);

    // if (self == top) {
    //     setIsVisable(isVisable == true);
    // }

    return(
        <>
            <div className="sidebar-container">
                <div className='left-container'>
                    <a href={`/`}>Home</a>
                </div>
                <div className='right-container'>
                    <a href={`/connections`}>Connections</a>
                    <a href={`/profile`}>Profile</a>
                </div>
            </div>
        </>
    )
}