import UserCard from "./UserCard";
import Button from "./Button";
import { IoMdPerson } from "react-icons/io";

function ToFollow({ toFollow }) {
  return (
    <div className="to-follow">
      <p className="who-to-follow-followers">
        <IoMdPerson />
        &nbsp;
        {toFollow.followedBy.slice(0, 2).map((element, index) => (
          <span key={index}>{element} </span>
        ))}
        &nbsp;
        {toFollow.followedBy.length > 2 &&
          `${toFollow.followedBy.length - 2} and others`}
      </p>
      <UserCard
        photo={toFollow.img}
        name={toFollow.name}
        account={toFollow.account}
      >
        <Button>Follow</Button>
      </UserCard>
      <p className="who-to-follow-desc">{toFollow.contnet}</p>
    </div>
  );
}

export default function WhoToFollow({ data }) {
  return (
    <div className="who-to-follow">
      <h3 className="who-to-follow-title">Who to Follow</h3>
      {data.map((item) => (
        <ToFollow key={item.id} toFollow={item} />
      ))}
      <p className="show-more">Show more</p>
    </div>
  );
}
