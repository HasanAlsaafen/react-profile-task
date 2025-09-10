function TrendCard({ item }) {
  return (
    <articel className="trend-card">
      <div className="trend-card-header">
        <p>{item.cat}</p>
        <p>...</p>
      </div>
      <div className="trend-card-title">
        <strong>{item.name}</strong>
      </div>
      <div className="trend-card-footer">{item.reacts}</div>
    </articel>
  );
}
export default function Trends({ data }) {
  return (
    <article className="you-might-like trends">
      <h3 style={{ color: "white", margin: "0.5em" }}>Trends For you</h3>
      {data.map((item) => {
        return <TrendCard item={item} key={item.id} />;
      })}
      <p className="show-more">read more</p>
    </article>
  );
}
