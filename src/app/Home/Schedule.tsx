'use client'

const services = [
  'Oil Change',
  'Brake Repair',
  'Tire & Wheel Services',
  'General Maintenance',
  'Battery Replacement',
  'Paint Touch-Ups',
  'Wheel Change',
  'Engine Diagnostics',
]

const Schedule = () => {
  return (
    <section className="section-area bg-primary form-card">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-3 align-self-center">
            <div className="form-head text-white mb-md-30">
              <h3 className="title">Book a Service</h3>
              <h6 className="mb-0">
                <span className="fw4 me-1">or call us directly:</span> +22 123
                456 7890
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
                      placeholder="Full Name*"
                      required
                    />
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email Address*"
                      required
                    />
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className="form-group">
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Phone Number*"
                      required
                    />
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className="form-group">
                    <select className="form-select" required>
                      <option value="">Select a Service*</option>
                      {services.map((service, idx) => (
                        <option key={idx} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Briefly Describe Your Issue*"
                      required
                    />
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className="form-group">
                    <button type="submit" className="btn btn-warning w-100">
                      Submit Request
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Schedule
