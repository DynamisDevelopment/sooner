'use client'

const Jumbotron = () => {
  return (
    <div className="ttr-slider style-2">
      <div className="swiper-container ttr-swiper01">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="slider-img">
              <img
                src="images/background/tulsa.webp"
                alt="Mobile Mechanic in Tulsa"
              />
            </div>
            <div className="slider-content container text-center text-white">
              <div className="content-inner">
                <h6 className="sub-title text-2xl" data-swiper-parallax="-200">
                  Trusted Mobile Mechanics
                </h6>
                <h2 className="title text-6xl" data-swiper-parallax="-400">
                  Auto Repairs Delivered to You
                </h2>
                <div className="car-wheel wheel2" data-swiper-parallax="-600">
                  <img src="images/slider/car2.png" alt="Car Service" />
                  <div className="wheel-1">
                    <img src="images/slider/wheel2.png" alt="Car Wheel 1" />
                  </div>
                  <div className="wheel-2">
                    <img src="images/slider/wheel2.png" alt="Car Wheel 2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  )
}

export default Jumbotron
