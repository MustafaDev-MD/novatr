import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faPhone } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { useEffect, useState } from 'react';

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
                        <FontAwesomeIcon icon={faArrowRight} className='ml-[8px]' />
                      </button>
                    </a>
                    <button className='hero-btn-2'>
                      Request a Call Back
                      <FontAwesomeIcon icon={faPhone} className='ml-[8px]' />
                    </button>
                  </div>
                </div>
                <div className="hero-left-con-main-2">
                  <h6>Learn from experts working at</h6>
                  <div className="hero-left-con-main-2-img-con">
                    {[
                      "https://oneistox-assets.s3.ap-south-1.amazonaws.com/images-v2/company-logos/white/rsp.svg",
                      "https://oneistox-assets.s3.ap-south-1.amazonaws.com/images-v2/company-logos/white/populous_hero.svg",
                      "https://oneistox-assets.s3.ap-south-1.amazonaws.com/images-v2/company-logos/white/uns.svg",
                      "https://oneistox-assets.s3.ap-south-1.amazonaws.com/images-v2/company-logos/white/benoy_hero.svg",
                      "https://oneistox-assets.s3.ap-south-1.amazonaws.com/images-v2/company-logos/white/aecom_hero.svg",
                      "https://oneistox-assets.s3.ap-south-1.amazonaws.com/images-v2/company-logos/white/heather.svg",
                      "https://oneistox-assets.s3.ap-south-1.amazonaws.com/images-v2/company-logos/white/external.svg"
                    ].map((logo, idx) => (
                      <div className="hero-left-con-main-2-img-con-1" key={idx}>
                        <img src={logo} alt="" className='hero-left-con-main-2-img-con-1-img' />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-bottom-banner">
          <div className="hero-bottom-banner-main">
            <div className="hero-bottom-banner-img">
              <img src="https://www.novatr.com/images/home/nextImageExportOptimizer/bg-img-opt-1520.WEBP" alt="" />
            </div>
            <div className="hero-bottom-banner-content">
              <div className="hero-bottom-banner-content-main">
                <p className="hero-career-path-text" style={{ color: "#101828" }}>
                  <span className="hero-career-path-intro">Discover your ideal</span> 
                  <span className="hero-career-path-highlight">Career Path&nbsp;</span>
                  <span className="hero-career-path-intro">as a&nbsp;</span>
                  <span
                    className="hero-career-path-role"
                    style={{
                      display: "inline-block",
                      transition: "opacity 0.5s, transform 0.5s",
                    }}
                  >
                    {(() => {
                      const roles = [
                        "Urban Designer",
                        "Landscape Designer",
                        "Architectural Designer",
                        "Sustainable Architect"
                      ];
                      const [currentRole, setCurrentRole] = React.useState(0);
                      const [fade, setFade] = React.useState(true);

                      React.useEffect(() => {
                        const interval = setInterval(() => {
                          setFade(false);
                          setTimeout(() => {
                            setCurrentRole((prev) => (prev + 1) % roles.length);
                            setFade(true);
                          }, 500); // match transition duration
                        }, 2000);
                        return () => clearInterval(interval);
                      }, []);

                      return (
                        <span
                          className="hero-career-path-role"
                          style={{
                            opacity: fade ? 1 : 0,
                            transform: fade ? "translateY(0px)" : "translateY(20px)",
                            display: "inline-block",
                            transition: "opacity 0.5s, transform 0.5s",
                          }}
                        >
                          {roles[currentRole]}
                        </span>
                      );
                    })()}
                  </span>
                </p>
                <div className="hero-career-path-con">
                  <div className="hero-career-text">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#FFFFFF" varient="solid" name="svg" class="sc-42e4aaa8-0 fXytLA"><path d="M15.9333 1.64102C15.7848 1.25483 15.4138 1 15 1C14.5862 1 14.2152 1.25483 14.0667 1.64102L12.888 4.70544C12.5876 5.48648 12.4932 5.71155 12.3641 5.89315C12.2345 6.07535 12.0754 6.23455 11.8931 6.36411C11.7116 6.49323 11.4865 6.58763 10.7054 6.88803L7.64102 8.06665C7.25483 8.21519 7 8.58623 7 9C7 9.41377 7.25483 9.78481 7.64102 9.93335L10.7054 11.112C11.4865 11.4124 11.7116 11.5068 11.8931 11.6359C12.0754 11.7655 12.2345 11.9246 12.3641 12.1069C12.4932 12.2884 12.5876 12.5135 12.888 13.2946L14.0667 16.359C14.2152 16.7452 14.5862 17 15 17C15.4138 17 15.7848 16.7452 15.9333 16.359L17.112 13.2946C17.4124 12.5135 17.5068 12.2884 17.6359 12.1069C17.7655 11.9246 17.9246 11.7655 18.1069 11.6359C18.2884 11.5068 18.5135 11.4124 19.2946 11.112L22.359 9.93335C22.7452 9.78481 23 9.41377 23 9C23 8.58623 22.7452 8.21519 22.359 8.06665L19.2946 6.88803C18.5135 6.58763 18.2884 6.49323 18.1069 6.36411C17.9246 6.23455 17.7654 6.07536 17.6359 5.89315C17.5068 5.71155 17.4124 5.48648 17.112 4.70544L15.9333 1.64102Z" fill="white"></path><path d="M7.39443 12.5528C7.22503 12.214 6.87877 12 6.5 12C6.12123 12 5.77496 12.214 5.60557 12.5528L4.82111 14.1217C4.53863 14.6867 4.45255 14.8493 4.34796 14.9849C4.24305 15.121 4.12104 15.243 3.98494 15.348C3.84925 15.4525 3.68667 15.5386 3.1217 15.8211L1.55279 16.6056C1.214 16.775 1 17.1212 1 17.5C1 17.8788 1.214 18.225 1.55279 18.3944L3.1217 19.1789C3.68667 19.4614 3.84925 19.5475 3.98494 19.652C4.12104 19.757 4.24305 19.879 4.34796 20.0151C4.45255 20.1507 4.53863 20.3133 4.82111 20.8783L5.60557 22.4472C5.77497 22.786 6.12123 23 6.5 23C6.87877 23 7.22504 22.786 7.39443 22.4472L8.17889 20.8783C8.46137 20.3133 8.54745 20.1507 8.65204 20.0151C8.75695 19.879 8.87896 19.757 9.01506 19.652C9.15075 19.5475 9.31333 19.4614 9.8783 19.1789L11.4472 18.3944C11.786 18.225 12 17.8788 12 17.5C12 17.1212 11.786 16.775 11.4472 16.6056L9.8783 15.8211C9.31333 15.5386 9.15075 15.4525 9.01506 15.348C8.87896 15.243 8.75695 15.121 8.65204 14.9849C8.54745 14.8493 8.46137 14.6867 8.17889 14.1217L7.39443 12.5528Z" fill="white"></path></svg>
                    <p>Make an informed career choice with data driven salary insights</p>
                  </div>
                  <div className='hero-career-text'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#FFFFFF" varient="solid" name="svg" class="sc-42e4aaa8-0 fXytLA"><path d="M15.9333 1.64102C15.7848 1.25483 15.4138 1 15 1C14.5862 1 14.2152 1.25483 14.0667 1.64102L12.888 4.70544C12.5876 5.48648 12.4932 5.71155 12.3641 5.89315C12.2345 6.07535 12.0754 6.23455 11.8931 6.36411C11.7116 6.49323 11.4865 6.58763 10.7054 6.88803L7.64102 8.06665C7.25483 8.21519 7 8.58623 7 9C7 9.41377 7.25483 9.78481 7.64102 9.93335L10.7054 11.112C11.4865 11.4124 11.7116 11.5068 11.8931 11.6359C12.0754 11.7655 12.2345 11.9246 12.3641 12.1069C12.4932 12.2884 12.5876 12.5135 12.888 13.2946L14.0667 16.359C14.2152 16.7452 14.5862 17 15 17C15.4138 17 15.7848 16.7452 15.9333 16.359L17.112 13.2946C17.4124 12.5135 17.5068 12.2884 17.6359 12.1069C17.7655 11.9246 17.9246 11.7655 18.1069 11.6359C18.2884 11.5068 18.5135 11.4124 19.2946 11.112L22.359 9.93335C22.7452 9.78481 23 9.41377 23 9C23 8.58623 22.7452 8.21519 22.359 8.06665L19.2946 6.88803C18.5135 6.58763 18.2884 6.49323 18.1069 6.36411C17.9246 6.23455 17.7654 6.07536 17.6359 5.89315C17.5068 5.71155 17.4124 5.48648 17.112 4.70544L15.9333 1.64102Z" fill="white"></path><path d="M7.39443 12.5528C7.22503 12.214 6.87877 12 6.5 12C6.12123 12 5.77496 12.214 5.60557 12.5528L4.82111 14.1217C4.53863 14.6867 4.45255 14.8493 4.34796 14.9849C4.24305 15.121 4.12104 15.243 3.98494 15.348C3.84925 15.4525 3.68667 15.5386 3.1217 15.8211L1.55279 16.6056C1.214 16.775 1 17.1212 1 17.5C1 17.8788 1.214 18.225 1.55279 18.3944L3.1217 19.1789C3.68667 19.4614 3.84925 19.5475 3.98494 19.652C4.12104 19.757 4.24305 19.879 4.34796 20.0151C4.45255 20.1507 4.53863 20.3133 4.82111 20.8783L5.60557 22.4472C5.77497 22.786 6.12123 23 6.5 23C6.87877 23 7.22504 22.786 7.39443 22.4472L8.17889 20.8783C8.46137 20.3133 8.54745 20.1507 8.65204 20.0151C8.75695 19.879 8.87896 19.757 9.01506 19.652C9.15075 19.5475 9.31333 19.4614 9.8783 19.1789L11.4472 18.3944C11.786 18.225 12 17.8788 12 17.5C12 17.1212 11.786 16.775 11.4472 16.6056L9.8783 15.8211C9.31333 15.5386 9.15075 15.4525 9.01506 15.348C8.87896 15.243 8.75695 15.121 8.65204 14.9849C8.54745 14.8493 8.46137 14.6867 8.17889 14.1217L7.39443 12.5528Z" fill="white"></path></svg>
                    <p>Gain a competitive edge with a personalised report</p>
                  </div>
                  <div className='hero-career-text'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#FFFFFF" varient="solid" name="svg" class="sc-42e4aaa8-0 fXytLA"><path d="M15.9333 1.64102C15.7848 1.25483 15.4138 1 15 1C14.5862 1 14.2152 1.25483 14.0667 1.64102L12.888 4.70544C12.5876 5.48648 12.4932 5.71155 12.3641 5.89315C12.2345 6.07535 12.0754 6.23455 11.8931 6.36411C11.7116 6.49323 11.4865 6.58763 10.7054 6.88803L7.64102 8.06665C7.25483 8.21519 7 8.58623 7 9C7 9.41377 7.25483 9.78481 7.64102 9.93335L10.7054 11.112C11.4865 11.4124 11.7116 11.5068 11.8931 11.6359C12.0754 11.7655 12.2345 11.9246 12.3641 12.1069C12.4932 12.2884 12.5876 12.5135 12.888 13.2946L14.0667 16.359C14.2152 16.7452 14.5862 17 15 17C15.4138 17 15.7848 16.7452 15.9333 16.359L17.112 13.2946C17.4124 12.5135 17.5068 12.2884 17.6359 12.1069C17.7655 11.9246 17.9246 11.7655 18.1069 11.6359C18.2884 11.5068 18.5135 11.4124 19.2946 11.112L22.359 9.93335C22.7452 9.78481 23 9.41377 23 9C23 8.58623 22.7452 8.21519 22.359 8.06665L19.2946 6.88803C18.5135 6.58763 18.2884 6.49323 18.1069 6.36411C17.9246 6.23455 17.7654 6.07536 17.6359 5.89315C17.5068 5.71155 17.4124 5.48648 17.112 4.70544L15.9333 1.64102Z" fill="white"></path><path d="M7.39443 12.5528C7.22503 12.214 6.87877 12 6.5 12C6.12123 12 5.77496 12.214 5.60557 12.5528L4.82111 14.1217C4.53863 14.6867 4.45255 14.8493 4.34796 14.9849C4.24305 15.121 4.12104 15.243 3.98494 15.348C3.84925 15.4525 3.68667 15.5386 3.1217 15.8211L1.55279 16.6056C1.214 16.775 1 17.1212 1 17.5C1 17.8788 1.214 18.225 1.55279 18.3944L3.1217 19.1789C3.68667 19.4614 3.84925 19.5475 3.98494 19.652C4.12104 19.757 4.24305 19.879 4.34796 20.0151C4.45255 20.1507 4.53863 20.3133 4.82111 20.8783L5.60557 22.4472C5.77497 22.786 6.12123 23 6.5 23C6.87877 23 7.22504 22.786 7.39443 22.4472L8.17889 20.8783C8.46137 20.3133 8.54745 20.1507 8.65204 20.0151C8.75695 19.879 8.87896 19.757 9.01506 19.652C9.15075 19.5475 9.31333 19.4614 9.8783 19.1789L11.4472 18.3944C11.786 18.225 12 17.8788 12 17.5C12 17.1212 11.786 16.775 11.4472 16.6056L9.8783 15.8211C9.31333 15.5386 9.15075 15.4525 9.01506 15.348C8.87896 15.243 8.75695 15.121 8.65204 14.9849C8.54745 14.8493 8.46137 14.6867 8.17889 14.1217L7.39443 12.5528Z" fill="white"></path></svg>
                    <p>Discover the most sought-after jobs and skills in your industry</p>
                  </div>
                </div>
                <button className='rounded-full hero-bottom-banner-button'>
                  <span>Discover Your Career Path</span>
                  <div>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#FFFFFF" varient="line" name="svg" class="sc-42e4aaa8-0 eGbXvf"><path d="M6 18L18 6M18 6H10M18 6V14" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                  </div>
                </button>
              </div>
              <img src="https://www.novatr.com/images/home/see-quiz-button.svg" className='hero-hande-img' alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero;