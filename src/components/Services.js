import { ServicesData } from './ServicesData';

function Services() {
  return (
    <>
     
        <div className="services-center">
          {ServicesData.map((services, index) => {
                return <article className="service" key={services.id}>
                        <h1 className="services-title">{services.title}</h1>
                        <h2 className="services-subtitle">{services.subtitle}</h2>
                        <p className="p2 services-text">{services.text}</p>
                       </article>
              })}
        </div>
      
    </>
  )
}

export default Services
