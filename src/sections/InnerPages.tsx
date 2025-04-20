'use client'

import React from 'react'
import Link from 'next/link'

const menuItems = [
  { label: 'About Us', href: '/about', icon: 'las la-question-circle' },
  {
    label: 'Our Services',
    href: '/services/engine-diagnostics',
    icon: 'las la-cog',
  },
  { label: 'Job & Career', href: '/job-career.html', icon: 'las la-user-plus' },
  { label: 'Pricing', href: '/pricing-plan.html', icon: 'las la-table' },
  { label: 'FAQ', href: '/faq', icon: 'las la-quote-left' },
  { label: 'Contact Us', href: '/contact', icon: 'las la-user-tie' },
]

const InnerPagesMenu = () => {
  return (
    <div className="col-lg-4 col-md-5 mb-30">
      <aside className="sticky-top">
        <div className="widget">
          <h5 className="widget-title">Explore Our Pages</h5>
          <ul className="service-menu style-1">
            {menuItems.map((item, idx) => (
              <li key={idx}>
                <Link href={item.href}>
                  <span className="me-2">{item.label}</span>
                  <i className={item.icon}></i>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  )
}

export default InnerPagesMenu
