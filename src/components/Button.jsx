export default function Button({ children, bg, color, className }) {
  return (
    <button
      className={`btn ${className}`}
      style={{ backgroundColor: bg, color: color }}
    >
      {children}
    </button>
  );
}
