import Meta from '../components/Meta'
import ServiceCard from '../components/ServiceCard'

const services = [
  {
    title: 'Oil Change',
    description: 'Quick and efficient oil change service.',
    link: '/services/oil-change',
    icon: '🛢️',
  },
  {
    title: 'Brake Repair',
    description: 'Ensure safety with our brake repair.',
    link: '/services/brake-repair',
    icon: '🚗',
  },
]

const Home: React.FC = () => (
  <>
    <div className="page-content bg-white">
      <div className="ttr-slider style-2">
        <div className="swiper-container ttr-swiper01">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="slider-img">
                <img src="images/slider/slide3.jpg" alt="" />
              </div>
              <div className="slider-content container text-center text-white">
                <div className="content-inner">
                  <h6 className="sub-title" data-swiper-parallax="-200">
                    best service ever
                  </h6>
                  <h2 className="title" data-swiper-parallax="-400">
                    Save in our Hands
                  </h2>
                  <div className="car-wheel wheel2" data-swiper-parallax="-600">
                    <img src="images/slider/car2.png" alt="" />
                    <div className="wheel-1">
                      <img src="images/slider/wheel2.png" alt="" />
                    </div>
                    <div className="wheel-2">
                      <img src="images/slider/wheel2.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>

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
                <h6 className="title-ext text-primary">about Us</h6>
                <h2 className="title">
                  WE'RE A COMPANY OF TALENTED ENGINEERS &amp; MECHANICS
                </h2>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable.
                </p>
              </div>
              <a href="about-1.html" className="btn btn-primary">
                About Us
              </a>
            </div>
            <div className="col-lg-7 mb-30">
              <div className="about-media">
                <div className="media">
                  <img src="images/about/pic1.jpg" alt="" />
                </div>
                <div className="about-contact bg-primary text-white">
                  <h6 className="title-ext text-white">WANT TO TALK?</h6>
                  <h3 className="number mb-15 text-white">+22 123 456 7890 </h3>
                  <p className="mb-20">
                    Need a special repair service? we are happy to fulfil every
                    request in order to exceed your expe
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

      <section
        className="section-area bg-primary service-wraper1 section-sp2"
        style={{
          backgroundImage: 'url(images/background/bg1.png)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top right',
        }}
      >
        <div className="container">
          <div className="heading-bx text-white d-lg-flex d-md-block align-items-end justify-content-between">
            <div className="clearfix">
              <h6 className="title-ext">OUR SERVICES</h6>
              <h2 className="title mb-0">WE PROVIDE BEST SERVICES</h2>
            </div>
            <div className="clearfix mt-md-20">
              <a href="service-1.html" className="btn btn-outline-light">
                View All Service
              </a>
            </div>
          </div>
          <div className="row spno">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="feature-container bg-gray-alt feature-bx1 mb-sm-30">
                <div className="icon-lg mb-10 text-primary">
                  <i className="flaticon-fuel-1"></i>
                </div>
                <div className="icon-content">
                  <h5 className="ttr-tilte">OIL CHANGE</h5>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available.
                  </p>
                  <a
                    href="service-lube-oil-and-filters.html"
                    className="btn-link"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="feature-container feature-bx1 mb-sm-30">
                <div className="icon-lg mb-10 text-primary">
                  <i className="flaticon-brake"></i>
                </div>
                <div className="icon-content">
                  <h5 className="ttr-tilte">BREAK REPAIR</h5>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available.
                  </p>
                  <a href="service-brake-repair.html" className="btn-link">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="feature-container bg-gray-alt feature-bx1 mb-sm-30">
                <div className="icon-lg mb-10 text-primary">
                  <i className="flaticon-car-4"></i>
                </div>
                <div className="icon-content">
                  <h5 className="ttr-tilte">CAR WHEELS</h5>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available.
                  </p>
                  <a
                    href="service-tire-and-wheel-services.html"
                    className="btn-link"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="feature-container feature-bx1 mb-sm-30">
                <div className="icon-lg mb-10 text-primary">
                  <i className="flaticon-check-2"></i>
                </div>
                <div className="icon-content">
                  <h5 className="ttr-tilte">GENERAL SERVICE</h5>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available.
                  </p>
                  <a href="service-belts-and-hoses.html" className="btn-link">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="feature-container feature-bx1 mb-sm-30">
                <div className="icon-lg mb-10 text-primary">
                  <i className="flaticon-battery-2"></i>
                </div>
                <div className="icon-content">
                  <h5 className="ttr-tilte">CAR BATTERIES</h5>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available.
                  </p>
                  <a
                    href="service-tire-and-wheel-services.html"
                    className="btn-link"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="feature-container bg-gray-alt feature-bx1 mb-sm-30">
                <div className="icon-lg mb-10 text-primary">
                  <i className="flaticon-paint"></i>
                </div>
                <div className="icon-content">
                  <h5 className="ttr-tilte">CAR PAINTING</h5>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available.
                  </p>
                  <a href="service-air-conditioning.html" className="btn-link">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="feature-container active feature-bx1 mb-sm-30">
                <div className="icon-lg mb-10 text-primary">
                  <i className="flaticon-repair-1"></i>
                </div>
                <div className="icon-content">
                  <h5 className="ttr-tilte">WHEEL CHANGE</h5>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available.
                  </p>
                  <a
                    href="service-tire-and-wheel-services.html"
                    className="btn-link"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="feature-container bg-gray-alt feature-bx1">
                <div className="icon-lg mb-10 text-primary">
                  <i className="flaticon-engine"></i>
                </div>
                <div className="icon-content">
                  <h5 className="ttr-tilte">ENGINE REPAIR</h5>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available.
                  </p>
                  <a
                    href="service-engine-diagnostics.html"
                    className="btn-link"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-area bg-white section-sp1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-30">
              <div className="choose-media">
                <img src="images/about/pic6.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-6 mb-30">
              <div className="heading-bx mb-30">
                <h6 className="title-ext text-primary">WHY PEOPLE CHOOSE US</h6>
                <h2 className="title mb-0">WHY CHOOSE US</h2>
                <p>
                  We offer a full range of garage services to vehicle owners
                  located in Tucson area. All mechanic services are performed by
                  highly qualified mechanics. We can handle any car problem.
                </p>
              </div>
              <div className="progress-area">
                <div className="progress-box style1 appear" data-percent="65%">
                  <div className="progress-info">
                    <h6 className="title">Quality Services</h6>
                    <h6 className="progress-value">65%</h6>
                  </div>
                  <div className="progress">
                    <div className="progress-bar bg-primary"></div>
                  </div>
                </div>
                <div className="progress-box style1 appear" data-percent="85%">
                  <div className="progress-info">
                    <h6 className="title">Experienced Technicials</h6>
                    <h6 className="progress-value">85%</h6>
                  </div>
                  <div className="progress">
                    {/* <div className="progress-bar bg-primary" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div> */}
                  </div>
                </div>
                <div className="progress-box style1 appear" data-percent="70%">
                  <div className="progress-info">
                    <h6 className="title">Long Term Warranty</h6>
                    <h6 className="progress-value">70%</h6>
                  </div>
                  <div className="progress">
                    {/* <div className="progress-bar bg-primary" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div> */}
                  </div>
                </div>
              </div>
              <a href="about-1.html" className="btn btn-primary">
                READ MORE
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-area">
        <div className="portfolio-carousel owl-none owl-carousel magnific-image">
          <div className="item">
            <div className="portfolio-box style-1">
              <div className="media">
                <img src="images/services/pic1.jpg" alt="" />
                <div className="portfolio-overlay">
                  <ul>
                    <li>
                      <a
                        href="service-engine-diagnostics.html"
                        className="ttr-icon"
                      >
                        <i className="la la-link"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="images/services/pic1.jpg"
                        className="magnific-anchor ttr-icon"
                      >
                        <i className="la la-plus"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="info">
                <h5 className="title">
                  <a href="service-engine-diagnostics.html">
                    <i className="flaticon-fuel-1"></i> OIL CHANGE
                  </a>
                </h5>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="portfolio-box style-1">
              <div className="media">
                <img src="images/services/pic3.jpg" alt="" />
                <div className="portfolio-overlay">
                  <ul>
                    <li>
                      <a
                        href="service-lube-oil-and-filters.html"
                        className="ttr-icon"
                      >
                        <i className="la la-link"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="images/services/pic3.jpg"
                        className="magnific-anchor ttr-icon"
                      >
                        <i className="la la-plus"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="info">
                <h5 className="title">
                  <a href="service-lube-oil-and-filters.html">
                    <i className="flaticon-repair-1"></i> BREAK REPAIR
                  </a>
                </h5>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="portfolio-box style-1">
              <div className="media">
                <img src="images/services/pic4.jpg" alt="" />
                <div className="portfolio-overlay">
                  <ul>
                    <li>
                      <a
                        href="service-belts-and-hoses.html"
                        className="ttr-icon"
                      >
                        <i className="la la-link"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="images/services/pic4.jpg"
                        className="magnific-anchor ttr-icon"
                      >
                        <i className="la la-plus"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="info">
                <h5 className="title">
                  <a href="service-belts-and-hoses.html">
                    <i className="flaticon-car-4"></i> CAR WHEELS
                  </a>
                </h5>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="portfolio-box style-1">
              <div className="media">
                <img src="images/services/pic2.jpg" alt="" />
                <div className="portfolio-overlay">
                  <ul>
                    <li>
                      <a
                        href="service-air-conditioning.html"
                        className="ttr-icon"
                      >
                        <i className="la la-link"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="images/services/pic2.jpg"
                        className="magnific-anchor ttr-icon"
                      >
                        <i className="la la-plus"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="info">
                <h5 className="title">
                  <a href="service-air-conditioning.html">
                    <i className="flaticon-check-2"></i> GENERAL SERVICE
                  </a>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-area bg-primary form-card">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3 align-self-center">
              <div className="form-head text-white mb-md-30">
                <h3 className="title">Schedule Service</h3>
                <h6 className="mb-0">
                  <span className="fw4 me-1">OR Call</span> +22 123 456 7890
                </h6>
              </div>
            </div>
            <div className="col-lg-9">
              <form>
                <div className="row sp5">
                  <div className="col-md-4 col-sm-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name*"
                      />
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Email*"
                      />
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Phone*"
                      />
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="form-group">
                      <select className="form-select">
                        <option>Type of Service*</option>
                        <option>Oil change</option>
                        <option>Break repair</option>
                        <option>Car wheels</option>
                        <option>General service</option>
                        <option>Car batteries</option>
                        <option>Car painting</option>
                        <option>Wheel change</option>
                        <option>Engine repair</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="How Can We Help you*"
                      />
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="form-group">
                      <button type="submit" className="btn btn-warning w-100">
                        SUBMIT REQUEST
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="section-area section-sp1">
        <div className="container">
          <div className="heading-bx text-center">
            <h6 className="title-ext text-primary">Team Member</h6>
            <h2 className="title mb-0">OUR TEAM MEMBER</h2>
            <p>
              We offer a full range of garage services to vehicle owners located
              in Tucson area. All mechanic services are performed by highly
              qualified mechanics.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="team-member style-1 mb-30">
                <div className="team-media">
                  <img src="images/team/team1.jpg" alt="" />
                </div>
                <div className="team-info">
                  <span className="text-primary">CEO & FOUNDER</span>
                  <h4 className="title">
                    <a href="team-details.html">Michel H. Bohman</a>
                  </h4>
                  <ul className="icon-list">
                    <li>
                      <i className="fa fa-phone"></i> (007) 123 456 7890
                    </li>
                    <li>
                      <i className="fa fa-envelope-o"></i> info@example.com
                    </li>
                  </ul>
                  <ul className="social-media">
                    <li>
                      <a href="javascript:void(0);" className="btn btn-primary">
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" className="btn btn-primary">
                        <i className="fa fa-google-plus"></i>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" className="btn btn-primary">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" className="btn btn-primary">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="team-member style-1 mb-30">
                <div className="team-media">
                  <img src="images/team/team2.jpg" alt="" />
                </div>
                <div className="team-info">
                  <span className="text-primary">ENGINEER</span>
                  <h4 className="title">
                    <a href="team-details.html">Sonar Z. Moyna</a>
                  </h4>
                  <ul className="icon-list">
                    <li>
                      <i className="fa fa-phone"></i> (007) 123 456 7890
                    </li>
                    <li>
                      <i className="fa fa-envelope-o"></i> info@example.com
                    </li>
                  </ul>
                  <ul className="social-media">
                    <li>
                      <a href="javascript:void(0);" className="btn btn-primary">
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" className="btn btn-primary">
                        <i className="fa fa-google-plus"></i>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" className="btn btn-primary">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" className="btn btn-primary">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="team-member style-1 mb-30">
                <div className="team-media">
                  <img src="images/team/team3.jpg" alt="" />
                </div>
                <div className="team-info">
                  <span className="text-primary">WORKER</span>
                  <h4 className="title">
                    <a href="team-details.html">Kalina GH. Mollika</a>
                  </h4>
                  <ul className="icon-list">
                    <li>
                      <i className="fa fa-phone"></i> (007) 123 456 7890
                    </li>
                    <li>
                      <i className="fa fa-envelope-o"></i> info@example.com
                    </li>
                  </ul>
                  <ul className="social-media">
                    <li>
                      <a href="javascript:void(0);" className="btn btn-primary">
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" className="btn btn-primary">
                        <i className="fa fa-google-plus"></i>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" className="btn btn-primary">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" className="btn btn-primary">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="team-member style-1 mb-30">
                <div className="team-media">
                  <img src="images/team/team4.jpg" alt="" />
                </div>
                <div className="team-info">
                  <span className="text-primary">HELPER</span>
                  <h4 className="title">
                    <a href="team-details.html">Falikaz DJ. Pauls</a>
                  </h4>
                  <ul className="icon-list">
                    <li>
                      <i className="fa fa-phone"></i> (007) 123 456 7890
                    </li>
                    <li>
                      <i className="fa fa-envelope-o"></i> info@example.com
                    </li>
                  </ul>
                  <ul className="social-media">
                    <li>
                      <a href="javascript:void(0);" className="btn btn-primary">
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" className="btn btn-primary">
                        <i className="fa fa-google-plus"></i>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" className="btn btn-primary">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" className="btn btn-primary">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="section-area section-sp2 bg-gray ovbl-dark testimonial-area"
        style={{
          backgroundImage: 'url(images/background/bg1.png)',
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
            <div className="clearfix mt-md-20">
              <a href="javascript:void(0);" className="btn btn-outline-primary">
                View All Client
              </a>
            </div>
          </div>
          <div
            className="testimonial-carousel-1 owl-carousel owl-btn-1 owl-btn-center-lr dots-style-1 owl-none wow fadeIn"
            data-wow-delay="0.9s"
          >
            <div className="item">
              <div className="testimonial-bx">
                <div className="testimonial-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    blandit risus at quam hendrerit, quis egestas ligula
                    imperdiet. Cras ultricies massa nec nulla tincidunt, vel
                    viverra lacus ultricies. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Pellentesque metus odio,
                    pellentesque sed .
                  </p>
                </div>
                <div className="client-info">
                  <div className="testimonial-info">
                    <h6 className="name">- Michel Bohman</h6>
                  </div>
                  <div className="testimonial-thumb">
                    <img src="images/testimonials/pic1.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="testimonial-bx">
                <div className="testimonial-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    blandit risus at quam hendrerit, quis egestas ligula
                    imperdiet. Cras ultricies massa nec nulla tincidunt, vel
                    viverra lacus ultricies. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Pellentesque metus odio,
                    pellentesque sed .
                  </p>
                </div>
                <div className="client-info">
                  <div className="testimonial-info">
                    <h6 className="name">- Sonar Moyna</h6>
                  </div>
                  <div className="testimonial-thumb">
                    <img src="images/testimonials/pic2.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="testimonial-bx">
                <div className="testimonial-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    blandit risus at quam hendrerit, quis egestas ligula
                    imperdiet. Cras ultricies massa nec nulla tincidunt, vel
                    viverra lacus ultricies. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Pellentesque metus odio,
                    pellentesque sed .
                  </p>
                </div>
                <div className="client-info">
                  <div className="testimonial-info">
                    <h6 className="name">- Kalina Mollika</h6>
                  </div>
                  <div className="testimonial-thumb">
                    <img src="images/testimonials/pic3.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="testimonial-bx">
                <div className="testimonial-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    blandit risus at quam hendrerit, quis egestas ligula
                    imperdiet. Cras ultricies massa nec nulla tincidunt, vel
                    viverra lacus ultricies. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Pellentesque metus odio,
                    pellentesque sed .
                  </p>
                </div>
                <div className="client-info">
                  <div className="testimonial-info">
                    <h6 className="name">- Michel Bohman</h6>
                  </div>
                  <div className="testimonial-thumb">
                    <img src="images/testimonials/pic1.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="testimonial-bx">
                <div className="testimonial-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    blandit risus at quam hendrerit, quis egestas ligula
                    imperdiet. Cras ultricies massa nec nulla tincidunt, vel
                    viverra lacus ultricies. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Pellentesque metus odio,
                    pellentesque sed .
                  </p>
                </div>
                <div className="client-info">
                  <div className="testimonial-info">
                    <h6 className="name">- Sonar Moyna</h6>
                  </div>
                  <div className="testimonial-thumb">
                    <img src="images/testimonials/pic2.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="testimonial-bx">
                <div className="testimonial-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    blandit risus at quam hendrerit, quis egestas ligula
                    imperdiet. Cras ultricies massa nec nulla tincidunt, vel
                    viverra lacus ultricies. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Pellentesque metus odio,
                    pellentesque sed .
                  </p>
                </div>
                <div className="client-info">
                  <div className="testimonial-info">
                    <h6 className="name">- Kalina Mollika</h6>
                  </div>
                  <div className="testimonial-thumb">
                    <img src="images/testimonials/pic3.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-area section-sp2 bg-gray ov-hidden">
        <div className="container">
          <div className="heading-bx text-center">
            <h6 className="title-ext text-primary">Latest BLOGS</h6>
            <h2 className="title mb-0">OUR LATEST NEWS</h2>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or slightly believable.
            </p>
          </div>
          <div className="blog-carousel owl-carousel owl-loaded owl-none owl-drag">
            <div className="item">
              <div className="blog-card style-1 bg-white shadow">
                <div className="post-media">
                  <a href="blog-details.html">
                    <img src="images/blog/grid/pic1.jpg" alt="" />
                  </a>
                </div>
                <div className="post-info">
                  <h5 className="post-title">
                    <a href="blog-details.html">
                      The Number Of Electric Vehicles Doubled
                    </a>
                  </h5>
                  <div className="post-content">
                    <p className="mb-0">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration.
                    </p>
                  </div>
                  <ul className="post-meta">
                    <li className="author">
                      <img src="images/testimonials/pic1.jpg" alt="" />
                      By <a href="blog-details.html">Isabella Evans</a>
                    </li>
                    <li className="date">
                      <a href="blog-details.html">9 May 2021</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="blog-card style-1 bg-white shadow">
                <div className="post-media">
                  <a href="blog-details.html">
                    <img src="images/blog/grid/pic2.jpg" alt="" />
                  </a>
                </div>
                <div className="post-info">
                  <h5 className="post-title">
                    <a href="blog-details.html">
                      Make Your Auto Clean As Before Like New
                    </a>
                  </h5>
                  <div className="post-content">
                    <p className="mb-0">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration.
                    </p>
                  </div>
                  <ul className="post-meta">
                    <li className="author">
                      <img src="images/testimonials/pic2.jpg" alt="" />
                      By <a href="blog-details.html">George Brown</a>
                    </li>
                    <li className="date">
                      <a href="blog-details.html">9 May 2021</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="blog-card style-1 bg-white shadow">
                <div className="post-media">
                  <a href="blog-details.html">
                    <img src="images/blog/grid/pic3.jpg" alt="" />
                  </a>
                </div>
                <div className="post-info">
                  <h5 className="post-title">
                    <a href="blog-details.html">
                      Interior Cleaning with a Steam Generator
                    </a>
                  </h5>
                  <div className="post-content">
                    <p className="mb-0">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration.
                    </p>
                  </div>
                  <ul className="post-meta">
                    <li className="author">
                      <img src="images/testimonials/pic3.jpg" alt="" />
                      By <a href="blog-details.html">Thomas deo</a>
                    </li>
                    <li className="date">
                      <a href="blog-details.html">9 May 2021</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </>
)

export default Home
