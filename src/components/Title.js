function Title ({ title, subtitle, text, children }) {
  return (
    <div id="cta-text-wrapper" className="title-text-wrapper">
      <h1 className="title">{title}</h1>
      <h2 className="subtitle">{subtitle}</h2>
      <p className="title-text">{text}</p>
    </div>
  )
}

export default Title;
