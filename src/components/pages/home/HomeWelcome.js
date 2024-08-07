
import {Link} from "react-router-dom"

export default function HomeWelcome() {
  return (
    <div className="home_welcome">
        <h2 data-aos="fade-up">Good Evening!</h2>
        <p data-aos="fade-up"><Link>Sign in</Link> for the best experience, not a customer yet? <Link>Register</Link></p>
    </div>
  )
}
