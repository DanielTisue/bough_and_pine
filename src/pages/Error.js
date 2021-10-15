import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';

function Error() {
  return (
  <Hero hero="landingHero">
   <div className="container container-center">
     <Banner title="404" subtitle="Error" text="This page does not exist">
        <Link to="/">
          <p className="p2">Let's go back home</p>
        </Link>
    </Banner>
    </div>
  </Hero>
  )
}

export default Error;



