'use client'
const services = [
  {
    icon: 'flaticon-fuel-1',
    title: 'OIL CHANGE',
    description:
      'Fast, on-location oil changes to keep your engine running smoothly without a trip to the shop.',
  },
  {
    icon: 'flaticon-brake',
    title: 'BRAKE REPAIR',
    description:
      'We come to you for brake inspections, repairs, and replacements to ensure your safety on the road.',
  },
  {
    icon: 'flaticon-car-4',
    title: 'TIRES',
    description:
      'Mobile tire rotations, balancing, and wheel services — done wherever you are.',
  },
  {
    icon: 'flaticon-check-2',
    title: 'GENERAL SERVICE',
    description:
      'Full diagnostic and maintenance services delivered to your home or office for ultimate convenience.',
  },
  {
    icon: 'flaticon-battery-2',
    title: 'CAR BATTERIES',
    description:
      'Dead battery? We offer mobile testing, replacement, and installation on the spot.',
  },
  {
    icon: 'flaticon-fuel-2',
    title: 'EMERGENCY FUEL DELIVERY',
    description:
      'Ran out of gas? We provide quick, on-location fuel delivery to get you safely back on the road.',
  },
  {
    icon: 'flaticon-repair-1',
    title: 'WHEEL CHANGE',
    description:
      'Flat tire? We provide mobile tire swaps and replacements to get you back on the road fast.',
  },
  {
    icon: 'flaticon-engine',
    title: 'ENGINE REPAIR',
    description:
      'Minor engine diagnostics and repairs handled right where your car is parked.',
  },
]

const Services = () => {
  return (
    <section
      className="section-area bg-primary service-wraper1 section-sp2"
      style={{
        backgroundImage: 'url(images/background/bg1.png)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top right',
      }}
    >
      <div className="container">
        <div className="heading-bx text-white d-lg-flex d-md-block align-items-end justify-content-between">
          <div className="clearfix">
            <h6 className="title-ext">OUR SERVICES</h6>
            <h2 className="title mb-0">WE PROVIDE BEST SERVICES</h2>
          </div>
          <div className="clearfix mt-md-20">
            <a href="service-1.html" className="btn btn-outline-light">
              View All Services
            </a>
          </div>
        </div>

        <div className="row spno">
          {services.map((service, idx) => (
            <div className="col-xl-3 col-lg-4 col-md-6 d-flex" key={idx}>
              <div className="feature-container feature-bx1 mb-sm-30 d-flex flex-column w-100 border border-white">
                <div
                  className="icon-wrapper d-flex align-items-end justify-content-center"
                  style={{ height: '100px' }}
                >
                  <div className="icon-lg text-primary">
                    <i className={service.icon}></i>
                  </div>
                </div>
                <div className="icon-content text-center flex-grow-1 d-flex flex-column">
                  <h5 className="ttr-tilte mt-3">{service.title}</h5>
                  <p className="mt-2">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
