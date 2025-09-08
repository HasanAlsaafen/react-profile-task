import Button from "./Button";
import { LuBellPlus } from "react-icons/lu";
import { CiCircleMore } from "react-icons/ci";
import { FaLink } from "react-icons/fa6";
import { FaRegCalendar } from "react-icons/fa";
export default function ProfileInfo({
  name,
  account,
  bio,
  pImg,
  bgImg,
  following,
  followers,
  joined,
  link,
  followedBy,
}) {
  return (
    <div className="profile-info">
      <div className="profile-info-images">
        <img
          src={pImg}
          className="profile-info-img"
          alt={`${name}'s profile`}
        />
        <img
          src={bgImg}
          className="profile-info-bg"
          alt={`${name}'s background`}
        />
      </div>

      <div className="profile-info-names">
        <h3>{name}</h3>
        <p>{account}</p>
      </div>
      <div className="profile-info-buttons">
        <Button
          bg="var(--primary-color)"
          color="var(--secondery-color)"
          className="follow-btn"
        >
          Follow
        </Button>
        <Button
          bg="var(--primary-color)"
          color="var(--secondery-color)"
          className="message-btn"
        >
          <LuBellPlus />
        </Button>{" "}
        <Button
          bg="var(--primary-color)"
          color="var(--secondery-color)"
          className="message-btn"
        >
          <CiCircleMore />
        </Button>
      </div>

      <p className="profile-info-bio">{bio}</p>
      <div className="profile-info-additional">
        <FaLink />

        <p>
          {" "}
          <a href={link} className="profile-info-link">
            {link}
          </a>
        </p>
        <p>
          {" "}
          <FaRegCalendar />
          &nbsp;{` Joined ${joined}`}
        </p>
      </div>
      <div className="profile-info-followers">
        <strong style={{ color: "var(--secondery-color)" }}>
          {" "}
          {following}{" "}
        </strong>{" "}
        Following &nbsp; &nbsp;
        <strong style={{ color: "var(--secondery-color)" }}>
          {followers > 10e5
            ? `${(followers / 1000000).toFixed(1)}M`
            : followers > 1000
            ? `${(followers / 1000).toFixed(1)}K`
            : followers}
        </strong>
        Followers
      </div>
      <div className="profile-info-followed-by">
        <div className="profile-info-followed-by-images">
          {followedBy.map((user) => (
            <img
              key={user.name}
              src={user.img}
              alt="profile"
              className="profile-info-followed-by-image"
            />
          ))}
        </div>
        <p style={{ color: "gray" }}>
          Followed by {followedBy[0].name} &amp; {followedBy.length - 1} others
        </p>
      </div>
    </div>
  );
}
