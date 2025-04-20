'use client'

import React from 'react'
import Image from 'next/image'

const stats = [
  { value: 25, suffix: 'K', label: 'Satisfied Clients' },
  { value: 35, suffix: '+', label: 'Winning Awards' },
  { value: 180, suffix: '+', label: 'Completed Works' },
]

const AboutSection = () => {
  return (
    <section
      className="section-area section-sp1 bg-white"
      style={{
        backgroundImage: 'url(/images/background/bg1.png)',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-30 mb-md-50">
            <div className="heading-bx">
              <h6 className="title-ext text-primary">About Us</h6>
              <h2 className="title">
                A Team of Skilled Engineers & Mechanics You Can Trust
              </h2>
              <p>
                With decades of combined experience, we deliver world-class
                automotive services tailored to meet your needs. Our passion for
                engineering excellence ensures your vehicle is always in the
                best hands.
              </p>
            </div>

            <div className="row">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="col-xl-4 col-lg-6 col-md-4 col-sm-6 col-6 mb-20"
                >
                  <div className="counter-style-1 text-center">
                    <div className="text-secondary">
                      <h2 className="text-primary">
                        <span className="counter">{stat.value}</span>
                        {stat.suffix}
                      </h2>
                    </div>
                    <h5 className="counter-text">{stat.label}</h5>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4">
              <a href="/contact" className="btn btn-primary me-3">
                Contact Us
              </a>
              <a href="/booking" className="btn btn-outline-secondary">
                Book Now
              </a>
            </div>
          </div>

          <div className="col-lg-6 mb-30">
            <div className="about-imgbox position-relative">
              <Image
                src="/images/background/hood-1.webp"
                alt="About Us"
                width={700}
                height={1000}
                className="w-100 h-auto rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
