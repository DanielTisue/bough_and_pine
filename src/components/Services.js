import { ServicesData } from './ServicesData';

function Services() {
  return (
    <>
      <section className="services">
        <h1 className="title services-headline">Services</h1>
        <div className="services-center">
          {ServicesData.map((services, index) => {
                return <article className="service" key={services.id}>
                        <h1 className="services-title">{services.title}</h1>
                        <h2 className="services-subtitle">{services.subtitle}</h2>
                        <p className="p2 services-text">{services.text}</p>
                       </article>
              })}
        </div>

      </section>
    </>
  )
}

export default Services
