import { address, email, phoneNumber } from '@/constats'

const Contact = () => {
  return (
    <div className="page-wraper">
      <div className="page-content bg-white">
        <div
          className="page-banner ovbl-dark"
          style={{
            backgroundImage: 'url(images/banner/under-car.jpeg)',
          }}
        >
          <div className="container">
            <div className="page-banner-entry text-center">
              <h1>
                <span>Contact Us</span>
              </h1>
            </div>
          </div>
        </div>

        <section className="section-area section-sp1">
          <div className="container">
            <div className="heading-bx mb-20">
              <h6 className="title-ext text-primary">Contact Info</h6>
              <h2 className="title mb-0">
                CONTACT US FOR ANY <br />
                INFORMATIONS
              </h2>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="icon-box">
                  <h6 className="title">
                    <i className="ti-map-alt"></i>Location
                  </h6>
                  <p>{address}</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="icon-box">
                  <h6 className="title">
                    <i className="ti-id-badge"></i>Email & Phone
                  </h6>
                  <a href="javascript:void(0);">{email}</a>
                  <p>{phoneNumber}</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="icon-box">
                  <h6 className="title">
                    <i className="ti-world"></i>Follow Us
                  </h6>
                  <ul className="social-media">
                    <li>
                      <a href="javascript:void(0);" className="btn btn-primary">
                        <i className="fa-brands fa-facebook"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="section-area">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3878.6851363317423!2d-95.99060212370485!3d36.18219970229139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b6ebf47053f387%3A0xbb9d483e7b6fee11!2s519%20E%20Tecumseh%20St%2C%20Tulsa%2C%20OK%2074106!5e1!3m2!1sen!2sus!4v1745168676926!5m2!1sen!2sus"
            className="align-self-stretch d-flex"
            style={{
              width: '100%',
              minHeight: '450px',
            }}
          ></iframe>
        </div>

        <section className="section-area section-sp2">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <form
                  className="contact-form ajax-form"
                  action="script/contact.php"
                >
                  <div className="heading-bx mb-20">
                    <h6 className="title-ext text-primary">Contact Form</h6>
                    <h2 className="title mb-0">
                      DO YOU HAVE ANY
                      <br />
                      QUESTIONS
                    </h2>
                  </div>
                  <div className="ajax-message"></div>
                  <div className="row">
                    <div className="col-lg-4 col-md-6">
                      <div className="form-group">
                        <div className="input-group">
                          <input
                            name="name"
                            type="text"
                            required
                            className="form-control valid-character"
                            placeholder="Your Name"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="form-group">
                        <div className="input-group">
                          <input
                            name="email"
                            type="email"
                            className="form-control"
                            required
                            placeholder="Your Email Address"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-12">
                      <div className="form-group">
                        <div className="input-group">
                          <input
                            name="phone"
                            type="text"
                            required
                            className="form-control int-value"
                            placeholder="Your Phone"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <div className="input-group">
                          <textarea
                            name="message"
                            rows={4}
                            className="form-control"
                            placeholder="Type Message"
                            required
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <div className="input-group">
                          <div
                            className="g-recaptcha"
                            data-sitekey="<-- Put reCaptcha Site Key -->"
                            data-callback="verifyRecaptchaCallback"
                            data-expired-callback="expiredRecaptchaCallback"
                          ></div>
                          <input
                            className="form-control d-none"
                            style={{
                              display: 'none',
                            }}
                            data-recaptcha="true"
                            required
                            data-error="Please complete the Captcha"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <button
                        name="submit"
                        type="submit"
                        value="Submit"
                        className="btn btn-primary btn-lg"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>

      <button className="back-to-top fa fa-chevron-up"></button>
    </div>
  )
}

export default Contact
