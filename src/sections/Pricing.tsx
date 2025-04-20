'use client'

import React from 'react'

const pricingPlans = [
  {
    price: '21.00',
    title: 'Car Wash',
    duration: '45 Minutes',
    features: [
      'One Time Fee',
      '3 User',
      'Lifetime Availability',
      'Non Featured',
      '30 days Listing',
      '24/7 Support',
      'Select',
    ],
    highlight: false,
  },
  {
    price: '29.00',
    title: 'Break Repair',
    duration: '15 Minutes',
    features: [
      'One Time Fee',
      '3 User',
      'Lifetime Availability',
      'Non Featured',
      '30 days Listing',
      '24/7 Support',
      'Select',
    ],
    highlight: true,
    tag: 'most used',
  },
  {
    price: '39.00',
    title: 'General Service',
    duration: '20 Minutes',
    features: [
      'One Time Fee',
      '3 User',
      'Lifetime Availability',
      'Non Featured',
      '30 days Listing',
      '24/7 Support',
      'Select',
    ],
    highlight: false,
  },
  {
    price: '45.00',
    title: 'Wheel Change',
    duration: '55 Minutes',
    features: [
      'One Time Fee',
      '3 User',
      'Lifetime Availability',
      'Non Featured',
      '30 days Listing',
      '24/7 Support',
      'Select',
    ],
    highlight: false,
  },
]

const Pricing = () => {
  return (
    <section className="section-area bg-white section-sp1">
      <div className="container">
        <div className="heading-bx text-center">
          <h6 className="title-ext text-primary">PRICING</h6>
          <h2 className="title mb-0">CHOOSE BEST PLAN</h2>
          <p>
            We offer a full range of garage services to vehicle owners located
            in Tucson area. All mechanic services are performed by highly
            qualified mechanics.
          </p>
        </div>

        <div className="pricingtable-row">
          <div className="row">
            {pricingPlans.map((plan, idx) => (
              <div key={idx} className="col-xl-3 col-sm-6 mb-30">
                <div
                  className={`pricingtable-wrapper style1 ${
                    plan.highlight ? 'pricingtable-highlight' : ''
                  }`}
                >
                  {plan.highlight && (
                    <div className="pricingtable-tag">{plan.tag}</div>
                  )}
                  <div className="pricingtable-inner">
                    <div className="pricingtable-main">
                      <div className="pricingtable-price">
                        <span className="priceing-doller">$</span>
                        <span className="pricingtable-bx">{plan.price}</span>
                      </div>
                      <div className="pricingtable-title">
                        <h4>{plan.title}</h4>
                        <p>
                          <i className="la la-clock"></i> {plan.duration}
                        </p>
                      </div>
                    </div>

                    <ul className="pricingtable-features">
                      {plan.features.map((feature, featureIdx) => (
                        <li key={featureIdx}>
                          <i className="fa fa-check"></i> {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="pricingtable-footer">
                      <a href="booking.html" className="btn btn-primary">
                        Get It Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
