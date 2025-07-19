import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faPhone } from '@fortawesome/free-solid-svg-icons';

function Hero() {
  return (
    <>
      <section>
        <div className="px-[1rem]">
          <div className="hero-banner">
            <div className="hero-img-1">
              <img src="https://oneistox-assets.s3.ap-south-1.amazonaws.com/images-v2/home/union3.svg" alt="" className="hero-img" />
            </div>
            <div className="hero-img-2">
              <img src="https://oneistox-assets.s3.ap-south-1.amazonaws.com/images-v2/home/union5.svg" alt="" className="hero-img" />
            </div>
            <div className="hero-content">
              <div className="hero-main-img-con">
                <div className="hero-main-img">
                  <img alt="Gain industry-relevant skills with cohort-based learning." width="513" height="580" src="https://www.novatr.com/nextImageExportOptimizer/oneistox-assets.s3.ap-south-1.amazonaws.com_images-v2_home_hero-opt-1520.WEBP" />
                </div>
              </div>
              <div className="hero-left-content">
                <div className="hero-left-con-main">
                  <h1>Empowering <span className="hero-left-con-main-span">next-gen</span> architects and engineers towards career success</h1>
                  <p>Online certification courses that set you up for success. Gain industry-relevant skills with cohort-based learning.</p>
                  <div className="hero-btn-con">
                    <a href="">
                      <button className="hero-btn-1">
                        Explore Courses
                        <FontAwesomeIcon icon={faArrowRight} className='ml-[8px]'/>
                      </button>
                    </a>
                    <button className='hero-btn-2'>
                      Request a Call Back
                      <FontAwesomeIcon icon={faPhone} className='ml-[8px]'/>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero;