function BannerLong({ title1, title2, bannerSubtitle, bannerText, children }) {
  return (
    <div className="bannerLong-text-wrapper">
      <h1 className="titleLong-one">{title1}</h1>
      <h1 className="titleLong-two">{title2}</h1>
      <h2 className="bannerLong-subtitle">{bannerSubtitle}</h2>
      <p className="bannerLong-text">{bannerText}</p>
    </div>
  )
}

export default BannerLong;