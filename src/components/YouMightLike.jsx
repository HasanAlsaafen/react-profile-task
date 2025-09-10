import UserCard from "./UserCard";
import Button from "./Button";
export default function YouMightLike({ data }) {
  return (
    <article className="you-might-like">
      <h3 style={{ color: "white", margin: "0.5em" }}>You might like</h3>
      {data.map((item) => {
        return (
          <UserCard
            key={item.id}
            name={item.name}
            account={item.account}
            photo={item.img}
          >
            <Button
              color={"var('--primary-color')"}
              bg={"var('--secondery-color')"}
            >
              follow
            </Button>
          </UserCard>
        );
      })}{" "}
      <p className="show-more">read more</p>
    </article>
  );
}
