import { FaArrowLeft } from "react-icons/fa6";
import ProfileInfo from "./ProfileInfo";
import react from "../assets/react.png";
import reactBg from "../assets/reactBg.png";
import ElMu from "../assets/Elonmusk.jpg";
import Section from "./Sections";
import Hasan from "../assets/F.S.jpg";
import Post from "./Post";
export default function Main() {
  const reactProfile = {
    name: "React",
    account: "@react",
    bio: "A JavaScript library for building user interfaces.",
    pImg: react,
    bgImg: reactBg,
    following: 1,
    followers: 2900000,
    joined: "July 2013",
    link: "https://react.dev",
    followedBy: [
      {
        name: "Elon Musk",
        img: ElMu,
      },
      {
        name: "React",
        img: react,
      },
    ],
  };

  return (
    <main className="main">
      <header className="main-header">
        <FaArrowLeft style={{ fontSize: "1.5em" }} />

        <div>
          {" "}
          <h1 style={{ fontSize: "1.5em" }}>React</h1>
          <p style={{ fontSize: "1em", color: "gray" }}>2,900 posts</p>
        </div>
      </header>
      <ProfileInfo
        name={reactProfile.name}
        account={reactProfile.account}
        bio={reactProfile.bio}
        pImg={reactProfile.pImg}
        bgImg={reactProfile.bgImg}
        following={reactProfile.following}
        followers={reactProfile.followers}
        joined={reactProfile.joined}
        link={reactProfile.link}
        followedBy={reactProfile.followedBy}
      />
      <Section />
      <Post />
    </main>
  );
}
