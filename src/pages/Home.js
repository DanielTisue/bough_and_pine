import Banner from '../components/Banner';
import Hero from '../components/Hero';
import Services from '../components/Services';
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
          <Banner title="Artistic Touch" subtitle="Work" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
          <FeaturedRooms />
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
