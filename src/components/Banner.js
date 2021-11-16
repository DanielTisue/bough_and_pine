
function Banner({ title1, title2, bannerSubtitle, bannerText, children }) {
  return (
    <div className="banner-text-wrapper">
      <h1 className="title-one">{title1}</h1>
      <h1 className="title-two">{title2}</h1>
      <h2 className="banner-subtitle">{bannerSubtitle}</h2>
      <p className="banner-text">{bannerText}</p>
    </div>
  )
}

export default Banner;
