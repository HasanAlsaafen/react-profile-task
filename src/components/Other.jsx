import SearchBar from "./SearchBar";
import YouMightLike from "./YouMightLike";
import Trends from "./Trends";
import fcc from "../assets/fcc.png";
export default function Other() {
  const youMightLike = [
    {
      id: 1,
      name: "Tailwind",
      accout: "@tailwind",
      img: fcc,
    },
    {
      id: 2,
      name: "Tailwind",
      accout: "@tailwind",
      img: fcc,
    },
    {
      id: 3,
      name: "Tailwind",
      accout: "@tailwind",
      img: fcc,
    },
  ];
  const trends = [
    {
      id: 1,
      name: "trend-card-header",
      cat: "Game.Trending",
      reacts: "29.8K",
    },
  ];
  return (
    <section className="other">
      <SearchBar></SearchBar>
      <YouMightLike data={youMightLike}></YouMightLike>
      <Trends data={trends}></Trends>
      <footer className="other-footer">
        <p>Tearms of services</p>
        <p>Tearms of services</p>
        <p>Tearms of services</p>
        <p>Tearms of services</p>
      </footer>
    </section>
  );
}
