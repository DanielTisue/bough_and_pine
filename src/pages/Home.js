import Hero from '../components/Hero';

export default function Home() {
  return (
    <>
      <Hero hero="landingHero">
        <div className="container">
          <div className="banner-text-wrapper">
            <h1>Home Page</h1>
            
          </div>
        </div>
      </Hero>
      <div className="container-center">
        <h1>More stuff</h1>
        <p className="p1">class p1</p>
        <p className="p2">class p2</p>
      </div>
      <div className="container-center">
        <h2>More stuff</h2>
        <p className="p1">class p1</p>
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
