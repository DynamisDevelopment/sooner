'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import Image from 'next/image'

const testimonials = [
  {
    name: '- Michel Bohman',
    message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
    blandit risus at quam hendrerit, quis egestas ligula imperdiet. Cras
    ultricies massa nec nulla tincidunt, vel viverra lacus ultricies.`,
    image: '/images/testimonials/pic1.jpg',
  },
  {
    name: '- Sonar Moyna',
    message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
    blandit risus at quam hendrerit, quis egestas ligula imperdiet. Cras
    ultricies massa nec nulla tincidunt, vel viverra lacus ultricies.`,
    image: '/images/testimonials/pic2.jpg',
  },
  {
    name: '- Kalina Mollika',
    message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
    blandit risus at quam hendrerit, quis egestas ligula imperdiet. Cras
    ultricies massa nec nulla tincidunt, vel viverra lacus ultricies.`,
    image: '/images/testimonials/pic3.jpg',
  },
]

const Reviews = () => {
  return (
    <section
      className="section-area section-sp2 bg-gray ovbl-dark testimonial-area"
      style={{
        backgroundImage: 'url(/images/background/bg1.png)',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
      }}
    >
      <div className="container">
        <div className="heading-bx text-white d-lg-flex d-md-block align-items-end justify-content-between">
          <div className="clearfix mb-2">
            <h6 className="title-ext text-primary">TESTIMONIAL</h6>
            <h2 className="title mb-0">WHAT CLIENTS SAY</h2>
          </div>
          {/* <div className="clearfix mt-md-20">
            <a href="#" className="btn btn-outline-primary">
              View All Clients
            </a>
          </div> */}
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{
            clickable: true,
            el: '.custom-pagination',
          }}
          autoplay={{ delay: 5000 }}
          loop
          spaceBetween={30}
          slidesPerView={1}
          className="testimonial-carousel-1"
        >
          {testimonials.map((testimonial, idx) => (
            <SwiperSlide key={idx}>
              <div className="testimonial-bx">
                <div className="testimonial-content">
                  <p>{testimonial.message}</p>
                </div>
                <div className="client-info">
                  <div className="testimonial-info">
                    <h6 className="name">{testimonial.name}</h6>
                  </div>
                  <div className="testimonial-thumb">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-circle w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="relative flex flex-row justify-center custom-pagination"></div>
    </section>
  )
}

export default Reviews
