import './Navbar.css'
import { useState } from "react"
export default function Sidebar() {

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
                    <a id='home'>Home</a>
                    </div>
                <div className='right-container'>
                <a id='connections'>Connections</a>
                <a id='profile'>Profile</a>
                </div>
            </div>
        </>
    )
}