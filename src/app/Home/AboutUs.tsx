'use client'

const AboutUs = () => {
  return (
    <section
      className="section-area section-sp1 bg-white"
      style={{
        backgroundImage: 'url(images/background/bg1.png)',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 mb-40">
            <div className="heading-bx mb-4">
              <h6 className="title-ext text-primary">About Us</h6>
              <h2 className="title">MOBILE MECHANICS YOU CAN TRUST</h2>
              <p>
                We provide fast, reliable, and professional mobile mechanic
                services wherever you are. Whether it's a simple oil change or
                complex engine diagnostics, our certified team brings the shop
                to your doorstep — saving you time, money, and hassle. Quality
                repairs, fair pricing, and honest service are at the heart of
                everything we do.
              </p>
            </div>
            <a href="about-1.html" className="btn btn-primary">
              Learn More
            </a>
          </div>
          <div className="col-lg-7 mb-30">
            <div className="about-media">
              <div className="media">
                <img
                  src="images/about/pic1.jpg"
                  alt="About our mobile mechanic team"
                />
              </div>
              <div className="about-contact bg-primary text-white">
                <h6 className="title-ext text-white">NEED HELP?</h6>
                <h3 className="number mb-15 text-white">+22 123 456 7890</h3>
                <p className="mb-20">
                  Need fast, on-site repairs? Call us today or book an
                  appointment — we're ready to get you back on the road quickly
                  and safely.
                </p>
                <a href="/booking" className="btn btn-light">
                  BOOK AN APPOINTMENT
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
