const Booking = () => {
  return (
    <div className="page-content bg-white">
      <div
        className="page-banner ovbl-dark"
        style={{ backgroundImage: 'url(images/banner/bnr4.jp' }}
      >
        <div className="container">
          <div className="page-banner-entry text-center">
            <h1>
              <span>Booking</span>
            </h1>
            <nav aria-label="breadcrumb" className="breadcrumb-row">
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="/">
                    <i className="las la-home"></i>Home
                  </a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Booking
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <section className="section-area section-sp1">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-7 mb-30 mb-md-50">
              <form className="booking-form">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="form-group">
                      <h6 className="form-title">VEHICLE YEAR</h6>
                      <div className="input-group">
                        <input
                          type="number"
                          className="form-control"
                          value="2008"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="form-group">
                      <h6 className="form-title">VEHICLE MAKE</h6>
                      <div className="input-group">
                        <select className="form-select">
                          <option value="" selected={true}>
                            Choose...
                          </option>
                          <option value="General Motors">General Motors</option>
                          <option value="Land Rover">Land Rover</option>
                          <option value="Lexus">Lexus</option>
                          <option value="Lincoln">Lincoln</option>
                          <option value="Mazda">Mazda</option>
                          <option value="Mercury">Mercury</option>
                          <option value="Nissan">Nissan</option>
                          <option value="Renault">Renault</option>
                          <option value="Plymouth">Plymouth</option>
                          <option value="Rover">Rover</option>
                          <option value="Saab">Saab</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="form-group">
                      <h6 className="form-title">VEHICLE MILEAGE</h6>
                      <div className="input-group">
                        <input type="number" className="form-control" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <h6 className="form-title">SELECT SERVICES NEEDED</h6>
                      <div className="row">
                        <div className="col-md-12 col-lg-4">
                          <div className="form-check custom-checkbox mb-10">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="customControlAutosizing1"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customControlAutosizing1"
                            >
                              Air Conditioning
                            </label>
                          </div>
                        </div>
                        <div className="col-md-12 col-lg-4">
                          <div className="form-check custom-checkbox mb-10">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="customControlAutosizing2"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customControlAutosizing2"
                            >
                              Brakes Repair
                            </label>
                          </div>
                        </div>
                        <div className="col-md-12 col-lg-4">
                          <div className="form-check custom-checkbox mb-10">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="customControlAutosizing3"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customControlAutosizing3"
                            >
                              Engine Diagnostics
                            </label>
                          </div>
                        </div>
                        <div className="col-md-12 col-lg-4">
                          <div className="form-check custom-checkbox mb-10">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="customControlAutosizing4"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customControlAutosizing4"
                            >
                              Heating &amp; Cooling
                            </label>
                          </div>
                        </div>
                        <div className="col-md-12 col-lg-4">
                          <div className="form-check custom-checkbox mb-10">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="customControlAutosizing5"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customControlAutosizing5"
                            >
                              Oil, Lube &amp; Filters
                            </label>
                          </div>
                        </div>
                        <div className="col-md-12 col-lg-4">
                          <div className="form-check custom-checkbox mb-10">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="customControlAutosizing6"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customControlAutosizing6"
                            >
                              Transmission Repair
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <h6 className="form-title">PERSONAL INFO</h6>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <div className="input-group">
                        <input
                          name="name"
                          type="text"
                          className="form-control"
                          placeholder="Name"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <div className="input-group">
                        <input
                          name="phone"
                          type="email"
                          placeholder="Email"
                          className="form-control"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <div className="input-group">
                        <input
                          name="phone"
                          type="text"
                          placeholder="Phone Number"
                          className="form-control"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <div className="input-group">
                        <input
                          name="subject"
                          type="text"
                          required={true}
                          className="form-control"
                          placeholder="Subject"
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
                          required={true}
                          placeholder="Type Message"
                        ></textarea>
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
                      {' '}
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-4 col-md-5 mb-30">
              <aside className="sticky-top">
                <div className="widget">
                  <h5 className="widget-title">Our Inner Pages</h5>
                  <ul className="service-menu style-1">
                    <li>
                      <a href="about-1.html">
                        About Us <i className="las la-question-circle"></i>
                      </a>
                    </li>
                    <li>
                      <a href="service-1.html">
                        Our Services <i className="las la-cog"></i>
                      </a>
                    </li>
                    <li>
                      <a href="job-career.html">
                        Job & Career<i className="las la-user-plus"></i>
                      </a>
                    </li>
                    <li>
                      <a href="pricing-plan.html">
                        Pricing<i className="las la-table"></i>
                      </a>
                    </li>
                    <li>
                      <a href="team.html">
                        Our Team<i className="las la-user-tie"></i>
                      </a>
                    </li>
                    <li className="active">
                      <a href="booking.html">
                        Booking<i className="lab la-wpforms"></i>
                      </a>
                    </li>
                    <li>
                      <a href="faq-1.html">
                        Faq<i className="las la-quote-left"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Booking
