import Banner from '../components/Banner';
import Hero from '../components/Hero';
import Services from '../components/Services';
import mainImage from '../images/livingimg3.jpg'
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
          <Banner title1="Artistic" title2="Touch" subtitle="Work" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
          </div>
          <div className="right-section">
          <img className="main-image" src={mainImage} />
          </div>
        </section>
        <section className="services">
          <Banner title="What we offer" subtitle="Services" />
          <Services />
        </section>
        <section className="process">
          <Banner title="Design Practice" subtitle="Technique" />
        </section>
        <section className="contact">
          <Banner title="Let's work together" subtitle="Collaborate" />
        </section>
      </div>
    </>
  )
}
