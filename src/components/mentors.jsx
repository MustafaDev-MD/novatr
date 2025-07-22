import React, { useRef, useEffect } from "react";

          const mentorCards = [
            {
              name: "Murali Manoj",
              img: "https://d3dk14rzbdphib.cloudfront.net/images-v2/bim/murali.webp",
              title: "Senior Computational Engineer",
              company: "Ramboll",
              companyDesc: "A Computational Engineer expert in structural analysis, Automation, BIM and an interest towards management "
            },
            {
              name: "Afshan Rehman",
              img: "https://d3dk14rzbdphib.cloudfront.net/images-v2/bim/rehman.webp",
              title: "Sustainability Project Manager at TLP",
              company: "The Levy Partnership",
              companyDesc: "A sustainable consultant  with an ardor for creating a cleaner and greener world through policies, and building construction. "
            },
            {
              name: "Richard Stewart",
              img: "https://d3dk14rzbdphib.cloudfront.net/images-v2/bim/richard.webp",
              title: "Senior BIM Manager",
              company: "B+H ARCHITECTS",
              companyDesc: "Leads the application of BIM/Digital Engineering knowledge at each stage of a construction process. "
            },
            {
              name: "Giuseppe Dotto",
              img: "https://d3dk14rzbdphib.cloudfront.net/images-v2/bim/gluseppe.webp",
              title: "BIM Coordinator",
              company: "UNStudio, Amsterdam, NL",
              companyDesc: "Specialized in digital design technology - computational design, programming language and software development. "
            },
            {
              name: "Ami Nigam",
              img: "https://d3dk14rzbdphib.cloudfront.net/images-v2/bim/ami.webp",
              title: "Head of Technology at Benoy",
              company: "Benoy",
              companyDesc: "Architect & Design Technology Strategist currently working as the Head of Technology at Benoy. "
            },
            {
              name: "Harsha Vinjam",
              img: "https://d3dk14rzbdphib.cloudfront.net/images-v2/bim/harsha.webp",
              title: "Architectural Designer | LEED Green Associate",
              company: "Cooper Carry",
              companyDesc: "Experienced Architectural Designer with specialisation in Sustainability and BIM. "
            },
            {
              name: "André Malheiro",
              img: "https://d3dk14rzbdphib.cloudfront.net/images-v2/bim/andre.webp",
              title: "Founder & Architect at AM-arqstudio | BIM Specialist",
              company: "AM-arqstudio",
              companyDesc: "Founded AM-arqstudio, believing in advanced technology can help create positive impacts on the environment. "
            },
            {
              name: "Salman Naqvi",
              img: "https://d3dk14rzbdphib.cloudfront.net/images-v2/bim/salman.webp",
              title: "Associate Architect ",
              company: "Populous",
              companyDesc: "A BIM expert, currently an Associate architect at Populous. "
            },
            {
              name: "Abhishek Ray",
              img: "https://d3dk14rzbdphib.cloudfront.net/images-v2/bim/abhishek.webp",
              title: "Ex - BIM Lead ",
              company: "SpaceMatters",
              companyDesc: "Experienced in BIM workflows. Invited as guest lecturer at SPA Bhopal for BIM as a Project Management Solution. "
            }
          ];

          function InfiniteMentorSlider() {
            const sliderRef = useRef(null);

            // Duplicate cards for infinite effect
            const cards = [...mentorCards, ...mentorCards, ...mentorCards];

            // Set scroll to middle on mount for infinite effect
            useEffect(() => {
              const slider = sliderRef.current;
              if (slider) {
                const card = slider.querySelector('.sc-c81531ee-1');
                if (card) {
                  // Scroll to the start of the second set
                  slider.scrollLeft = card.offsetWidth * mentorCards.length;
                }
              }
            }, []);

            // Infinite scroll logic
            const handleScroll = () => {
              const slider = sliderRef.current;
              const card = slider.querySelector('.sc-c81531ee-1');
              if (!card) return;
              const cardW = card.offsetWidth;
              const totalCards = mentorCards.length;
              const totalWidth = cardW * totalCards;

              if (slider.scrollLeft <= 0) {
                slider.scrollLeft = totalWidth;
              } else if (slider.scrollLeft >= totalWidth * 2) {
                slider.scrollLeft = totalWidth;
              }
            };

            // Touch support
            let isDragging = false;
            let startX = 0;
            let scrollLeft = 0;

            const handleTouchStart = (e) => {
              isDragging = true;
              startX = e.touches[0].pageX - sliderRef.current.offsetLeft;
              scrollLeft = sliderRef.current.scrollLeft;
            };
            const handleTouchMove = (e) => {
              if (!isDragging) return;
              const x = e.touches[0].pageX - sliderRef.current.offsetLeft;
              const walk = (x - startX) * 1.2;
              sliderRef.current.scrollLeft = scrollLeft - walk;
            };
            const handleTouchEnd = () => {
              isDragging = false;
            };

            // Mouse support
            const handleMouseDown = (e) => {
              isDragging = true;
              sliderRef.current.classList.add("dragging");
              startX = e.pageX - sliderRef.current.offsetLeft;
              scrollLeft = sliderRef.current.scrollLeft;
            };
            const handleMouseMove = (e) => {
              if (!isDragging) return;
              e.preventDefault();
              const x = e.pageX - sliderRef.current.offsetLeft;
              const walk = (x - startX) * 1.2;
              sliderRef.current.scrollLeft = scrollLeft - walk;
            };
            const handleMouseUp = () => {
              isDragging = false;
              sliderRef.current.classList.remove("dragging");
            };
            const handleMouseLeave = () => {
              isDragging = false;
              sliderRef.current.classList.remove("dragging");
            };

            // Card width is 280px, so container minWidth = 5*280
            // Hide scrollbar with CSS
            const containerStyle = {
              display: "flex",
              overflowX: "auto",
              cursor: "grab",
              WebkitOverflowScrolling: "touch",
              minWidth: "1400px",
              scrollSnapType: "x mandatory",
              scrollbarWidth: "none", // Firefox
              msOverflowStyle: "none", // IE 10+
            };

            return (
              <div className="sc-92373a90-0 sc-c3d1ec9a-1 hUMDcf fgUJrC">
                <style>
                  {`
                    .sc-92373a90-0.hUMDcf::-webkit-scrollbar {
                      display: none;
                      height: 0;
                      background: transparent;
                    }
                  `}
                </style>
                <div
                  className="sc-92373a90-0 hUMDcf"
                  style={containerStyle}
                  ref={sliderRef}
                  onScroll={handleScroll}
                  onMouseDown={handleMouseDown}
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUp}
                  onMouseLeave={handleMouseLeave}
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                >
                  {cards.map((mentor, idx) => (
                    <div className="sc-c81531ee-1 bgioJU" key={mentor.name + idx + "slider"} style={{ flex: "0 0 280px" }}>
                      <div className="sc-92373a90-0 jIBlWJ" style={{ overflow: "hidden", width: "280px" }}>
                        <img
                          alt=""
                          loading="lazy"
                          width="280"
                          height="426"
                          decoding="async"
                          src={mentor.img}
                          style={{ zIndex: 1, objectFit: "cover", height: "100%" }}
                        />
                        <div className="sc-92373a90-0 ipOMMW" style={{ width: "100%" }}>
                          <h5 className="sc-d80c85c8-0 jTRqoD" style={{ color: "white" }}>{mentor.name}</h5>
                        </div>
                      </div>
                      <div className="sc-c81531ee-0 lkwZeL overlayName">
                        <div>
                          <h5 className="sc-d80c85c8-0 bweMvE" style={{ color: "#101828" }}>{mentor.name}</h5>
                          <hr className="sc-7465b7e7-0 cBXWVn" />
                          <p className="sc-d80c85c8-0 giNsAB" style={{ color: "#101828" }}>{mentor.title}</p>
                          <p className="sc-d80c85c8-0 fnOaLO" style={{ color: "primary.600" }}>{mentor.company}</p>
                          <p className="sc-d80c85c8-0 cWggrU" style={{ color: "#101828" }}>{mentor.companyDesc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          }

const Mentors = () => {
  return (
    <section>
        <div className="sc-92373a90-0 gFjEqb">
          <div className="sc-85598a58-0 dCQOMo">
            <div className="sc-115b9aa5-0 eMOtyj">
              <div className="sc-92373a90-0 iZUIWq">
                <div style={{ opacity: 1, transform: "translateX(0px) scale(1) translateZ(0px)" }}>
                  <div className="sc-92373a90-0 fnFnLY">
                    <div className="sc-7267286d-0 jnzbPz">
                      <h2 className="sc-d80c85c8-0 fOydRC" style={{ color: "#101828" }}>Expert Mentors</h2>
                      <span className="sc-1bcfe909-0 hfddyk"></span>
                    </div>
                    <div className="sc-92373a90-0 jDVVyT">
                      <h3 className="sc-d80c85c8-0 jiZnoN" style={{ color: "#1d2939" }}>
                        <span>
                          Learn from the
                          <span style={{ color: "rgb(89, 37, 220)" }}> Industry's Best</span>
                        </span>
                      </h3>
                      <p className="sc-d80c85c8-0 llfxhD" style={{ color: "#475467" }}>
                        <span>
                          Our mentors are industry experts with experience at top-tier AEC firms and on major projects worldwide.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sc-92373a90-0 cgSpXL">
            {/* Infinite Marquee Slider */}
            <style>
              {`
                .marquee-slider-container {
                  overflow: hidden;
                  width: 100%;
                  position: relative;
                  background: transparent;
                  padding: 12px 0;
                }
                .marquee-slider-track {
                  display: flex;
                  width: max-content;
                  animation: marquee-slider 35s linear infinite;
                }
                @keyframes marquee-slider {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(-50%); }
                }
                .marquee-slider-container:hover .marquee-slider-track {
                //   animation-play-state: paused;
                }
                .marquee-slider-item {
                  display: flex;
                  align-items: center;
                  margin-right: 75px;
                  flex-shrink: 0;
                }
              `}
            </style>
            <div className="marquee-slider-container">
              <div className="marquee-slider-track">
                {[
                  {
                    alt: "AECOM",
                    width: 171,
                    src: "https://oneistox-assets.s3.ap-south-1.amazonaws.com/images-v2/home/expertMentors/aecom.svg"
                  },
                  {
                    alt: "UNS",
                    width: 100,
                    src: "https://oneistox-assets.s3.ap-south-1.amazonaws.com/images-v2/home/expertMentors/uns.svg"
                  },
                  {
                    alt: "RSP",
                    width: 115,
                    src: "https://oneistox-assets.s3.ap-south-1.amazonaws.com/images-v2/home/expertMentors/rsp.svg"
                  },
                  {
                    alt: "Populous",
                    width: 206,
                    src: "https://oneistox-assets.s3.ap-south-1.amazonaws.com/images-v2/home/expertMentors/populous.svg"
                  },
                  {
                    alt: "Henning Larsen",
                    width: 126,
                    src: "https://oneistox-assets.s3.ap-south-1.amazonaws.com/images-v2/home/expertMentors/henning_larsen.svg"
                  },
                  {
                    alt: "Buro Happold",
                    width: 255,
                    src: "https://oneistox-assets.s3.ap-south-1.amazonaws.com/images-v2/home/expertMentors/buro_haffold.svg"
                  },
                  {
                    alt: "External Reference",
                    width: 136,
                    src: "https://oneistox-assets.s3.ap-south-1.amazonaws.com/images-v2/home/expertMentors/external_reference.svg"
                  },
                  {
                    alt: "Benoy",
                    width: 145,
                    src: "https://oneistox-assets.s3.ap-south-1.amazonaws.com/images-v2/home/expertMentors/benoy.svg"
                  },
                  {
                    alt: "HH",
                    width: 43,
                    src: "https://oneistox-assets.s3.ap-south-1.amazonaws.com/images-v2/home/expertMentors/hh.svg"
                  },
                  {
                    alt: "A+DA",
                    width: 75,
                    src: "https://oneistox-assets.s3.ap-south-1.amazonaws.com/images-v2/home/expertMentors/ada.svg"
                  },
                  {
                    alt: "KPF",
                    width: 108,
                    src: "https://oneistox-assets.s3.ap-south-1.amazonaws.com/images-v2/home/expertMentors/kpf.svg"
                  },
                  {
                    alt: "Cooper Carry",
                    width: 128,
                    src: "https://oneistox-assets.s3.ap-south-1.amazonaws.com/images-v2/home/expertMentors/cooper.svg"
                  },
                  {
                    alt: "PROTA Software",
                    width: 306,
                    src: "https://oneistox-assets.s3.ap-south-1.amazonaws.com/images-v2/home/expertMentors/prota_software.svg"
                  }
                ].concat([
                  // Duplicate for seamless infinite effect
                  {
                    alt: "AECOM",
                    width: 171,
                    src: "https://oneistox-assets.s3.ap-south-1.amazonaws.com/images-v2/home/expertMentors/aecom.svg"
                  },
                  {
                    alt: "UNS",
                    width: 100,
                    src: "https://oneistox-assets.s3.ap-south-1.amazonaws.com/images-v2/home/expertMentors/uns.svg"
                  },
                  {
                    alt: "RSP",
                    width: 115,
                    src: "https://oneistox-assets.s3.ap-south-1.amazonaws.com/images-v2/home/expertMentors/rsp.svg"
                  },
                  {
                    alt: "Populous",
                    width: 206,
                    src: "https://oneistox-assets.s3.ap-south-1.amazonaws.com/images-v2/home/expertMentors/populous.svg"
                  },
                  {
                    alt: "Henning Larsen",
                    width: 126,
                    src: "https://oneistox-assets.s3.ap-south-1.amazonaws.com/images-v2/home/expertMentors/henning_larsen.svg"
                  },
                  {
                    alt: "Buro Happold",
                    width: 255,
                    src: "https://oneistox-assets.s3.ap-south-1.amazonaws.com/images-v2/home/expertMentors/buro_haffold.svg"
                  },
                  {
                    alt: "External Reference",
                    width: 136,
                    src: "https://oneistox-assets.s3.ap-south-1.amazonaws.com/images-v2/home/expertMentors/external_reference.svg"
                  },
                  {
                    alt: "Benoy",
                    width: 145,
                    src: "https://oneistox-assets.s3.ap-south-1.amazonaws.com/images-v2/home/expertMentors/benoy.svg"
                  },
                  {
                    alt: "HH",
                    width: 43,
                    src: "https://oneistox-assets.s3.ap-south-1.amazonaws.com/images-v2/home/expertMentors/hh.svg"
                  },
                  {
                    alt: "A+DA",
                    width: 75,
                    src: "https://oneistox-assets.s3.ap-south-1.amazonaws.com/images-v2/home/expertMentors/ada.svg"
                  },
                  {
                    alt: "KPF",
                    width: 108,
                    src: "https://oneistox-assets.s3.ap-south-1.amazonaws.com/images-v2/home/expertMentors/kpf.svg"
                  },
                  {
                    alt: "Cooper Carry",
                    width: 128,
                    src: "https://oneistox-assets.s3.ap-south-1.amazonaws.com/images-v2/home/expertMentors/cooper.svg"
                  },
                  {
                    alt: "PROTA Software",
                    width: 306,
                    src: "https://oneistox-assets.s3.ap-south-1.amazonaws.com/images-v2/home/expertMentors/prota_software.svg"
                  }
                ]).map((logo, idx) => (
                  <div
                    className="sc-7267286d-0 jnzbPz sc-c3d1ec9a-0 jZSmHD marquee-slider-item"
                    style={logo.alt === "PROTA Software" ? { marginRight: 22 } : undefined}
                    key={logo.alt + idx}
                  >
                    <img
                      alt={logo.alt}
                      loading="lazy"
                      width={logo.width}
                      height="40"
                      decoding="async"
                      src={logo.src}
                      style={{ color: "transparent" }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Infinite draggable slider for mentor cards, design unchanged, show 5 cards at a time */}
          

          <InfiniteMentorSlider />
        </div>
    </section>
  );
};

export default Mentors;
