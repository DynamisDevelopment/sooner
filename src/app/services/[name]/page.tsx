'use client'

import { useParams } from 'next/navigation'
import { servicesContent } from './content'
import Sidebar from './Sidebar'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const ServicePage = () => {
  const { name } = useParams()

  //   @ts-ignore
  const service = servicesContent[name]

  if (!service) {
    return <div>Service not found</div>
  }

  return (
    <div className="page-content bg-white">
      {/* Inner Banner */}
      <div
        className="page-banner ovbl-dark"
        style={{ backgroundImage: `url(${service.bannerImage})` }}
      >
        <div className="container">
          <div className="page-banner-entry text-center">
            <h1>
              <span>{service.title}</span>
            </h1>
          </div>
        </div>
      </div>

      <section className="section-area section-sp1 bg-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-5">
              <Sidebar />
            </div>

            <div className="col-lg-8 col-md-7 mb-30">
              <div className="ttr-media mb-30">
                <img src={service.serviceImage} alt={service.title} />
              </div>

              <div className="mb-30">
                <div className="head-text mb-30">
                  <h4 className="title mb-10">{service.title}</h4>
                  <p>{service.description}</p>
                </div>

                <div className="row">
                  <div className="col-lg-6">
                    <ul className="list-check-squer mb-0">
                      {/* @ts-ignore */}
                      {service.checklistLeft.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul className="list-check-squer mb-0">
                      {/* @ts-ignore */}
                      {service.checklistRight.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* FAQs */}
              <div className="clearfix">
                <div className="head-text mb-30">
                  <h4 className="title mb-10">POPULAR QUESTIONS</h4>
                </div>

                <Accordion
                  type="multiple" // allow multiple to be open at once
                  className="ttr-accordion style1"
                  defaultValue={[]}
                >
                  {/* @ts-ignore */}
                  {service.faq.map((item, idx) => (
                    <AccordionItem
                      key={idx}
                      value={`item-${idx}`}
                      className="card mb-2"
                    >
                      <AccordionTrigger className="bg-red-500 text-white px-4 text-2xl">
                        <div className="flex items-center gap-2">
                          <i className="fa fa-question-circle"></i>
                          <span className="font-semibold">{item.question}</span>
                        </div>
                      </AccordionTrigger>

                      <AccordionContent className="text-black px-2 text-md lg:text-lg">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServicePage
