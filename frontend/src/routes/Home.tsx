import { Carousel } from "../components/Carousel/Carousel"
import Sidebar from "../components/Navbar/Navbar"
import '../index.css'

export default function Home() {
    return(
        <>
            <Sidebar />
            <a href={`/profile`}>Profile</a>
            <div className="carousel-container">
                <Carousel />
            </div>
        </>
    )
}