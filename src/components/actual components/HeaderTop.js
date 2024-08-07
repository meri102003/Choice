import { FaPhone, FaLocationArrow } from "react-icons/fa";

export default function HeaderTop() {
    const number = "37477675671";
  return (
    <div className="header_top">
      <p className="welcome_title">
        Welcome to <span>Choice</span> Supermarket
      </p>
      <div className="header_top_infoes">
        <span>
          <FaPhone />
          <p><a href={`tel:${number}`}>+{number}</a></p>
        </span>
        <span>
            <FaLocationArrow/>
            <p>Northern Avenue 14</p>
        </span>
      </div>
    </div>
  );
}
