import { Link } from "react-router-dom";

export default function HomeVideo() {
  return (
    <div className="video_container">
        <div className="overlay">
            <h1>Choice Supermarket</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae modi eveniet quia, esse aspernatur iste ipsam sapiente mollitia asperiores fugiat corporis placeat sunt blanditiis tempora illum consequuntur quisquam est consectetur.</p>
            <div className="buttons_block">
                <Link to="/About"><button>View More</button></Link>
                <Link to="/Products"><button>View Products</button></Link>
            </div>
        </div>
        <video src="vidoes/videoplayback.mp4" autoPlay muted loop></video>
    </div>
  )
}