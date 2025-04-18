import Meta from '../components/Meta'
import ServiceCard from '../components/ServiceCard'
import AboutUs from './Home/AboutUs'
import Jumbotron from './Home/Jumbotron'
import Review from './Home/Reviews'
import Schedule from './Home/Schedule'
import Services from './Home/Services'
import Team from './Home/Team'
import WhyChooseUs from './Home/Why'

const Home: React.FC = () => (
  <>
    <div className="page-content bg-white">
      <Jumbotron />
      <AboutUs />
      <Services />

      <WhyChooseUs />

      <Schedule />
      <Team />

      <Review />
    </div>
  </>
)

export default Home
