export default function UserCard({ children, photo, name, account }) {
  return (
    <div className="user-card">
      <img src={photo} alt="User" className="user-card-photo" />
      <div className="user-card-info">
        <div className="user-card-name">{name}</div>
        <div className="user-card-account">{account}</div>
      </div>
      {children}
    </div>
  );
}
