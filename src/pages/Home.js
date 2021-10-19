import Banner from '../components/Banner';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <>
      <Hero hero="landingHero">
        <div className="container">
          <Banner title="Luxury Home" subtitle="Decor" text="TLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
        </div>
      </Hero>
      <div className="container-center">
        <p className="p2 center-align">Menu</p>
        <h1>More Stuff</h1>
        <h2>Branding</h2>
        <p className="p1">class p1</p>

        <div className="text-container">
          <p className="p2">class p2: class p2: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
      </div>
      <div className="container-center">
        <h1>More Stuff</h1>
        <h2>Branding</h2>
        <div className="text-container">
          <p className="p2">class p2: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
        <p className="p2">class p2</p>
      </div>
      <div className="container-center">
        <h3>More stuff</h3>
        <p className="p1">class p1</p>
        <p className="p2">class p2</p>
      </div>
     
      
    </>
  )
}
