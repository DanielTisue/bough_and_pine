import Banner from '../components/Banner';
import Hero from '../components/Hero';
import Services from '../components/Services';

export default function Home() {
  return (
    <>
      <Hero hero="landingHero">
        <div className="container-center">
          <Banner title="Luxury Home" subtitle="Decor" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
        </div>
      </Hero>
      <div className="container-center">
          <Banner title="Artistic Touch" subtitle="Work" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
      </div>
      <div className="container-center">
          <Banner title="Design Practice" subtitle="Technique" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
      </div>
     
      <div className="container-center">
       <Services />
      </div>
     
     
      
    </>
  )
}
