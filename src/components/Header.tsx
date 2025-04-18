import Link from 'next/link'

const Header: React.FC = () => {
  return (
    <header className="header header-transparent rs-nav">
      <div className="sticky-header navbar-expand-lg">
        <div className="menu-bar clearfix ">
          <div className="container clearfix">
            <div className="menu-logo">
              <a href="/" className="main-logo">
                <img src="images/logo-white.png" alt="" />
              </a>
              <a href="/" className="sticky-logo">
                <img src="images/logo.png" alt="" />
              </a>
            </div>

            <button
              className="navbar-toggler collapsed menuicon justify-content-end"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#menuDropdown"
              aria-controls="menuDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            <div className="secondary-menu">
              <a href="login.html" className="btn btn-outline-light">
                Sign in
              </a>
              <a href="/booking" className="btn btn-primary ms-3">
                Booking
              </a>
            </div>

            <div
              className="menu-links navbar-collapse collapse justify-content-center"
              id="menuDropdown"
            >
              <div className="menu-logo">
                <a href="/">
                  <img src="images/logo-white.png" alt="" />
                </a>
              </div>
              <ul className="nav navbar-nav">
                <li className="active">
                  <a href="javascript:;">
                    Home<i className="fa fa-chevron-down"></i>
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <a href="/">
                        <span>Home 1</span>{' '}
                      </a>
                    </li>
                    <li>
                      <a href="index-2.html">
                        <span>Home 2</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="has-mega-menu ">
                  <a href="javascript:;">
                    Pages<i className="fa fa-chevron-down"></i>
                  </a>
                  <ul className="mega-menu">
                    <li>
                      <a href="javascript:;">Pages</a>
                      <ul>
                        <li>
                          <a href="about-1.html">
                            <span>About Us 1</span>
                          </a>
                        </li>
                        <li>
                          <a href="about-2.html">
                            <span>About Us 2</span>
                          </a>
                        </li>
                        <li>
                          <a href="service-1.html">
                            <span>Service 1</span>
                          </a>
                        </li>
                        <li>
                          <a href="service-2.html">
                            <span>Service 2</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="javascript:;">Pages</a>
                      <ul>
                        <li>
                          <a href="team.html">
                            <span>Our Team</span>
                          </a>
                        </li>
                        <li>
                          <a href="team-details.html">
                            <span>Team Details</span>
                          </a>
                        </li>
                        <li>
                          <a href="job-career.html">
                            <span>Job & Career</span>
                          </a>
                        </li>
                        <li>
                          <a href="faq-1.html">
                            <span>FAQ's</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="javascript:;">Pages</a>
                      <ul>
                        <li>
                          <a href="/booking">
                            <span>Booking</span>
                          </a>
                        </li>
                        <li>
                          <a href="gallery-1.html">
                            <span>Gallery 1</span>
                          </a>
                        </li>
                        <li>
                          <a href="gallery-2.html">
                            <span>Gallery 2</span>
                          </a>
                        </li>
                        <li>
                          <a href="pricing-plan.html">
                            <span>Pricing Plan</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="javascript:;">Pages</a>
                      <ul>
                        <li>
                          <a href="error-404.html">
                            <span>Error 404</span>
                          </a>
                        </li>
                        <li>
                          <a href="login.html">
                            <span>Login / Register</span>
                          </a>
                        </li>
                        <li>
                          <a href="contact-1.html">
                            <span>Contact Us 1</span>
                          </a>
                        </li>
                        <li>
                          <a href="contact-2.html">
                            <span>Contact Us 2</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="javascript:;">
                    Services<i className="fa fa-chevron-down"></i>
                  </a>
                  <ul className="sub-menu">
                    <li className="add-menu-left">
                      <ul>
                        <li>
                          <a href="service-engine-diagnostics.html">
                            <span>Engine Diagnostics</span>{' '}
                          </a>
                        </li>
                        <li>
                          <a href="service-lube-oil-and-filters.html">
                            <span>Lube Oil and Filters</span>
                          </a>
                        </li>
                        <li>
                          <a href="service-belts-and-hoses.html">
                            <span>Belts and Hoses</span>
                          </a>
                        </li>
                        <li>
                          <a href="service-air-conditioning.html">
                            <span>Air Conditioning</span>
                          </a>
                        </li>
                        <li>
                          <a href="service-brake-repair.html">
                            <span>Brake Repair</span>
                          </a>
                        </li>
                        <li>
                          <a href="service-tire-and-wheel-services.html">
                            <span>Tire and Wheel Services</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="javascript:;">
                    Blog <i className="fa fa-chevron-down"></i>
                  </a>
                  <ul className="sub-menu left">
                    <li>
                      <a href="blog-grid.html">
                        <span>Blog Grid</span>
                      </a>
                    </li>
                    <li>
                      <a href="blog-grid-sidebar.html">
                        <span>Blog Grid Sidebar</span>
                      </a>
                    </li>
                    <li>
                      <a href="blog-masonry.html">
                        <span>Blog Masonry</span>
                      </a>
                    </li>
                    <li>
                      <a href="blog-list-sidebar.html">
                        <span>Blog List Sidebar</span>
                      </a>
                    </li>
                    <li>
                      <a href="blog-details.html">
                        <span>Blog Details</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="javascript:;">
                    Contact Us <i className="fa fa-chevron-down"></i>
                  </a>
                  <ul className="sub-menu left">
                    <li>
                      <a href="contact-1.html">
                        <span>Contact Us 1</span>
                      </a>
                    </li>
                    <li>
                      <a href="contact-2.html">
                        <span>Contact Us 2</span>
                      </a>
                    </li>
                  </ul>
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
              <div className="menu-close">
                <i className="ti-close"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
