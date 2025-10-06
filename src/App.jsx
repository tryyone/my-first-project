import "./App.css";

function Card({ name, img, role, bio, socials, onSocialClick }) {
  return (
    <div className="card">
      <img src="https://i.pinimg.com/originals/21/11/74/978673980.jpg" alt="img" />
      <div className="content">
        <h2>{name}</h2>
        <h3>{role}</h3>
        <p>{bio}</p>
        <div className="socials">
          {socials.map((social) => (
            <button
              key={social}
              onClick={() => onSocialClick(social)}
              className="social-btn"
            >
              <i className={`fa-brands fa-${social}`}></i>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;
