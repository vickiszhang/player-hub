import { Carousel } from "../components/Carousel/Carousel"
import Navbar from "../components/Navbar/Navbar"
import '../index.css'

export default function Home() {
    return(
        <>
            <div className="carousel-container">
                <Carousel />
            </div>
        </>
    )
}