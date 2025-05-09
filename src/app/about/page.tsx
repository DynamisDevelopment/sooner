import Pricing from '@/sections/Pricing'
import Reviews from '@/sections/Reviews'
import Services from '@/sections/Services'
import AboutSection from './About'

const About = () => {
  return (
    <div className="page-content bg-white">
      <div
        className="page-banner ovbl-dark"
        style={{
          backgroundImage: 'url(images/banner/engine.jpeg)',
        }}
      >
        <div className="container">
          <div className="page-banner-entry text-center">
            <h1>
              <span>About Us</span>
            </h1>
          </div>
        </div>
      </div>

      <AboutSection />

      <Services />

      <section className="section-area bg-primary form-card mt-sm-30">
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

      <Pricing />

      <Reviews />
    </div>
  )
}

export default About
