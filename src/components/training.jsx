import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Omni from "../assets/images/omni.webp"

const Training = () => {
  // For the slider in the Innovative Learning section
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  const slides = [
    {
      alt: "Interactive Live Sessions",
      src: "https://www.novatr.com/nextImageExportOptimizer/oneistox-assets.s3.ap-south-1.amazonaws.com_images-v2_home_learning_1-opt-1520.WEBP",
    },
    {
      alt: "Skill Mapping",
      src: Omni,
    },
  ];

  const dotClasses = [
    "sc-c506afef-1 hBovez",
    "sc-c506afef-1 gMGKWe",
  ];

  return (
    <section>
      {/* Practical Training Section */}
      <div className="sc-92373a90-0 sc-24635258-3 hUMDcf kXMeHm"></div>
      <div className="sc-85598a58-0 btFetW">
        <div className="sc-115b9aa5-0 eMOtyj">
          <div className="sc-92373a90-0 iZUIWq">
            <div className="sc-4132bc9c-0 dXgNNz">
              <div className="sc-68483de-0 iamhUA">
                <div className="sc-115b9aa5-0 eMOtyj">
                  <div className="sc-68483de-0 hOwfVc">
                    <div style={{ opacity: 1, transform: "translateX(0px) scale(1) translateZ(0px)" }}>
                      <div className="sc-92373a90-0 bfjbPH">
                        <div className="sc-7267286d-0 jnzbPz">
                          <h2 className="sc-d80c85c8-0 fOydRC" style={{ color: "#101828" }}>
                            Practical Training
                          </h2>
                          <span className="sc-1bcfe909-0 hfddyk"></span>
                        </div>
                        <div className="sc-92373a90-0 jDVVyT">
                          <h3 className="sc-d80c85c8-0 jiZnoN" style={{ color: "#1d2939" }}>
                            <span>
                              Get Ahead with{" "}
                              <span style={{ color: "rgb(105, 56, 239)", whiteSpace: "nowrap" }}>
                                Real-World Projects
                              </span>
                            </span>
                          </h3>
                          <p className="sc-d80c85c8-0 llfxhD" style={{ color: "#475467" }}>
                            <span>
                              How do you learn to build a building? By building a building! Our courses include live projects that significantly enhance your portfolio.
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="sc-7267286d-0 jnzbPz sc-24635258-0 yPbxN">
                      {/* International Exposure */}
                      <div className="sc-7267286d-0 heGmla" style={{ gap: "16px", width: "276px" }}>
                        <div className="sc-92373a90-0 hUMDcf">
                          {/* SVG Icon 1 */}
                          <svg width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#5925dc" varient="scaled" name="svg" className="sc-42e4aaa8-0 kByVYM">
                            <path d="M12.0199 22.7521C6.80991 22.7521 2.57129 18.5135 2.57129 13.3034C2.57129 8.0934 6.80991 3.85474 12.0199 3.85474C17.2299 3.85474 21.4685 8.0934 21.4685 13.3034C21.4685 18.5135 17.2299 22.7521 12.0199 22.7521ZM12.0199 5.52846C7.73281 5.52846 4.245 9.01631 4.245 13.3034C4.245 17.5905 7.73281 21.0784 12.0199 21.0784C16.307 21.0784 19.7948 17.5905 19.7948 13.3034C19.7948 9.01631 16.307 5.52846 12.0199 5.52846Z" fill="#5925DC"></path>
                            <path d="M13.9138 21.9154H12.2401V16.5166H9.46034C8.99814 16.5166 8.62349 16.142 8.62349 15.6797V13.0834H3.4082V11.4097H9.46034C9.92255 11.4097 10.2972 11.7843 10.2972 12.2465V14.8429H13.077C13.5392 14.8429 13.9138 15.2175 13.9138 15.6797V21.9154Z" fill="#5925DC"></path>
                            <path d="M10.1288 9.32252H7.06586C6.60365 9.32252 6.229 8.94787 6.229 8.48566V6.37879H7.90271V7.64879H9.29191V5.34888H10.9656V8.48566C10.9656 8.94787 10.591 9.32252 10.1288 9.32252Z" fill="#5925DC"></path>
                            <path d="M13.4427 7.13663C12.3004 4.70166 13.9594 1.81931 16.6462 1.69826C16.7076 1.69549 16.7693 1.69409 16.8314 1.69409C16.8934 1.69409 16.9551 1.69549 17.0165 1.69826C19.7033 1.81931 21.3623 4.70166 20.22 7.13663L16.8314 13.3036L13.4427 7.13663Z" fill="none"></path>
                            <path d="M16.8316 14.1404C16.5263 14.1404 16.2453 13.9741 16.0982 13.7065L12.7096 7.53955C12.701 7.52396 12.6929 7.50809 12.6854 7.49197C12.0184 6.07031 12.1069 4.41631 12.9218 3.06762C13.7151 1.75488 15.0934 0.930395 16.6089 0.862154C16.7569 0.855499 16.9067 0.855558 17.0542 0.862096C18.5699 0.930395 19.9482 1.75488 20.7415 3.06768C21.5565 4.41637 21.6448 6.07031 20.9779 7.49197C20.9703 7.50809 20.9623 7.52396 20.9537 7.53955L17.565 13.7065C17.418 13.9741 17.1369 14.1404 16.8316 14.1404ZM14.1901 6.75838L16.8316 11.5657L19.4732 6.75838C19.8905 5.8493 19.8297 4.79505 19.309 3.93326C18.7981 3.08782 17.9489 2.57785 16.9791 2.53413C16.8818 2.52981 16.7818 2.52975 16.6839 2.53419C15.7144 2.57785 14.8652 3.08782 14.3543 3.93326C13.8336 4.79505 13.7728 5.8493 14.1901 6.75838Z" fill="#5925DC"></path>
                            <path d="M16.8317 6.59016C17.5407 6.59016 18.1155 6.01536 18.1155 5.30631C18.1155 4.59726 17.5407 4.02246 16.8317 4.02246C16.1226 4.02246 15.5479 4.59726 15.5479 5.30631C15.5479 6.01536 16.1226 6.59016 16.8317 6.59016Z" fill="#5925DC"></path>
                          </svg>
                        </div>
                        <h5 className="sc-d80c85c8-0 jPWkUw" style={{ color: "#101828" }}>
                          International Exposure
                        </h5>
                        <hr className="sc-7465b7e7-0 uVOKe" style={{ borderColor: "rgb(208, 213, 221)" }} />
                        <p className="sc-d80c85c8-0 gcKazL" style={{ color: "#101828" }}>
                          Our live projects are curated in partnership with leading AEC firms based in the US, Hong Kong and Portugal.
                        </p>
                      </div>
                      {/* Gamified Experience */}
                      <div className="sc-7267286d-0 heGmla" style={{ gap: "16px", width: "276px" }}>
                        <div className="sc-92373a90-0 hUMDcf">
                          {/* SVG Icon 2 */}
                          <svg width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#5925dc" varient="scaled" name="svg" className="sc-42e4aaa8-0 kByVYM">
                            <path d="M9.12764 19.2399C9.45055 19.2399 9.73211 18.923 9.7316 18.6001L9.72988 16.2539C9.72974 16.1661 9.80081 16.0949 9.88858 16.0948L13.9978 16.0923C14.0856 16.0922 14.1569 16.1635 14.1567 16.2514L14.155 18.6592C14.1545 18.9822 14.4161 19.2442 14.739 19.2442L15.3494 19.2399H16.0566L16.3915 19.2353H19.4168H20.7306C21.1107 19.2353 21.4188 18.9272 21.4188 18.5471V6.32944C21.4188 6.11133 21.242 5.93452 21.0239 5.93452H20.4463C20.2443 5.93452 20.0805 5.77076 20.0805 5.56876V4.99502C20.0805 4.77691 19.9037 4.6001 19.6856 4.6001H4.17408C3.95598 4.6001 3.77917 4.77691 3.77917 4.99502V5.56876C3.77917 5.77076 3.61541 5.93452 3.41341 5.93452H2.86269C2.64458 5.93452 2.46777 6.11133 2.46777 6.32944V18.5471C2.46777 18.9272 2.77591 19.2353 3.15601 19.2353H9.12624M15.7298 15.1875C15.7304 14.7874 15.4063 14.4628 15.0062 14.4628H13.6911V14.465L10.1956 14.4679V14.4628H8.91844C8.49717 14.4628 8.15567 14.8043 8.15567 15.2255V16.2906L8.15984 17.0948C8.16094 17.3069 7.98928 17.4795 7.77715 17.4795H4.12367V6.73864C4.12367 6.52728 4.29502 6.35594 4.50637 6.35594H19.3802C19.5916 6.35594 19.7629 6.52728 19.7629 6.73864V17.4795H16.1081C15.8965 17.4795 15.725 17.3078 15.7254 17.0962L15.7289 16.2833L15.7298 15.1875Z" fill="#5925DC"></path>
                            <path d="M17.7871 8.67212H16.1944C16.1379 8.67212 16.092 8.71797 16.092 8.77451V10.018C16.092 10.1873 15.9547 10.3247 15.7853 10.3247H14.5492C14.4926 10.3247 14.4468 10.3705 14.4468 10.427V12.0198C14.4468 12.0763 14.4926 12.1222 14.5492 12.1222H16.1419C16.1984 12.1222 16.2443 12.0763 16.2443 12.0198V10.7763C16.2443 10.6069 16.3816 10.4696 16.5509 10.4696H17.7871C17.8437 10.4696 17.8895 10.4238 17.8895 10.3672V8.77451C17.8895 8.71797 17.8437 8.67212 17.7871 8.67212Z" fill="#5925DC"></path>
                            <path d="M9.97139 9.62159H9.04225C8.91491 9.62159 8.81168 9.51836 8.81168 9.39102V8.43578C8.81168 8.34437 8.73757 8.27026 8.64616 8.27026H7.44873C7.35732 8.27026 7.28321 8.34437 7.28321 8.43578V9.39102C7.28321 9.51836 7.17998 9.62159 7.05263 9.62159H6.10107C6.00965 9.62159 5.93555 9.6957 5.93555 9.78712V10.9845C5.93555 11.076 6.00965 11.1501 6.10107 11.1501H7.05263C7.17998 11.1501 7.28321 11.2533 7.28321 11.3806V12.3285C7.28321 12.42 7.35732 12.4941 7.44873 12.4941H8.64616C8.73757 12.4941 8.81168 12.42 8.81168 12.3285V11.3806C8.81168 11.2533 8.91491 11.1501 9.04225 11.1501H9.97139C10.0628 11.1501 10.1369 11.076 10.1369 10.9845V9.78712C10.1369 9.6957 10.0628 9.62159 9.97139 9.62159Z" fill="#5925DC"></path>
                          </svg>
                        </div>
                        <h5 className="sc-d80c85c8-0 jPWkUw" style={{ color: "#101828" }}>
                          Gamified Experience
                        </h5>
                        <hr className="sc-7465b7e7-0 uVOKe" style={{ borderColor: "rgb(208, 213, 221)" }} />
                        <p className="sc-d80c85c8-0 gcKazL" style={{ color: "#101828" }}>
                          Take instructions from a client, pitch innovative solutions, and see your project unfold – all in a virtual simulation.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="sc-68483de-0 faMOFi" style={{ height: "100%", display: "flex" }}>
                    <div className="sc-92373a90-0 eELWrA" style={{ width: "100%", aspectRatio: "576 / 480" }}>
                      <img
                        alt="Gamified Experience"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        sizes="100vw"
                        src="https://www.novatr.com/nextImageExportOptimizer/oneistox-assets.s3.ap-south-1.amazonaws.com_images-v2_home_practical_training-opt-1520.WEBP"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          inset: 0,
                          objectFit: "cover",
                          color: "transparent"
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="sc-7267286d-0 jnzbPz sc-24635258-1 jgiXkQ">
                  <p className="sc-d80c85c8-0 ioSeOM" style={{ color: "#fdead7" }}>
                    Learn more about the gamified experience in Novatr's live projects.
                  </p>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.archdaily.com/984231/how-gamification-can-transform-architecture-education?ad_medium=gallery"
                    data-cy="link_homepage_click-to-learn-more"
                  >
                    <p className="sc-d80c85c8-0 dsdCuv" style={{ color: "#eaecf0", cursor: "pointer" }}>
                      Click to learn more
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Oneistox Gamified Experience Link */}
      <div className="sc-7267286d-0 jnzbPz sc-24635258-2 gppuAB">
        <p className="sc-d80c85c8-0 ioSeOM" style={{ color: "#fdead7" }}>
          Learn more about the gamified experience in Oneistox's live projects.
        </p>
        <a
          className="link__"
          href="https://www.archdaily.com/984231/how-gamification-can-transform-architecture-education?ad_medium=gallery"
          data-cy="link_homepage_click-to-learn-more"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="sc-d80c85c8-0 dsdCuv" style={{ color: "#eaecf0", cursor: "pointer" }}>
            Click to learn more
          </p>
        </a>
      </div>
      {/* Placement Assistance Section */}
      <div className="sc-85598a58-0 dCQOMo">
        <div className="sc-115b9aa5-0 duvreu">
          <div className="sc-92373a90-0 iZUIWq">
            <div
              className="sc-92373a90-0 hUMDcf"
              style={{
                position: "absolute",
                zIndex: 6,
                marginLeft: "-60px",
                marginTop: "-320px"
              }}
            ></div>
            <div
              className="sc-92373a90-0 gJuSFz"
              style={{ height: "240px" }}
            >
              <div
                className="sc-92373a90-0 ztOeA"
                style={{
                  display: "inline-block",
                  height: "100%",
                  width: "3px"
                }}
              ></div>
            </div>
            <div className="sc-92373a90-0 dDmvVb">
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                color="#6938ef"
                strokeColor="#6938ef"
                variant="scaled"
                name="svg"
                className="sc-42e4aaa8-0 fBbAUD"
              >
                <path
                  d="M19.6129 20.8773H4.38605C3.89967 20.8773 3.50537 20.483 3.50537 19.9966V9.16462C3.50537 8.67824 3.89967 8.28394 4.38605 8.28394H19.6129C20.0993 8.28394 20.4936 8.67824 20.4936 9.16462V19.9966C20.4936 20.483 20.0993 20.8773 19.6129 20.8773ZM5.26672 19.1159H18.7323V10.0453H5.26672V19.1159Z"
                  fill="#5925DC"
                ></path>
                <path
                  d="M14.5969 5.29929V3.80949C14.5969 3.60539 14.4314 3.43994 14.2274 3.43994H9.65474C9.45065 3.43994 9.2852 3.60539 9.2852 3.80949V5.29929C9.2852 5.51103 9.11355 5.68268 8.90181 5.68268H7.41202C7.20793 5.68268 7.04248 5.84813 7.04248 6.05223V8.27954H9.63931V6.42019C9.63931 6.20845 9.81096 6.0368 10.0227 6.0368H13.8594C14.0711 6.0368 14.2428 6.20845 14.2428 6.42019V8.27954H16.8396V6.05223C16.8396 5.84813 16.6742 5.68268 16.4701 5.68268H14.9803C14.7685 5.68268 14.5969 5.51103 14.5969 5.29929Z"
                  fill="#5925DC"
                ></path>
              </svg>
            </div>
            <div style={{ opacity: 1, transform: "translateX(0px) scale(1) translateZ(0px)" }}>
              <div className="sc-92373a90-0 huRFoB">
                <div className="sc-7267286d-0 jnzbPz">
                  <h2 className="sc-d80c85c8-0 fOydRC" style={{ color: "#101828" }}>
                    Placement Assistance
                  </h2>
                  <span className="sc-1bcfe909-0 hfddyk"></span>
                </div>
                <div className="sc-92373a90-0 jDVVyT">
                  <h3 className="sc-d80c85c8-0 jiZnoN" style={{ color: "#1d2939" }}>
                    <span>
                      <span style={{ color: "rgb(89, 37, 220)" }}>Land the Job </span>
                      You Dreamed Of
                    </span>
                  </h3>
                  <p className="sc-d80c85c8-0 llfxhD" style={{ color: "#475467" }}>
                    <span>
                      Scouting relevant opportunities, networking with companies, and landing interviews – you'll ace it all with our personalised career guidance.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Testimonials */}
          <div className="sc-68483de-0 iahdoU">
            <div className="sc-790325f8-0 eywRpl" data-type="firstJob">
              <div
                className="sc-7267286d-0 joNirn"
                style={{
                  backgroundColor: "rgb(248, 249, 252)",
                  minHeight: "244px",
                  borderRadius: "12px"
                }}
              >
                <div className="sc-92373a90-0 sc-722f66ab-0 hUMDcf cpbDTK">
                  <div
                    className="sc-92373a90-0 jhMGJn"
                    style={{
                      display: "inline-flex",
                      alignItems: "center"
                    }}
                  >
                    <div data-testid="leading-icon" className="sc-92373a90-0 ikXldN">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        color="#a6f4c5"
                        variant="line"
                        name="svg"
                        className="sc-42e4aaa8-0 hWiYqQ"
                      >
                        <path
                          d="M13 2L4.09344 12.6879C3.74463 13.1064 3.57023 13.3157 3.56756 13.4925C3.56524 13.6461 3.63372 13.7923 3.75324 13.8889C3.89073 14 4.16316 14 4.70802 14H12L11 22L19.9065 11.3121C20.2553 10.8936 20.4297 10.6843 20.4324 10.5075C20.4347 10.3539 20.3663 10.2077 20.2467 10.1111C20.1092 10 19.8368 10 19.292 10H12L13 2Z"
                          stroke="black"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <div
                      className="sc-92373a90-0 fbCqbk"
                      style={{
                        color: "#d1fadf",
                        fontSize: "18px"
                      }}
                    >
                      83% Salary Hike
                    </div>
                  </div>
                </div>
                <div className="sc-7267286d-0 glrYAj">
                  <div
                    className="sc-92373a90-0 hUMDcf relative"
                    style={{
                      width: "56px",
                      height: "56px",
                      borderRadius: "46px",
                      backgroundColor: "pink",
                      overflow: "hidden"
                    }}
                  >
                    <img
                      alt="Aditya Shukla"
                      loading="lazy"
                      decoding="async"
                      data-nimg="fill"
                      sizes="100vw"
                      src="https://www.novatr.com/nextImageExportOptimizer/oneistox-assets.s3.ap-south-1.amazonaws.com_images-v2_home_testimonials_manav-opt-1520.WEBP"
                      style={{
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        inset: 0,
                        objectFit: "cover",
                        color: "transparent"
                      }}
                    />
                  </div>
                  <div className="sc-92373a90-0 irdpvi">
                    <h6 className="sc-d80c85c8-0 bwYTiC" style={{ color: "#101828" }}>
                      Maannav Jaisingh
                    </h6>
                    <span className="sc-d80c85c8-0 dRLKzR" style={{ color: "#475467" }}>
                      Placed at DAR, as an Architect
                    </span>
                  </div>
                </div>
                <p className="sc-d80c85c8-0 iRDJCg" style={{ color: "#101828" }}>
                  The course was an excellent blend of theoretical concepts and practical application. It’s an excellent investment for those looking to enhance their career prospects and stay at the forefront of the rapidly evolving AEC industry.
                </p>
              </div>
            </div>
          </div>
          <div className="sc-68483de-0 bjkQDL">
            <div className="sc-790325f8-0 bvfFOe" data-type="salaryHike">
              <div
                className="sc-7267286d-0 joNirn"
                style={{
                  backgroundColor: "rgb(248, 249, 252)",
                  minHeight: "244px",
                  borderRadius: "12px"
                }}
              >
                <div className="sc-92373a90-0 sc-722f66ab-0 hUMDcf cpbDTK">
                  <div
                    className="sc-92373a90-0 kOcGwc"
                    style={{
                      display: "inline-flex",
                      alignItems: "center"
                    }}
                  >
                    <div data-testid="leading-icon" className="sc-92373a90-0 ikXldN">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        color="#fedf89"
                        variant="line"
                        name="svg"
                        className="sc-42e4aaa8-0 fJwkmj"
                      >
                        <path
                          d="M13 2L4.09344 12.6879C3.74463 13.1064 3.57023 13.3157 3.56756 13.4925C3.56524 13.6461 3.63372 13.7923 3.75324 13.8889C3.89073 14 4.16316 14 4.70802 14H12L11 22L19.9065 11.3121C20.2553 10.8936 20.4297 10.6843 20.4324 10.5075C20.4347 10.3539 20.3663 10.2077 20.2467 10.1111C20.1092 10 19.8368 10 19.292 10H12L13 2Z"
                          stroke="black"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <div
                      className="sc-92373a90-0 fFseOV"
                      style={{
                        color: "#fef0c7",
                        fontSize: "18px"
                      }}
                    >
                      164% Salary Hike
                    </div>
                  </div>
                </div>
                <div className="sc-7267286d-0 glrYAj">
                  <div
                    className="sc-92373a90-0 hUMDcf relative"
                    style={{
                      width: "56px",
                      height: "56px",
                      borderRadius: "46px",
                      backgroundColor: "pink",
                      overflow: "hidden"
                    }}
                  >
                    <img
                      alt="Aditya Shukla"
                      loading="lazy"
                      decoding="async"
                      data-nimg="fill"
                      sizes="100vw"
                      src="https://www.novatr.com/nextImageExportOptimizer/oneistox-assets.s3.ap-south-1.amazonaws.com_images-v2_home_testimonials_ravi-opt-1520.WEBP"
                      style={{
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        inset: 0,
                        objectFit: "cover",
                        color: "transparent"
                      }}
                    />
                  </div>
                  <div className="sc-92373a90-0 irdpvi">
                    <h6 className="sc-d80c85c8-0 bwYTiC" style={{ color: "#101828" }}>
                      Ravi Kumar
                    </h6>
                    <span className="sc-d80c85c8-0 dRLKzR" style={{ color: "#475467" }}>
                      Placed at DAR, as an Architect
                    </span>
                  </div>
                </div>
                <p className="sc-d80c85c8-0 iRDJCg" style={{ color: "#101828" }}>
                  After completing the BIM course, I was very grateful for the Novatr team’s guidance, interview training, and assistance in finding the right employment opportunities. They were extremely supportive throughout the process.
                </p>
              </div>
            </div>
          </div>
          {/* Placement Stats */}
          <div className="sc-92373a90-0 iXuAYm">
            <div className="sc-92373a90-0 hUMDcf">
              <p className="sc-d80c85c8-0 gcKazL" style={{ color: "#101828" }}>
                Our BIM graduates landed placements at top MNCs with an average pay hike of 60%!
              </p>
              <div className="sc-7267286d-0 glrYAj">
                <a
                  target="_blank"
                  className="link__"
                  href="https://www.novatr.com/blog/bim-graduate-placements"
                  data-cy="link_homepage_click-to-learn-more"
                >
                  <p className="sc-d80c85c8-0 cCFkOn" style={{ color: "#344054" }}>
                    Click to learn more
                  </p>
                </a>
                <div className="sc-7267286d-0 bLubbX">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    color="black"
                    variant="line"
                    name="svg"
                    className="sc-42e4aaa8-0 hQrIQv"
                  >
                    <path
                      d="M4 12H20M20 12L14 6M20 12L14 18"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          {/* Placement Logos */}
          <div className="sc-92373a90-0 jDasLf" style={{ display: "flex" }}>
            <p className="sc-d80c85c8-0 blgAeM" style={{ color: "#475467" }}>
              Our Learners are placed at
            </p>
            <div className="sc-7267286d-0 THEFD" style={{ width: "100%" }}>
              {[
                {
                  alt: "AECOM",
                  width: 90,
                  height: 32,
                  src: "https://oneistox-assets.s3.ap-south-1.amazonaws.com/images-v2/home/placements/atkins.svg"
                },
                {
                  alt: "UNS",
                  width: 60,
                  height: 32,
                  src: "https://oneistox-assets.s3.ap-south-1.amazonaws.com/images-v2/home/placements/bdp.svg"
                },
                {
                  alt: "RSP",
                  width: 54,
                  height: 22,
                  src: "https://oneistox-assets.s3.ap-south-1.amazonaws.com/images-v2/home/placements/colliers.svg"
                },
                {
                  alt: "Populous",
                  width: 115,
                  height: 32,
                  src: "https://oneistox-assets.s3.ap-south-1.amazonaws.com/images-v2/home/placements/dar_group.svg"
                },
                {
                  alt: "Henning Larsen",
                  width: 70,
                  height: 32,
                  src: "https://oneistox-assets.s3.ap-south-1.amazonaws.com/images-v2/home/placements/khatib_alami.svg"
                },
                {
                  alt: "Buro Haffold",
                  width: 117,
                  height: 32,
                  src: "https://oneistox-assets.s3.ap-south-1.amazonaws.com/images-v2/home/placements/srinsoft.svg"
                },
                {
                  alt: "External Reference",
                  width: 108,
                  height: 32,
                  src: "https://oneistox-assets.s3.ap-south-1.amazonaws.com/images-v2/home/placements/tata_consulting.svg"
                },
                {
                  alt: "Benoy",
                  width: 116,
                  height: 32,
                  src: "https://oneistox-assets.s3.ap-south-1.amazonaws.com/images-v2/home/placements/techture.svg"
                },
                {
                  alt: "HH",
                  width: 85,
                  height: 32,
                  src: "https://oneistox-assets.s3.ap-south-1.amazonaws.com/images-v2/home/placements/the_bim_engineers.svg"
                }
              ].map((logo, idx) => (
                <div className="sc-7267286d-0 jnzbPz sc-697adae-0 ffIBxc" key={idx}>
                  <img
                    alt={logo.alt}
                    loading="lazy"
                    width={logo.width}
                    height={logo.height}
                    decoding="async"
                    data-nimg="1"
                    src={logo.src}
                    style={{ color: "transparent" }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Innovative Learning Section */}
      <div className="sc-92373a90-0 kMjFom">
        <div className="sc-85598a58-0 dCQOMo">
          <div className="sc-115b9aa5-0 eMOtyj">
            <div className="sc-68483de-0 ehQZnx">
              <div className="sc-92373a90-0 cFTwUm">
                <div className="sc-92373a90-0 ztOeA" style={{ display: "inline-block", height: "100%", width: "3px" }}></div>
              </div>
              <div className="sc-92373a90-0 byPjOP" style={{ display: "flex" }}>
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  color="#"
                  stroke="#"
                  variant="scaled"
                  name="svg"
                  className="sc-42e4aaa8-0 fBbAUD"
                >
                  <path d="M8.22671 20.4815C7.86544 20.4815 7.52553 20.3399 7.27046 20.0837L2.23412 15.0495C1.70823 14.522 1.70879 13.6651 2.23355 13.1393L3.38196 11.9908L2.23468 10.8469C1.70936 10.321 1.70936 9.46421 2.23355 8.9372L7.26821 3.90416C7.52272 3.64908 7.86207 3.50806 8.22334 3.50806C8.58404 3.50806 8.92339 3.64852 9.17847 3.9036L11.0921 5.83973C11.2932 6.06671 11.2842 6.41113 11.0702 6.62688L5.71528 12.0324L10.7786 17.5942C10.9719 17.806 10.9792 18.1279 10.796 18.3487L10.2184 19.0454C10.2072 19.0589 10.1948 19.0724 10.1825 19.0847L9.18128 20.0854C8.92732 20.3405 8.58797 20.4815 8.22671 20.4815ZM4.54047 12.3875C4.51069 12.4516 4.47417 12.5094 4.43147 12.5634C4.40732 12.5931 4.36181 12.6398 4.33259 12.6645L3.04766 13.9523C2.97013 14.0303 2.97013 14.1573 3.04822 14.236L8.084 19.2713C8.13569 19.323 8.19525 19.3308 8.22671 19.3308C8.25761 19.3308 8.3166 19.323 8.36717 19.2724L9.34983 18.2903L9.59142 17.9987L4.69947 12.6257C4.68936 12.6151 4.67981 12.6033 4.67082 12.592C4.61744 12.5297 4.57362 12.4605 4.54047 12.3875ZM8.22334 4.65872C8.17221 4.65872 8.12108 4.67839 8.08175 4.71715L3.04935 9.74963C2.97125 9.82829 2.97069 9.95583 3.04878 10.0339L4.37136 11.3565C4.38709 11.3722 4.41911 11.4071 4.43316 11.4245C4.4826 11.4874 4.52362 11.5565 4.55564 11.6296C4.59722 11.5475 4.65172 11.4711 4.71914 11.4043L9.8611 6.21279L8.36492 4.71715C8.32559 4.67839 8.27446 4.65872 8.22334 4.65872Z" fill="#5925DC"></path>
                  <path d="M16.1256 20.4816C15.7644 20.4816 15.425 20.3406 15.1699 20.085L14.1693 19.0849C14.1564 19.0725 14.1446 19.059 14.1328 19.045L13.5558 18.3483C13.3732 18.1275 13.3805 17.8061 13.5738 17.5943L18.6365 12.0331L13.281 6.62703C13.0675 6.41128 13.0586 6.06631 13.2603 5.83932L13.4249 5.65447L15.1739 3.90376C15.684 3.3936 16.574 3.39304 17.0841 3.90432L22.116 8.93623C22.643 9.46324 22.6436 10.3206 22.1171 10.8471L20.9704 11.9944L22.1177 13.1389C22.6447 13.6653 22.6447 14.5227 22.1177 15.0491L17.0819 20.085C16.8263 20.3406 16.4863 20.4816 16.1256 20.4816ZM15.002 18.2904L15.9841 19.272C16.0357 19.3237 16.1161 19.3169 16.1256 19.331C16.156 19.331 16.2155 19.3231 16.2667 19.272L21.3041 14.2361C21.3822 14.158 21.3822 14.0305 21.3041 13.9524L19.981 12.6293C19.9686 12.6169 19.94 12.5866 19.9287 12.5731C19.8821 12.5152 19.8428 12.4534 19.8113 12.3882C19.7782 12.4613 19.7349 12.5298 19.6815 12.5922C19.6725 12.6034 19.663 12.6152 19.6529 12.6259L14.7609 17.9994L15.002 18.2904ZM14.4918 6.21351L19.6349 11.405C19.7018 11.473 19.7563 11.5494 19.7973 11.6314C19.8293 11.5544 19.8714 11.4848 19.9214 11.4218C19.9349 11.4056 19.9653 11.3713 19.9804 11.3567L21.3036 10.0335C21.3817 9.95542 21.3811 9.82788 21.303 9.74922L16.27 4.71787C16.2189 4.66618 16.1594 4.65888 16.129 4.65888C16.1211 4.65944 16.0391 4.66506 15.9874 4.71731L14.4918 6.21351Z" fill="#5925DC"></path>
                </svg>
              </div>
              <div style={{ opacity: 1, transform: "translateX(0px) scale(1) translateZ(0px)" }}>
                <div className="sc-92373a90-0 huRFoB">
                  <div className="sc-7267286d-0 jnzbPz">
                    <h2 className="sc-d80c85c8-0 fOydRC" style={{ color: "#101828" }}>
                      Innovative Learning
                    </h2>
                    <span className="sc-1bcfe909-0 hfddyk"></span>
                  </div>
                  <div className="sc-92373a90-0 jDVVyT">
                    <h3 className="sc-d80c85c8-0 jiZnoN" style={{ color: "#1d2939" }}>
                      <span>
                        An
                        <span style={{ color: "rgb(89, 37, 220)" }}> Unforgettable Experience</span>
                      </span>
                    </h3>
                    <p className="sc-d80c85c8-0 llfxhD" style={{ color: "#475467" }}>
                      <span>
                        Traditional teaching methods have no place in the modern world. That's why we infuse digital tools with new-age pedagogies to enhance your learning.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="sc-92373a90-0 duAmHM" style={{ height: "250px", display: "flex" }}>
                <div className="sc-92373a90-0 ztOeA" style={{ display: "inline-block", height: "100%", width: "3px" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Innovative Learning Slider */}
      <div style={{ width: "100%" }} className="sc-92373a90-0 blXBmF relative">
        <div className="sc-85598a58-0 dCQOMo">
          <div className="sc-115b9aa5-0 eMOtyj sc-16245d71-1 bfdMuT">
            <div className="sc-68483de-0 iENhdk">
              <div className="sc-7267286d-0 dRRMjY sc-16245d71-0 gRxBiS">
                {/* Card 1 */}
                <div className="sc-92373a90-0 sc-bda8e52b-0 hUMDcf enBCuL">
                  <div className="sc-92373a90-0 hVecjm" style={{ width: 48, height: 48 }}>
                    {/* SVG Icon */}
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="white" varient="scaled" name="svg" className="sc-42e4aaa8-0 kOcPjY"><path d="M13.9907 6.01953L13.9908 11.3468H15.3554L15.3663 6.01953H13.9907Z" fill="#5925DC"></path><path d="M16.1699 7.56079L16.17 11.3465H17.5346L17.5455 7.56079H16.1699Z" fill="#5925DC"></path><path d="M12.0088 9.00026V11.3467H13.3674V9.00026H12.0088Z" fill="#5925DC"></path><path fillRule="evenodd" clipRule="evenodd" d="M5.65332 17.5359C4.84176 17.5359 4.18387 18.1938 4.18387 19.0054V21.2432H2.67529V19.0054C2.67529 17.3606 4.00861 16.0273 5.65332 16.0273H9.81765C11.4624 16.0273 12.7957 17.3606 12.7957 19.0054V21.2657H11.2871V19.0054C11.2871 18.1938 10.6292 17.5359 9.81765 17.5359H5.65332Z" fill="#5925DC"></path><path fillRule="evenodd" clipRule="evenodd" d="M6.61303 10.6922C5.95963 10.6922 5.42996 11.2218 5.42996 11.8752V13.7891C5.42996 14.4425 5.95963 14.9722 6.61303 14.9722H8.76191C9.4153 14.9722 9.94497 14.4425 9.94497 13.7891V11.8752C9.94497 11.2218 9.4153 10.6922 8.76191 10.6922H6.61303ZM3.92139 11.8752C3.92139 10.3887 5.12648 9.18359 6.61303 9.18359H8.76191C10.2485 9.18359 11.4535 10.3887 11.4535 11.8752V13.7891C11.4535 15.2757 10.2485 16.4808 8.76191 16.4808H6.61303C5.12648 16.4808 3.92139 15.2757 3.92139 13.7891V11.8752Z" fill="#5925DC"></path><path d="M20.9349 4.42793L20.9353 4.42762C20.9349 4.25664 20.7967 4.11836 20.6259 4.1182L19.8798 4.11822C19.8764 4.11819 19.8732 4.11807 19.8698 4.11775C19.8397 4.11449 19.8121 4.10108 19.7911 4.08123L19.7874 4.07755C19.7675 4.05646 19.7541 4.02888 19.7509 3.99883C19.7506 3.99547 19.7504 3.99221 19.7506 3.98865V3.2426C19.7506 3.07198 19.6121 2.93352 19.4414 2.9335L19.4413 2.93335L9.26088 2.9335L9.26058 2.93382C9.08961 2.9335 8.95113 3.07195 8.95133 3.24279L8.95128 3.98882C8.95133 3.99223 8.95128 3.99559 8.95103 3.99901C8.94762 4.02888 8.93439 4.05661 8.91448 4.07769L8.91078 4.08139C8.88974 4.10128 8.86214 4.11466 8.83211 4.11791C8.8287 4.1182 8.82549 4.11836 8.82208 4.11835H8.07601C7.90538 4.11836 7.76695 4.25683 7.7669 4.42747L7.7666 4.42777L7.76665 8.31641H9.15277L9.14719 4.41668L9.14734 4.41683C9.14734 4.41683 9.14754 4.41636 9.14734 4.41621L9.14769 4.41651C9.14769 4.38327 9.16122 4.35338 9.1828 4.3315C9.20448 4.30978 9.23456 4.2964 9.26779 4.29638L9.2675 4.29608C9.2675 4.29608 9.26794 4.29593 9.26809 4.29608L9.26794 4.29593L19.419 4.31134L19.4193 4.31164L19.4189 4.31194C19.4523 4.31196 19.4823 4.32534 19.504 4.34705C19.5257 4.3688 19.5391 4.39883 19.5391 4.43209L19.5394 4.43177L19.5394 4.43241L19.555 15.3666L19.5548 15.3664L19.5548 15.367L19.5545 15.3667C19.5545 15.4 19.5409 15.4298 19.5194 15.4517C19.4977 15.4735 19.4677 15.4868 19.4343 15.4868L19.4347 15.4871L19.434 15.4871L19.4342 15.4873L13.5121 15.4783V16.8858L19.441 16.8858L19.4413 16.8855C19.6123 16.8858 19.7507 16.7473 19.7506 16.5765V15.8304C19.7506 15.8271 19.7506 15.8237 19.7509 15.8203C19.7541 15.7902 19.7675 15.7627 19.7873 15.7416C19.788 15.7409 19.7886 15.7403 19.7892 15.7397C19.7898 15.7391 19.7905 15.7385 19.7911 15.7379C19.8122 15.718 19.8397 15.7046 19.8698 15.7014C19.8731 15.7011 19.8764 15.7009 19.8798 15.7009L20.6259 15.7009C20.7965 15.7009 20.9349 15.5625 20.935 15.3918L20.9348 15.3916L20.9349 4.42793Z" fill="#5925DC"></path><path d="M10.8265 2.93335H8.08169C7.90713 2.93335 7.76562 3.07486 7.76562 3.24941V5.41501H8.9912V4.29593H10.8265C11.0011 4.29593 11.1426 4.15443 11.1426 3.97987V3.24941C11.1426 3.07486 11.0011 2.93335 10.8265 2.93335Z" fill="#5925DC"></path><path d="M17.8747 16.886H20.6195C20.794 16.886 20.9355 16.7444 20.9355 16.5699V14.4043H19.71V15.5234H17.8747C17.7001 15.5234 17.5586 15.6649 17.5586 15.8394V16.5699C17.5586 16.7444 17.7001 16.886 17.8747 16.886Z" fill="#5925DC"></path></svg>
                  </div>
                  <div className="sc-92373a90-0 kjYnTS" style={{ width: 48, height: 48 }}>
                    {/* SVG Icon 2 */}
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#53389e" varient="scaled" name="svg" className="sc-42e4aaa8-0 jYKPph"><path d="M13.9907 6.01953L13.9908 11.3468H15.3554L15.3663 6.01953H13.9907Z" fill="#5925DC"></path><path d="M16.1699 7.56079L16.17 11.3465H17.5346L17.5455 7.56079H16.1699Z" fill="#5925DC"></path><path d="M12.0088 9.00026V11.3467H13.3674V9.00026H12.0088Z" fill="#5925DC"></path><path fillRule="evenodd" clipRule="evenodd" d="M5.65332 17.5359C4.84176 17.5359 4.18387 18.1938 4.18387 19.0054V21.2432H2.67529V19.0054C2.67529 17.3606 4.00861 16.0273 5.65332 16.0273H9.81765C11.4624 16.0273 12.7957 17.3606 12.7957 19.0054V21.2657H11.2871V19.0054C11.2871 18.1938 10.6292 17.5359 9.81765 17.5359H5.65332Z" fill="#5925DC"></path><path fillRule="evenodd" clipRule="evenodd" d="M6.61303 10.6922C5.95963 10.6922 5.42996 11.2218 5.42996 11.8752V13.7891C5.42996 14.4425 5.95963 14.9722 6.61303 14.9722H8.76191C9.4153 14.9722 9.94497 14.4425 9.94497 13.7891V11.8752C9.94497 11.2218 9.4153 10.6922 8.76191 10.6922H6.61303ZM3.92139 11.8752C3.92139 10.3887 5.12648 9.18359 6.61303 9.18359H8.76191C10.2485 9.18359 11.4535 10.3887 11.4535 11.8752V13.7891C11.4535 15.2757 10.2485 16.4808 8.76191 16.4808H6.61303C5.12648 16.4808 3.92139 15.2757 3.92139 13.7891V11.8752Z" fill="#5925DC"></path><path d="M20.9349 4.42793L20.9353 4.42762C20.9349 4.25664 20.7967 4.11836 20.6259 4.1182L19.8798 4.11822C19.8764 4.11819 19.8732 4.11807 19.8698 4.11775C19.8397 4.11449 19.8121 4.10108 19.7911 4.08123L19.7874 4.07755C19.7675 4.05646 19.7541 4.02888 19.7509 3.99883C19.7506 3.99547 19.7504 3.99221 19.7506 3.98865V3.2426C19.7506 3.07198 19.6121 2.93352 19.4414 2.9335L19.4413 2.93335L9.26088 2.9335L9.26058 2.93382C9.08961 2.9335 8.95113 3.07195 8.95133 3.24279L8.95128 3.98882C8.95133 3.99223 8.95128 3.99559 8.95103 3.99901C8.94762 4.02888 8.93439 4.05661 8.91448 4.07769L8.91078 4.08139C8.88974 4.10128 8.86214 4.11466 8.83211 4.11791C8.8287 4.1182 8.82549 4.11836 8.82208 4.11835H8.07601C7.90538 4.11836 7.76695 4.25683 7.7669 4.42747L7.7666 4.42777L7.76665 8.31641H9.15277L9.14719 4.41668L9.14734 4.41683C9.14734 4.41683 9.14754 4.41636 9.14734 4.41621L9.14769 4.41651C9.14769 4.38327 9.16122 4.35338 9.1828 4.3315C9.20448 4.30978 9.23456 4.2964 9.26779 4.29638L9.2675 4.29608C9.2675 4.29608 9.26794 4.29593 9.26809 4.29608L9.26794 4.29593L19.419 4.31134L19.4193 4.31164L19.4189 4.31194C19.4523 4.31196 19.4823 4.32534 19.504 4.34705C19.5257 4.3688 19.5391 4.39883 19.5391 4.43209L19.5394 4.43177L19.5394 4.43241L19.555 15.3666L19.5548 15.3664L19.5548 15.367L19.5545 15.3667C19.5545 15.4 19.5409 15.4298 19.5194 15.4517C19.4977 15.4735 19.4677 15.4868 19.4343 15.4868L19.4347 15.4871L19.434 15.4871L19.4342 15.4873L13.5121 15.4783V16.8858L19.441 16.8858L19.4413 16.8855C19.6123 16.8858 19.7507 16.7473 19.7506 16.5765V15.8304C19.7506 15.8271 19.7506 15.8237 19.7509 15.8203C19.7541 15.7902 19.7675 15.7627 19.7873 15.7416C19.788 15.7409 19.7886 15.7403 19.7892 15.7397C19.7898 15.7391 19.7905 15.7385 19.7911 15.7379C19.8122 15.718 19.8397 15.7046 19.8698 15.7014C19.8731 15.7011 19.8764 15.7009 19.8798 15.7009L20.6259 15.7009C20.7965 15.7009 20.9349 15.5625 20.935 15.3918L20.9348 15.3916L20.9349 4.42793Z" fill="#5925DC"></path><path d="M10.8265 2.93335H8.08169C7.90713 2.93335 7.76562 3.07486 7.76562 3.24941V5.41501H8.9912V4.29593H10.8265C11.0011 4.29593 11.1426 4.15443 11.1426 3.97987V3.24941C11.1426 3.07486 11.0011 2.93335 10.8265 2.93335Z" fill="#5925DC"></path><path d="M17.8747 16.886H20.6195C20.794 16.886 20.9355 16.7444 20.9355 16.5699V14.4043H19.71V15.5234H17.8747C17.7001 15.5234 17.5586 15.6649 17.5586 15.8394V16.5699C17.5586 16.7444 17.7001 16.886 17.8747 16.886Z" fill="#5925DC"></path></svg>
                  </div>
                  <div className="sc-92373a90-0 hUMDcf" style={{ padding: "0px 8px" }}>
                    <h5 className="sc-d80c85c8-0 jFiFRu">
                      Personalised Feedback and <span style={{ whiteSpace: "nowrap" }}>Skill-Mapping</span>
                    </h5>
                    <div className="sc-bda8e52b-1 ezKqmf"></div>
                    <p className="sc-d80c85c8-0 buJVkV">
                      1:1 feedback sessions help you improve as you learn. A special Skill Map identifies your core competencies so you can leverage them for your career.
                    </p>
                  </div>
                </div>
                {/* Card 2 */}
                <div className="sc-92373a90-0 sc-bda8e52b-0 hUMDcf enBCuL">
                  <div className="sc-92373a90-0 hVecjm" style={{ width: 48, height: 48 }}>
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="white" varient="scaled" name="svg" className="sc-42e4aaa8-0 kOcPjY"><path d="M10.0591 8.33332V15.2448C10.0591 15.7083 10.6195 15.9405 10.9472 15.6127L14.393 12.1669C14.5958 11.9642 14.5962 11.6356 14.3941 11.4322L10.9483 7.9665C10.621 7.6373 10.0591 7.86909 10.0591 8.33332Z" fill="#5925DC"></path><path d="M19.3807 20.1048H4.29586C3.89617 20.1048 3.57275 19.7813 3.57275 19.3817V4.2961C3.57275 3.89642 3.89617 3.573 4.29586 3.573H19.3807C19.7804 3.573 20.1038 3.89642 20.1038 4.2961V19.3817C20.1038 19.7813 19.7804 20.1048 19.3807 20.1048ZM5.01896 18.6586H18.6576V5.0192H5.01896V18.6586Z" fill="#5925DC"></path></svg>
                  </div>
                  <div className="sc-92373a90-0 kjYnTS" style={{ width: 48, height: 48 }}>
                    {/* SVG Icon 4 */}
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#53389e" varient="scaled" name="svg" className="sc-42e4aaa8-0 jYKPph"><path d="M10.0591 8.33332V15.2448C10.0591 15.7083 10.6195 15.9405 10.9472 15.6127L14.393 12.1669C14.5958 11.9642 14.5962 11.6356 14.3941 11.4322L10.9483 7.9665C10.621 7.6373 10.0591 7.86909 10.0591 8.33332Z" fill="#5925DC"></path><path d="M19.3807 20.1048H4.29586C3.89617 20.1048 3.57275 19.7813 3.57275 19.3817V4.2961C3.57275 3.89642 3.89617 3.573 4.29586 3.573H19.3807C19.7804 3.573 20.1038 3.89642 20.1038 4.2961V19.3817C20.1038 19.7813 19.7804 20.1048 19.3807 20.1048ZM5.01896 18.6586H18.6576V5.0192H5.01896V18.6586Z" fill="#5925DC"></path></svg>
                  </div>
                  <div className="sc-92373a90-0 hUMDcf" style={{ padding: "0px 8px" }}>
                    <h5 className="sc-d80c85c8-0 jFiFRu">
                      Interactive Live Sessions with Experts
                    </h5>
                    <div className="sc-bda8e52b-1 ezKqmf"></div>
                    <p className="sc-d80c85c8-0 buJVkV">
                      All lessons are delivered live, so you can interact with mentors as well as your peers from around the world. At Novatr, online learning never feels dull!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Slider */}
            <div className="sc-68483de-0 bZobsC">
              <div className="sc-92373a90-0 sc-16245d71-2 hdoshE ldkDaU" style={{ overflow: "hidden" }}>
                <div ref={sliderRef} className="keen-slider" style={{ width: "100%" }}>
                  {slides.map((slide, idx) => (
                    <div
                      key={idx}
                      className={`keen-slider__slide sc-92373a90-0 sc-c506afef-0 hUMDcf eLLkAw relative`}
                      style={{
                        position: "relative",
                        minWidth: "497.337px",
                        maxMidth: "497.337px",
                        transform: "translate3d(0px, 0px, 0px)",
                        // Remove display: none/block, let keen-slider handle visibility
                      }}
                    >
                      <img
                        alt={slide.alt}
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        sizes="100vw"
                        src={typeof slide.src === "string" ? slide.src : undefined}
                        {...(typeof slide.src !== "string" ? { src: slide.src } : {})}
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          inset: 0,
                          objectFit: "cover",
                          color: "transparent",
                        }}
                      />
                    </div>
                  ))}
                </div>
                <div className="sc-7267286d-0 biwMBn" style={{ width: "100%", gap: 4, display: "flex", justifyContent: "center" }}>
                  {slides.map((_, idx) => (
                    <div
                      key={idx}
                      className={
                        "sc-c506afef-1 gap-[4px]" +
                        (currentSlide === idx ? " hBovez" : " gMGKWe")
                      }
                      onClick={() => {
                        // Use keen-slider's API to move to the slide, not manual display logic
                        if (instanceRef.current) {
                          instanceRef.current.moveToIdx(idx);
                        }
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
        </div>
        </div>
        {/* Background SVGs */}
        <div className="sc-92373a90-0 hEuTkA absolute" style={{ overflow: "hidden", width: "100%", height: "100%" }}>
          <div className="sc-92373a90-0 sc-16245d71-3 hUMDcf krjcYx relative">
            <img
              alt=""
              loading="lazy"
              decoding="async"
              data-nimg="fill"
              src="https://oneistox-assets.s3.ap-south-1.amazonaws.com/images-v2/home/union5.svg"
              style={{ position: "absolute", height: "100%", width: "100%", inset: 0, color: "transparent" }}
            />
          </div>
          <div className="sc-92373a90-0 sc-16245d71-4 hUMDcf byABwq relative">
            <img
              alt=""
              loading="lazy"
              decoding="async"
              data-nimg="fill"
              src="https://oneistox-assets.s3.ap-south-1.amazonaws.com/images-v2/home/union5.svg"
              style={{ position: "absolute", height: "100%", width: "100%", inset: 0, color: "transparent" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Training;
