export default function UserCard({
  children,
  photo,
  name,
  account,
  className,
}) {
  return (
    <div className={`user-card ${className}`}>
      <div className="user-card-upper">
        <img src={photo} alt="User" className="user-card-photo" />
        <div className="user-card-info">
          <div className="user-card-name">{name}</div>
          <div className="user-card-account">{account}</div>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}
