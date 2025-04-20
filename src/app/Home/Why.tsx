'use client'

const reasons = [
  {
    title: 'Certified Mobile Technicians',
    description:
      'Our team is fully certified and equipped to handle repairs and maintenance on-site, saving you time and hassle.',
    iconType: 'fa',
    icon: 'fa-screwdriver-wrench',
  },
  {
    title: 'Fast Response Time',
    description:
      "We come to you quickly — whether you're at home, work, or on the road. Reliable help whenever you need it.",
    iconType: 'fa',
    icon: 'fa-stopwatch',
  },
  {
    title: 'Transparent Pricing',
    description:
      'No hidden fees. We provide upfront quotes and honest advice so you know exactly what to expect.',
    iconType: 'fa',
    icon: 'fa-tags',
  },
  {
    title: 'Warranty on Services',
    description:
      'Enjoy peace of mind with warranties on parts and labor for all services we provide.',
    iconType: 'fa',
    icon: 'fa-shield',
  },
]

const WhyChooseUs = () => {
  return (
    <section className="section-area bg-white section-sp1">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-30">
            <div className="choose-media">
              <img src="images/about/pic6.jpg" alt="Mobile Mechanic Service" />
            </div>
          </div>
          <div className="col-lg-6 mb-30">
            <div className="heading-bx mb-30">
              <h6 className="title-ext text-primary">Why People Choose Us</h6>
              <h2 className="title mb-0">
                Dependable Service, Delivered to You
              </h2>
              <p>
                We specialize in fast, reliable mobile mechanic services.
                Whether you’re at home, work, or on the roadside — our expert
                team is ready to get you back on the road safely.
              </p>
            </div>

            <div className="row">
              {reasons.map((reason, idx) => (
                <div className="col-sm-6 mb-4" key={idx}>
                  <div className="d-flex">
                    <div className="me-3">
                      {reason.iconType === 'fa' ? (
                        <i
                          className={`fa ${reason.icon} text-primary`}
                          style={{ fontSize: '32px' }}
                        ></i>
                      ) : (
                        <i
                          className={`${reason.icon} text-primary`}
                          style={{ fontSize: '32px' }}
                        ></i>
                      )}
                    </div>
                    <div>
                      <h6 className="mb-1">{reason.title}</h6>
                      <p className="mb-0">{reason.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
