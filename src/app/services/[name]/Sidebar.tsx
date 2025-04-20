'use client'

import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { servicesMenu, helpContent } from './content'

const Sidebar = () => {
  const { name } = useParams() as { name: string }

  return (
    <aside className="sticky-top pb-1">
      {/* Services Menu */}
      <div className="widget">
        <ul className="service-menu">
          {servicesMenu.map((service, idx) => {
            // Extract the last part of slug to compare
            const slugName = service.slug.split('/').pop()

            const isActive = slugName === name

            return (
              <li key={idx} className={isActive ? 'active' : ''}>
                <Link
                  href={service.slug}
                  className="d-flex justify-between align-items-center"
                >
                  <span>{service.name}</span>
                  <i className="fa fa-angle-right"></i>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>

      {/* Help Box */}
      <div className="widget">
        <div className="help-bx">
          <Image
            src={helpContent.img}
            alt="Help"
            width={300}
            height={200}
            className="w-100 object-cover"
          />
          <div className="info text-center mt-4">
            <h5 className="title">How Can We Help</h5>
            <p>{helpContent.text}</p>
            <Link href={helpContent.buttonLink} className="btn btn-primary">
              {helpContent.buttonText}
            </Link>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
