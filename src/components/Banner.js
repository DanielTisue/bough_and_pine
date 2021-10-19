
function Banner({ title, subtitle, text, children }) {
  return (
    <div className="banner-text-wrapper">
      <h1 className="title">{title}</h1>
      <h2 className="subtitle">{subtitle}</h2>
      <div className="text-container">
      <p className="p2 section-text center-align">{text}</p>
      </div>
    </div>
  )
}

export default Banner;
