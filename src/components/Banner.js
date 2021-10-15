
function Banner({ title, subtitle, text, children }) {
  return (
    <div className="banner-text-wrapper">
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <p className="p2">{children}</p>
    </div>
  )
}

export default Banner;
