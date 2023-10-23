import "./styles.css";
import "@splidejs/react-splide/css";
import { Options, Splide, SplideSlide } from "@splidejs/react-splide";
import PlayerCard from "../PlayerCard/PlayerCard";

const options: Options = {
  perPage: 2,
  arrows: false,
  pagination: false,
};

const testPlayer1 = {
  name: 'Vikeyna',
  message: "I'm a trash Neeko main teehee",
};

const testPlayer2 = {
  name: 'dvid',
  message: "I'm a competative aram player teehee",
};

export const Carousel = () => {
  return (
    <>
      <nav>Users</nav>
      <Splide aria-label="My Favorite Images">
        <SplideSlide>
          <PlayerCard {...testPlayer1}></PlayerCard>
        </SplideSlide>
        <SplideSlide>
          <PlayerCard {...testPlayer2}></PlayerCard>
        </SplideSlide>
      </Splide>
    </>
  );
};


{/* <div className="wrapper">
        <div className="splide">
          <Splide options={options}>
            {slides.map((slide) => (
              <SplideSlide>
                <div className="slide">
                  <div className="card">
                    <span className="material-symbols-outlined">
                      {slide.icon}
                    </span>
                    <p>{slide.text}</p>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div> */}

// const slides = [
//   {
//     PlayerCard(testPlayer)
//   },
//   {
//     icon: "bug_report",
//     text: "Expert at debugging complex issues.",
//   },
//   {
//     icon: "palette",
//     text: "User interface design and animation.",
//   },
//   {
//     icon: "lock",
//     text: "Implementing secure applications.",
//   },
//   {
//     icon: "dns",
//     text: "Dev ops and web infrastructure.",
//   },
//   {
//     icon: "person",
//     text: "Top-level communication skills.",
//   },
//   {
//     icon: "terminal",
//     text: "Coding advanced web applications.",
//   },
// ];