import ServiceBlock from './ServiceBlock'

export default function ServiceSection() {
  const OUR_SERVICES_DATA = [
    {
      serviceTitle: 'web design',
      imgUrl: 'https://assets.codepen.io/6060109/agency-service-1.png'
    },
    {
      serviceTitle: 'ecommerce',
      imgUrl: 'https://assets.codepen.io/6060109/agency-service-2.png'
    },
    {
      serviceTitle: 'automation',
      imgUrl: 'https://assets.codepen.io/6060109/agency-service-3.png'
    },
  ]

  return (
    <section className="service">
      <h2>Our Services</h2>
      <div className="block-container">
        {
          OUR_SERVICES_DATA.map(service => {
            return (
              <ServiceBlock
                serviceTitle={service.serviceTitle}
                imgUrl={service.imgUrl}
                key={service.serviceTitle + service.imgUrl}
              />)
          })
        }
      </div>
    </section>
  )
}