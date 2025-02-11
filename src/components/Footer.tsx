const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-info bg-primary">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3 col-md-6 col-sm-6 mb-30">
              <div className="footer-logo">
                <img src="images/logo2.png" alt="" />
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 mb-30">
              <div className="feature-container left footer-info-bx">
                <div className="icon-lg">
                  <span className="icon-cell">
                    <img src="images/icon/contact/icon3.png" alt="" />
                  </span>
                </div>
                <div className="icon-content">
                  <p>2005 Stokes Isle Apt. 896, Venaville 10010, USA</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 mb-30">
              <div className="feature-container left footer-info-bx">
                <div className="icon-lg">
                  <span className="icon-cell">
                    <img src="images/icon/contact/icon1.png" alt="" />
                  </span>
                </div>
                <div className="icon-content">
                  <p>
                    +001 123 456 790 <br />
                    (02) 3424 44 00
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 mb-30">
              <div className="feature-container left footer-info-bx">
                <div className="icon-lg">
                  <span className="icon-cell">
                    <img src="images/icon/contact/icon2.png" alt="" />
                  </span>
                </div>
                <div className="icon-content">
                  <p>
                    info@yourdomain.com <br />
                    example@support.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-top bt0">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-md-6">
              <div className="widget footer_widget">
                <h5 className="footer-title">Company</h5>
                <p className="mb-20">
                  Need a special repair service? we are happy to fulfil every
                  request in order to exceed your expectations
                </p>
                <div className="ft-content">
                  <i className="fa fa-phone"></i>
                  <span>Talk To Our Support</span>
                  <h4>+22 123 456 7890 </h4>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="widget widget-link-2">
                <h5 className="footer-title">Our Solutions</h5>
                <ul>
                  <li>
                    <a href="about-1.html">About Us</a>
                  </li>
                  <li>
                    <a href="service-engine-diagnostics.html">
                      Engine Services
                    </a>
                  </li>
                  <li>
                    <a href="booking.html">Booking</a>
                  </li>
                  <li>
                    <a href="service-lube-oil-and-filters.html">
                      Oil And Filters
                    </a>
                  </li>
                  <li>
                    <a href="service-1.html">Our Services</a>
                  </li>
                  <li>
                    <a href="service-belts-and-hoses.html">Belts And Hoses</a>
                  </li>
                  <li>
                    <a href="job-career.html">Job Career</a>
                  </li>
                  <li>
                    <a href="service-brake-repair.html">Brake Repair</a>
                  </li>
                  <li>
                    <a href="team.html">Out Team</a>
                  </li>
                  <li>
                    <a href="service-air-conditioning.html">Air Conditioning</a>
                  </li>
                  <li>
                    <a href="contact-1.html">Contact Us</a>
                  </li>
                  <li>
                    <a href="service-tire-and-wheel-services.html">
                      Tire And Wheel
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="widget recent-posts-entry">
                <h5 className="footer-title">Latest news</h5>
                <div className="widget-post-bx">
                  <div className="widget-post clearfix">
                    <div className="ttr-post-media">
                      <img src="images/blog/recent-blog/pic1.jpg" alt="" />
                    </div>
                    <div className="ttr-post-info">
                      <h6 className="post-title">
                        <a href="blog-details.html">
                          Precious Tips To Help You Get Better.
                        </a>
                      </h6>
                      <ul className="post-meta">
                        <li className="date">
                          <a href="blog-details.html">
                            <i className="fa fa-calendar"></i> 15 Aug 2021
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="widget-post clearfix">
                    <div className="ttr-post-media">
                      <img src="images/blog/recent-blog/pic2.jpg" alt="" />
                    </div>
                    <div className="ttr-post-info">
                      <h6 className="post-title">
                        <a href="blog-details.html">
                          Ten Doubts You Should Clarify About.
                        </a>
                      </h6>
                      <ul className="post-meta">
                        <li className="date">
                          <a href="blog-details.html">
                            <i className="fa fa-calendar"></i> 15 Aug 2021
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="widget widget_info">
                <h5 className="footer-title">Subscribe Now</h5>
                <p className="mb-20">
                  Weekly Breaking News Analysis And Cutting Edge Advices On Job
                  Searching.
                </p>
                <form
                  className="subscribe-form subscription-form mb-30"
                  action="script/mailchamp.php"
                  method="post"
                >
                  <div className="ajax-message"></div>
                  <div className="input-group">
                    <input
                      name="email"
                      required={true}
                      className="form-control"
                      placeholder="Email Address"
                      type="email"
                    />
                    <div className="input-group-append">
                      <button
                        name="submit"
                        value="Submit"
                        type="submit"
                        className="btn w-100 btn-primary radius-sm"
                      >
                        Send
                      </button>
                    </div>
                  </div>
                </form>
                <ul className="list-inline ft-social-bx">
                  <li>
                    <a href="javascript:void(0);" className="btn button-sm">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0);" className="btn button-sm">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0);" className="btn button-sm">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0);" className="btn button-sm">
                      <i className="fa fa-google-plus"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 text-center text-md-start">
              <p className="mb-0">
                © Copyright Serfix 2022. All right reserved.
              </p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 text-center text-md-end">
              <ul className="widget-link">
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="about-1.html">About</a>
                </li>
                <li>
                  <a href="faq-1.html">FAQs</a>
                </li>
                <li>
                  <a href="service-1.html">Services</a>
                </li>
                <li>
                  <a href="contact-1.html">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
