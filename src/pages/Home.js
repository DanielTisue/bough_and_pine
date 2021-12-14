import Banner from '../components/Banner';
import BannerLong from '../components/BannerLong';
import Hero from '../components/Hero';
import Services from '../components/Services';
import mainImage from '../images/livingimg3.jpg';
import Title from '../components/Title';
// import FeaturedRooms from '../components/FeaturedRooms';

export default function Home() {
  return (
    <>
      <Hero hero="landingHero">
        <div className="container-center">
         <h1>Title</h1>
        </div>
      </Hero>
      <div className="container-center visible scrollbar-hidden">
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
    </div>
        <section className="cta">
          <Title title="Let's Design" subtitle="Consultation" />
          <a id="cta-text" href="#contact">Book now</a>
        </section>
    <div className="container-center visible scrollbar-hidden">
        <section className="process">
          <div className="left">
          <img className="second-main-image" src={mainImage} />
          </div>
           <div className="right">
          <BannerLong title1="Design" title2="Practice" bannerSubtitle="Technique" bannerText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
          </div>
        </section>
    </div>
        <section className="cta cta2">
          <Title title="What to Expect" subtitle="The How" />
          <div className="expect">
            <ul className="expect-wrapper">
              <li className="expect-wrapper-item">
                <h1 class="cta2-title">01</h1>
                <p className="p2">Book a call and discuss options</p>
              </li>
              <li className="expect-wrapper-item">
                <h1 class="cta2-title">02</h1>
                <p className="p2">Be ready to <br/> answer questions</p>
              </li>
              <li className="expect-wrapper-item">
                <h1 class="cta2-title">03</h1>
                <p className="p2" >Be ready to <br/> answer questions</p>
              </li>
            </ul>
          </div>
        </section>
    <div className="container-center visible scrollbar-hidden">
        <section className="contact">
          <Title title="Let's Talk" subtitle="Collaborate" />
        </section>
    </div>
    </>
  )
}
