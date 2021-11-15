
function Banner({ title1, title2, subtitle, text, children }) {
  return (
    <div className="banner-text-wrapper">
      <h1 className="title-one">{title1}</h1>
      <h1 className="title-two">{title2}</h1>
      <h2 className="subtitle">{subtitle}</h2>
      <p className="banner-text">{text}</p>
    </div>
  )
}

export default Banner;
