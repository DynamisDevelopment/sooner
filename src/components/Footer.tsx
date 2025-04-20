'use client'

import React from 'react'

const solutionsLinks = [
  { label: 'About Us', href: '/about-1.html' },
  { label: 'Engine Diagnostics', href: '/service-engine-diagnostics.html' },
  { label: 'Booking', href: '/booking' },
  { label: 'Oil & Filter Changes', href: '/service-lube-oil-and-filters.html' },
  { label: 'Our Services', href: '/service-1.html' },
  { label: 'Belts & Hoses', href: '/service-belts-and-hoses.html' },
  { label: 'Job Opportunities', href: '/job-career.html' },
  { label: 'Brake Repair', href: '/service-brake-repair.html' },
  { label: 'Meet Our Team', href: '/team.html' },
  { label: 'Air Conditioning Repair', href: '/service-air-conditioning.html' },
  { label: 'Contact Us', href: '/contact' },
  {
    label: 'Tire & Wheel Services',
    href: '/service-tire-and-wheel-services.html',
  },
]

const footerLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about-1.html' },
  { label: 'FAQs', href: '/faq-1.html' },
  { label: 'Services', href: '/service-1.html' },
  { label: 'Contact', href: '/contact' },
]

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      {/* Top Info Bar */}
      <div className="footer-info bg-primary">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4 mb-30">
              <div className="footer-logo">
                <img src="/images/logo2.png" alt="Sooners Mobile Mechanics" />
              </div>
            </div>
            <div className="col-md-4 mb-30">
              <div className="feature-container left footer-info-bx">
                <div className="icon-lg">
                  <span className="icon-cell">
                    <img src="/images/icon/contact/icon3.png" alt="Location" />
                  </span>
                </div>
                <div className="icon-content">
                  <p>519 East Tecumseh St, Tulsa, OK 74106</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-30">
              <div className="feature-container left footer-info-bx">
                <div className="icon-lg">
                  <span className="icon-cell">
                    <img src="/images/icon/contact/icon1.png" alt="Phone" />
                  </span>
                </div>
                <div className="icon-content">
                  <p>+1 539-529-7029</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-top bt0">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-30">
              <div className="widget footer_widget">
                <h5 className="footer-title">About Our Company</h5>
                <p className="mb-20">
                  Fast, professional, and reliable — Sooners Mobile Mechanics
                  brings trusted car repairs directly to your location. Your
                  convenience and safety are our priorities.
                </p>
                <div className="ft-content">
                  <i className="fa fa-phone"></i>
                  <span>Talk To Our Support</span>
                  <h4>+1 (123) 456-7890</h4>
                </div>
              </div>
            </div>

            <div className="col-lg-6 mb-30">
              <div className="widget widget-link-2">
                <h5 className="footer-title">Our Services</h5>
                <ul>
                  {solutionsLinks.map((link, idx) => (
                    <li key={idx}>
                      <a href={link.href}>{link.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-2 mb-md-0">
              <p className="mb-0">
                © {currentYear} Sooners Mobile Mechanics. All rights reserved.
              </p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <ul className="widget-link">
                {footerLinks.map((link, idx) => (
                  <li key={idx}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
