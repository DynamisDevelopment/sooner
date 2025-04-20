'use client'

import Image from 'next/image'
import Link from 'next/link'

const ServicesPage = () => {
  return (
    <div className="page-content bg-white">
      {/* Inner Banner */}
      <div
        className="page-banner ovbl-dark"
        style={{ backgroundImage: 'url(/images/banner/bnr4.jpg)' }}
      >
        <div className="container">
          <div className="page-banner-entry text-center">
            <h1>
              <span>Services 2</span>
            </h1>
          </div>
        </div>
      </div>

      {/* Services */}
      <section className="section-area section-sp1">
        <div className="container">
          <div className="row">
            {services.map((service, idx) => (
              <div key={idx} className="col-xl-3 col-lg-4 col-md-6 mb-30">
                <div className={`feature-container feature-bx2 ${service.bg}`}>
                  <div className={`icon-lg ${service.color}`}>
                    <i className={service.icon}></i>
                  </div>
                  <div className="icon-content">
                    <h5 className="ttr-tilte">{service.title}</h5>
                    <p>{service.description}</p>
                    <Link
                      href={service.link}
                      className={`btn-link ${service.linkColor}`}
                    >
                      READ MORE
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment Form */}
      <section className="section-area bg-primary form-card">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3 align-self-center">
              <div className="form-head text-white mb-md-30">
                <h3 className="title">Schedule Service</h3>
                <h6 className="mb-0">
                  <span className="fw4 me-1">OR Call</span> +22 123 456 7890
                </h6>
              </div>
            </div>
            <div className="col-lg-9">
              <form>
                <div className="row sp5">
                  {formFields.map((field, idx) => (
                    <div key={idx} className="col-md-4 col-sm-6">
                      <div className="form-group">
                        {field.type === 'select' ? (
                          <select className="form-select">
                            {field.options?.map((option, optionIdx) => (
                              <option key={optionIdx}>{option}</option>
                            ))}
                          </select>
                        ) : (
                          <input
                            type="text"
                            className="form-control"
                            placeholder={field.placeholder}
                          />
                        )}
                      </div>
                    </div>
                  ))}
                  <div className="col-md-4 col-sm-6">
                    <div className="form-group">
                      <button type="submit" className="btn btn-warning w-100">
                        SUBMIT REQUEST
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Brand List */}
      <section className="section-area section-sp1 bg-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-5 col-lg-5">
              <div className="heading-bx mb-4 pe-lg-5">
                <h6 className="title-ext m-b0 text-primary">WHY CHOOSE US</h6>
                <h2 className="title">OUR PARTNERSHIPS</h2>
                <p>
                  We offer a full range of garage services to vehicle owners
                  located in Tucson area. All mechanic services are performed.
                </p>
              </div>
            </div>
            <div className="col-xl-7 col-lg-7 mb-30">
              <ul className="brand-list">
                {brandImages.map((brand, idx) => (
                  <li key={idx}>
                    <Image
                      src={brand}
                      alt="Brand Logo"
                      width={100}
                      height={60}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage

// --- Helper Data Below ---
const services = [
  {
    title: 'OIL CHANGE',
    description:
      'There are many variations of passages of Lorem Ipsum available.',
    icon: 'flaticon-fuel-1',
    link: '/service-tire-and-wheel-services.html',
    bg: '',
    color: 'text-primary',
    linkColor: '',
  },
  {
    title: 'BREAK REPAIR',
    description:
      'There are many variations of passages of Lorem Ipsum available.',
    icon: 'flaticon-brake',
    link: '/service-brake-repair.html',
    bg: 'bg-secondary',
    color: '',
    linkColor: '',
  },
  {
    title: 'CAR WHEELS',
    description:
      'There are many variations of passages of Lorem Ipsum available.',
    icon: 'flaticon-car-4',
    link: '/service-air-conditioning.html',
    bg: 'bg-warning',
    color: '',
    linkColor: 'text-secondary',
  },
  {
    title: 'GENERAL SERVICE',
    description:
      'There are many variations of passages of Lorem Ipsum available.',
    icon: 'flaticon-check-2',
    link: '/service-lube-oil-and-filters.html',
    bg: 'bg-primary',
    color: '',
    linkColor: '',
  },
  {
    title: 'CAR BATTERIES',
    description:
      'There are many variations of passages of Lorem Ipsum available.',
    icon: 'flaticon-battery-2',
    link: '/service-tire-and-wheel-services.html',
    bg: 'bg-secondary',
    color: '',
    linkColor: '',
  },
  {
    title: 'CAR PAINTING',
    description:
      'There are many variations of passages of Lorem Ipsum available.',
    icon: 'flaticon-paint',
    link: '/service-brake-repair.html',
    bg: 'bg-warning',
    color: '',
    linkColor: 'text-secondary',
  },
  {
    title: 'WHEEL CHANGE',
    description:
      'There are many variations of passages of Lorem Ipsum available.',
    icon: 'flaticon-repair-1',
    link: '/service-belts-and-hoses.html',
    bg: 'bg-primary',
    color: '',
    linkColor: '',
  },
  {
    title: 'ENGINE REPAIR',
    description:
      'There are many variations of passages of Lorem Ipsum available.',
    icon: 'flaticon-engine',
    link: '/service-lube-oil-and-filters.html',
    bg: '',
    color: 'text-primary',
    linkColor: '',
  },
]

const formFields = [
  { type: 'text', placeholder: 'Name*' },
  { type: 'text', placeholder: 'Email*' },
  { type: 'text', placeholder: 'Phone*' },
  {
    type: 'select',
    options: [
      'Type of Service*',
      'Oil change',
      'Break repair',
      'Car wheels',
      'General service',
      'Car batteries',
      'Car painting',
      'Wheel change',
      'Engine repair',
    ],
  },
  { type: 'text', placeholder: 'How Can We Help you*' },
]

const brandImages = [
  '/images/why-choose/car-1.png',
  '/images/why-choose/car-2.png',
  '/images/why-choose/car-3.png',
  '/images/why-choose/car-4.png',
  '/images/why-choose/car-5.png',
  '/images/why-choose/car-6.png',
]
