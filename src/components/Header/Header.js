import "./Header.css";

const Header = () => {
  return (
    <span onClick={() => window.scroll(0, 0)} className="header">
      🎬 Flix Hub 🎥
    </span>
  );
};

export default Header;
