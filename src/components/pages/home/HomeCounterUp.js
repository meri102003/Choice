
import CountUp from "react-countup";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { v4 as uuidv4 } from 'uuid';

export default function HomeCounterUp() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const counterlist = [
    {
      id: uuidv4(),
      type: "Loyal Customers",
      count: 25000,
      slide: "fade-right",
    },
    {
      id: uuidv4(),
      type: "Online Orders",
      count: 50000,
      slide: "fade-left",
    },
    {
      id: uuidv4(),
      type: "Visiters",
      count: 115000,
      slide: "fade-right",
    },
    {
      id: uuidv4(),
      type: "Happy Customers",
      count: 43500,
      slide: "fade-left",
    },
  ];

  return (
    <div className="counter_container">
      <h2 className="title">Testimonials</h2>
      <div className="counter_content">
        {counterlist.map((count) => (
          <div className="counter_item" key={count.id} data-aos={count.slide}>
            <h2>{count.type}</h2>
            <CountUp
              start={1000}
              end={count.count}
              duration={5}
              enableScrollSpy={true}
              scrollSpyDelay={10}
              separator="."
              prefix="+"
            />
          </div>
        ))}
      </div>
    </div>
  );
}