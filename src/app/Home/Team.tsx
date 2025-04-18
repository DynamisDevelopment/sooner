'use client'

const teamMembers = [
  {
    name: 'Michel H. Bohman',
    role: 'Founder & Lead Mechanic',
    image: 'images/team/team1.jpg',
    phone: '(007) 123 456 7890',
    email: 'info@example.com',
  },
  {
    name: 'Sonar Z. Moyna',
    role: 'Diagnostic Technician',
    image: 'images/team/team2.jpg',
    phone: '(007) 123 456 7890',
    email: 'info@example.com',
  },
  {
    name: 'Kalina GH. Mollika',
    role: 'Mobile Mechanic Specialist',
    image: 'images/team/team3.jpg',
    phone: '(007) 123 456 7890',
    email: 'info@example.com',
  },
  {
    name: 'Falikaz DJ. Pauls',
    role: 'Field Service Assistant',
    image: 'images/team/team4.jpg',
    phone: '(007) 123 456 7890',
    email: 'info@example.com',
  },
]

const Team = () => {
  return (
    <section className="section-area section-sp1">
      <div className="container">
        <div className="heading-bx text-center">
          <h6 className="title-ext text-primary">Our Team</h6>
          <h2 className="title mb-0">Meet Our Expert Mechanics</h2>
          <p>
            Our team of certified mobile mechanics is dedicated to delivering
            fast, reliable repairs — wherever you need us. Experience
            professional service with a personal touch.
          </p>
        </div>
        <div className="row">
          {teamMembers.map((member, idx) => (
            <div className="col-lg-3 col-sm-6" key={idx}>
              <div className="team-member style-1 mb-30">
                <div className="team-media">
                  <img src={member.image} alt={`Photo of ${member.name}`} />
                </div>
                <div className="team-info">
                  <span className="text-primary">{member.role}</span>
                  <h4 className="title">
                    <a href="team-details.html">{member.name}</a>
                  </h4>
                  <ul className="icon-list">
                    <li>
                      <i className="fa fa-phone"></i> {member.phone}
                    </li>
                    <li>
                      <i className="fa fa-envelope-o"></i> {member.email}
                    </li>
                  </ul>
                  <ul className="social-media">
                    <li>
                      <a href="#" className="btn btn-primary">
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="btn btn-primary">
                        <i className="fa fa-google-plus"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="btn btn-primary">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="btn btn-primary">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
