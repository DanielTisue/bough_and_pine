import Banner from '../components/Banner';
import Hero from '../components/Hero';
import Services from '../components/Services';
import mainImage from '../images/livingimg3.jpg';
import Title from '../components/Title';
import FeaturedRooms from '../components/FeaturedRooms';

export default function Home() {
  return (
    <>
      <Hero hero="landingHero">
        <div className="container-center">
         <h1>Title</h1>
        </div>
      </Hero>
      <div className="container-center">
        <section className="work">
          <div className="left-section">
          <Banner title1="Artistic" title2="Touch" bannerSubtitle="Work" bannerText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
          </div>
          <div className="right-section">
          <img className="main-image" src={mainImage} />
          </div>
        </section>
        <section className="services">
          <Title title="What we offer" subtitle="Services" />
          <Services />
        </section>
        <section className="process">
          <Title title="Design Practice" subtitle="Technique" />
          
          {/* Have too change left/right width and image padding/margin */}
          {/* <div className="left-section">
          <img className="main-image" src={mainImage} />
          </div>
           <div className="right-section">
          <Banner title1="Design" title2="Practice" bannerSubtitle="Technique" bannerText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
          </div> */}
        </section>
        <section className="contact">
          <Title title="Let's work together" subtitle="Collaborate" />
        </section>
      </div>
    </>
  )
}
