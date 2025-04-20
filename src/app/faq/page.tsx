'use client'

import * as Accordion from '@radix-ui/react-accordion'
import { faqList, helpOptions } from './content'
import Link from 'next/link'

const FAQPage = () => {
  const half = Math.ceil(faqList.length / 2)
  const leftFaqs = faqList.slice(0, half)
  const rightFaqs = faqList.slice(half)

  return (
    <div className="page-content bg-white">
      <div
        className="page-banner ovbl-dark"
        style={{ backgroundImage: 'url(/images/banner/engine.jpeg)' }}
      >
        <div className="container">
          <div className="page-banner-entry text-center">
            <h1 className="text-white">
              <span>FAQs</span>
            </h1>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="section-area section-sp3">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <Accordion.Root type="multiple" className="space-y-4">
              {leftFaqs.map((faq, idx) => (
                <Accordion.Item
                  key={`left-${idx}`}
                  value={`left-${idx}`}
                  className="border rounded-lg overflow-hidden"
                >
                  <Accordion.Header asChild>
                    <Accordion.Trigger className="w-full p-4 flex justify-between items-center text-left bg-gray-100 hover:bg-gray-200 font-semibold">
                      <div className="flex items-center gap-2">
                        <i className="fa fa-question-circle text-primary"></i>
                        {faq.question}
                      </div>
                      <span className="ml-2">+</span>
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="p-4 bg-white text-gray-700 border-t">
                    {faq.answer}
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>

            {/* Right Column */}
            <Accordion.Root type="multiple" className="space-y-4">
              {rightFaqs.map((faq, idx) => (
                <Accordion.Item
                  key={`right-${idx}`}
                  value={`right-${idx}`}
                  className="border rounded-lg overflow-hidden"
                >
                  <Accordion.Header asChild>
                    <Accordion.Trigger className="w-full p-4 flex justify-between items-center text-left bg-gray-100 hover:bg-gray-200 font-semibold">
                      <div className="flex items-center gap-2">
                        <i className="fa fa-question-circle text-primary"></i>
                        {faq.question}
                      </div>
                      <span className="ml-2">+</span>
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="p-4 bg-white text-gray-700 border-t">
                    {faq.answer}
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="section-area section-sp1">
        <div className="container">
          <div className="heading-bx text-center">
            <h6 className="title-ext text-primary">No helpful answer?</h6>
            <h2 className="title mb-0">Here Are Some Options</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {helpOptions.map((help, idx) => (
              <div
                key={idx}
                className="feature-container bg-gray-100 p-6 rounded-lg flex items-center"
              >
                <div className="icon-lg mr-4">
                  <div className="h-12 w-12 bg-primary rounded-full flex items-center justify-center">
                    <i className="las la-life-ring text-white text-2xl"></i>
                  </div>
                </div>
                <div className="icon-content">
                  <h5 className="ttr-tilte mb-1">{help.title}</h5>
                  <p className="mb-3">{help.text}</p>
                  <Link
                    href={help.link}
                    className="btn-link text-primary font-medium"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default FAQPage
