// Ticker.jsx — Scrolling announcement bar
export default function Ticker() {
  const msg =
    '✦ Welcome to my portfolio — I am currently learning web and app development. Feel free to check my works';

  // Duplicate text for seamless loop
  const items = Array(6).fill(msg);

  return (
    <div className="ticker-bar" aria-label="Announcement ticker" role="marquee">
      <div className="ticker-track">
        {items.map((text, i) => (
          <span className="ticker-item" key={i} aria-hidden={i > 0}>
            {text}&nbsp;&nbsp;
            <span className="star" aria-hidden="true">✦</span>
            &nbsp;&nbsp;
          </span>
        ))}
      </div>
    </div>
  );
}
