import { useState } from 'react';

function Header() {
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  // Mobile menu course links
  const mobileCourses = [
    {
      name: "BIM for Architects",
      href: "/courses/building-information-modelling",
    },
    {
      name: "Master Computational Design",
      href: "/courses/computational-design",
    },
    {
      name: "BIM for Civil engineers",
      href: "/courses/bim-for-civil-engineers",
    },
    {
      name: "Advanced Interior Design with AI",
      href: "/courses/advanced-interior-design-course",
    },
    {
      name: "BIM Professional Course for MEP Engineers",
      href: "/courses/bim-for-mep-engineers",
    },
  ];

  // Mobile menu other links
  const mobileLinks = [
    { name: "Hire From Us", href: "/hire-from-us" },
    { name: "Become a Mentor", href: "/apply-as-mentor" },
    { name: "About Us", href: "/about" },
    { name: "Blogs", href: "/learning-hub" },
    { name: "Careers", href: "/career" },
    { name: "Events", href: "/webinars" },
    { name: "Our Impact", href: "/impact-on-aec" },
    { name: "Career Counselling", href: "/career-quiz/questions/personal-details" },
  ];

  return (
    <>
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          background: "white",
          width: "100%",
        }}
      >
        {/* <div className='flex justify-center items-center custom-gradient'>
          <button className="top-btn w-full">
            <div className='flex justify-between items-center py-3 font-normal gap-2'>
              <p className='text-white'>⚡ Hurry! Last Chance for Scholarship - Enroll before 20th Jul ⚡️</p>
              <div className='flex items-center gap-2'>
                <span className='text-[#344054] apply-now'>Apply Now</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#344054" className="sc-42e4aaa8-0 jtYzGl">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="#344054" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </div>
            </div>
          </button>
        </div> */}

        {/* Navbar Section */}
        <div>
          {/* Desktop Navbar */}
          <div className="hidden md:flex items-center justify-between w-full bg-white px-[5rem] shadow-sm">
            <div className='flex items-center gap-4'>
              <a href="/">
                <img
                  alt="Novatr"
                  width="127"
                  height="32"
                  src="https://oneistox-assets.s3.ap-south-1.amazonaws.com/images-v2/logo/logo_new.svg"
                  style={{ color: 'transparent' }}
                />
              </a>
              <nav>
                <ul className="flex gap-8 text-white font-medium">
                  <li className="relative">
                    <button
                      type="button"
                      className="flex items-center py-8 focus:outline-none"
                      onClick={() => setShowMegaMenu((prev) => !prev)}
                    >
                      <span>Courses</span>
                      <span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="black" varient="line" name="svg" className="sc-42e4aaa8-0 hQrIQv"><path d="M6 9L12 15L18 9" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                      </span>
                    </button>
                    {showMegaMenu && (
                      <>
                        {/* Overlay */}
                        <div
                          className="fixed inset-0 bg-transparent bg-opacity-100 z-40"
                          style={{
                            animation: showMegaMenu ? 'fadeInMegaMenu 0.5s ease' : '',
                          }}
                          onClick={() => setShowMegaMenu(false)}
                        ></div>
                        {/* Mega Menu slides in from below navbar */}
                        <div
                          className="fixed left-0 right-0 z-50"
                          style={{
                            top: 'calc(80px + 64px)',
                            animation: showMegaMenu ? 'slideDownMegaMenu 0.5s cubic-bezier(0.4,0,0.2,1)' : '',
                          }}
                        >
                          <div
                            className="bg-white w-full mx-auto rounded-lg shadow-2xl p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 fade-in-mega-menu px-[6rem]"
                            style={{
                              animation: showMegaMenu ? 'fadeInCards 0.7s cubic-bezier(0.4,0,0.2,1)' : '',
                            }}
                            onClick={e => e.stopPropagation()}
                          >
                            {[
                              {
                                title: "BIM Professional Course for Architects V2.0",
                                duration: "7 months",
                                mode: "Online",
                                next: "26th July, 2025",
                                link: "#",
                              },
                              {
                                title: "Master Computational Design Course",
                                duration: "6 months",
                                mode: "Online",
                                next: "10th Aug, 2025",
                                link: "#",
                              },
                              {
                                title: "BIM Professional Course For Civil Engineers",
                                duration: "5 months",
                                mode: "Online",
                                next: "5th Sep, 2025",
                                link: "#",
                              },
                              {
                                title: "Advanced Interior Design with AI",
                                duration: "4 months",
                                mode: "Online",
                                next: "20th Sep, 2025",
                                link: "#",
                              },
                              {
                                title: "BIM Professional Course for MEP Engineers",
                                duration: "8 months",
                                mode: "Online",
                                next: "1st Oct, 2025",
                                link: "#",
                              },
                            ].map((course, idx) => (
                              <div
                                key={idx}
                                className="flex flex-col rounded-xl p-6 hover:scale-105 transition-all duration-300 opacity-0 animate-fadein course-card"
                                style={{ animationDelay: `${0.1 * idx + 0.2}s` }}
                              >
                                <div className='flex items-center gap-2'>
                                  <span className="course-duration">
                                    {course.duration} - {course.mode}
                                  </span>
                                  <span className="course-duration">
                                    Live {course.mode}
                                  </span>
                                </div>
                                <h3 className="course-desc">{course.title}</h3>
                                <div className="flex items-center gap-2 mb-1">
                                  <span className="course-date">Next Cohort</span>
                                  <span className="course-date course-date-next">{course.next}</span>
                                </div>
                                <a
                                  href={course.link}
                                  className="course-btn"
                                >
                                  Know More
                                </a>
                              </div>
                            ))}
                          </div>
                          <style>
                            {`
                              @keyframes fadeInMegaMenu {
                                from { opacity: 0; }
                                to { opacity: 1; }
                              }
                              @keyframes fadeInCards {
                                from { opacity: 0; transform: translateY(40px);}
                                to { opacity: 1; transform: translateY(0);}
                              }
                              @keyframes slideDownMegaMenu {
                                from { opacity: 0; transform: translateY(-40px);}
                                to { opacity: 1; transform: translateY(0);}
                              }
                              .fade-in-mega-menu {
                                animation: fadeInCards 0.7s cubic-bezier(0.4,0,0.2,1);
                              }
                              .animate-fadein {
                                animation: fadeInCards 0.7s cubic-bezier(0.4,0,0.2,1) both;
                              }
                            `}
                          </style>
                        </div>
                      </>
                    )}
                  </li>
                  <li>
                    <a href="/resources" className='flex items-center py-8'>
                      <span>Resources</span>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="black" varient="line" name="svg" className="sc-42e4aaa8-0 hQrIQv"><path d="M6 9L12 15L18 9" stroke="  " strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    </a>
                  </li>
                  <li>
                    <a href="/hire-from-us" className='flex items-center py-8'>Hire From Us</a>
                  </li>
                  <li><a href="/webinars" className='flex items-center py-8'>Events</a></li>
                  <li><a href="/impact-on-aec" className='flex items-center py-8'>Our Impact</a></li>
                  <li><a href="/career-quiz/questions/personal-details" className='flex items-center py-8'>Career Counselling</a></li>
                </ul>
              </nav>
            </div>
            <div className='login-btn'>
              <a href="/login" className="bg-white hover:bg-rgb(249, 245, 255) text-[#53389e] transition-all duration-300 px-5 py-3 rounded transition flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#4a1fb8" varient="line" name="svg" className="sc-42e4aaa8-0 bnXQJL"><path d="M3 20C5.33579 17.5226 8.50702 16 12 16C15.493 16 18.6642 17.5226 21 20M16.5 7.5C16.5 9.98528 14.4853 12 12 12C9.51472 12 7.5 9.98528 7.5 7.5C7.5 5.01472 9.51472 3 12 3C14.4853 3 16.5 5.01472 16.5 7.5Z" stroke="rgb(102 98 183)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                <span>Log In</span>
              </a>
            </div>
          </div>

          {/* Mobile Navbar */}
          <div className="flex md:hidden items-center justify-between w-full bg-white px-4 py-2 relative z-50">
            <a href="/">
              <img
                alt="Novatr"
                width="110"
                height="28"
                src="https://oneistox-assets.s3.ap-south-1.amazonaws.com/images-v2/logo/logo_new.svg"
                style={{ color: 'transparent' }}
              />
            </a>
            <button
              className="p-2 rounded focus:outline-none"
              aria-label="Open menu"
              onClick={() => setShowMobileMenu((prev) => !prev)}
            >
              {/* Hamburger icon */}
              <svg width="28" height="28" fill="none" stroke="#344054" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M4 7h16" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4 12h16" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4 17h10" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Drawer (slides from top, does not hide logo/toggle) */}
          <div
            className={`fixed left-0 right-0 top-0 z-40 md:hidden pointer-events-none`}
            style={{
              height: showMobileMenu ? '100vh' : '0',
              transition: 'height 0.3s cubic-bezier(0.4,0,0.2,1)',
            }}
          >
            <div
              className={`absolute left-0 right-0 bg-white shadow-2xl overflow-y-auto pointer-events-auto`}
              style={{
                top: showMobileMenu ? '56px' : '0',
                maxHeight: showMobileMenu ? 'calc(100vh - 56px)' : '0',
                transition: 'max-height 0.3s cubic-bezier(0.4,0,0.2,1)',
                zIndex: 50,
                transform: showMobileMenu ? 'translateY(0)' : 'translateY(-100%)',
                opacity: showMobileMenu ? 1 : 0,
              }}
            >
              <div className="flex flex-col p-5 pt-4">
                {/* Login Button */}
                <div className="mt-2 mb-6">
                  <a id="ta_login_btn" className="link__" href="/login" data-cy="link_homepage_log-in">
                    <button color="tertiary" data-cy="button_homepage_log-in" className="sc-2661a8a3-0 gluCOT sc-f1fd8e2e-0 gYxSww button__log_in flex items-center gap-2 w-full py-2 px-3 rounded text-[#4a1fb8]">
                      <span className="icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#4a1fb8" varient="line" name="svg" className="sc-42e4aaa8-0 bnXQJL"><path d="M3 20C5.33579 17.5226 8.50702 16 12 16C15.493 16 18.6642 17.5226 21 20M16.5 7.5C16.5 9.98528 14.4853 12 12 12C9.51472 12 7.5 9.98528 7.5 7.5C7.5 5.01472 9.51472 3 12 3C14.4853 3 16.5 5.01472 16.5 7.5Z" stroke="#4a1fb8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                      </span>
                      Log In
                    </button>
                  </a>
                </div>
                {/* Courses */}
                <div className="mb-6">
                  <p className="text-[#101828] font-semibold mb-2">COURSES</p>
                  <div className="flex flex-col gap-2">
                    {mobileCourses.map((course, idx) => (
                      <a key={idx} href={course.href} className="py-2 px-2 rounded hover:bg-gray-100 text-[#1d2939] font-medium">
                        {course.name}
                      </a>
                    ))}
                  </div>
                </div>
                {/* Other Links */}
                <div className="mb-6">
                  <div className="flex flex-col gap-2">
                    {mobileLinks.map((link, idx) => (
                      <a key={idx} href={link.href} className="py-2 px-2 rounded hover:bg-gray-100 text-[#101828]">
                        {link.name}
                      </a>
                    ))}
                  </div>
                </div>
                {/* Socials and CTA */}
                <div className="mt-auto">
                  <div className="flex gap-3 mb-3">
                    {/* Social icons */}
                    <a href="https://www.instagram.com/novatrlearning/" target="_blank" rel="noopener noreferrer" className="sc-92373a90-0 iUTMbS">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><g clipPath="url(#clip0_3318_17504)"><path d="M10 1.80078C12.6719 1.80078 12.9883 1.8125 14.0391 1.85937C15.0156 1.90234 15.543 2.06641 15.8945 2.20313C16.3594 2.38281 16.6953 2.60156 17.043 2.94922C17.3945 3.30078 17.6094 3.63281 17.7891 4.09766C17.9258 4.44922 18.0898 4.98047 18.1328 5.95312C18.1797 7.00781 18.1914 7.32422 18.1914 9.99219C18.1914 12.6641 18.1797 12.9805 18.1328 14.0313C18.0898 15.0078 17.9258 15.5352 17.7891 15.8867C17.6094 16.3516 17.3906 16.6875 17.043 17.0352C16.6914 17.3867 16.3594 17.6016 15.8945 17.7813C15.543 17.918 15.0117 18.082 14.0391 18.125C12.9844 18.1719 12.668 18.1836 10 18.1836C7.32813 18.1836 7.01172 18.1719 5.96094 18.125C4.98438 18.082 4.45703 17.918 4.10547 17.7813C3.64063 17.6016 3.30469 17.3828 2.95703 17.0352C2.60547 16.6836 2.39063 16.3516 2.21094 15.8867C2.07422 15.5352 1.91016 15.0039 1.86719 14.0313C1.82031 12.9766 1.80859 12.6602 1.80859 9.99219C1.80859 7.32031 1.82031 7.00391 1.86719 5.95312C1.91016 4.97656 2.07422 4.44922 2.21094 4.09766C2.39063 3.63281 2.60938 3.29688 2.95703 2.94922C3.30859 2.59766 3.64063 2.38281 4.10547 2.20313C4.45703 2.06641 4.98828 1.90234 5.96094 1.85937C7.01172 1.8125 7.32813 1.80078 10 1.80078ZM10 0C7.28516 0 6.94531 0.0117187 5.87891 0.0585938C4.81641 0.105469 4.08594 0.277344 3.45313 0.523438C2.79297 0.78125 2.23438 1.12109 1.67969 1.67969C1.12109 2.23438 0.78125 2.79297 0.523438 3.44922C0.277344 4.08594 0.105469 4.8125 0.0585938 5.875C0.0117188 6.94531 0 7.28516 0 10C0 12.7148 0.0117188 13.0547 0.0585938 14.1211C0.105469 15.1836 0.277344 15.9141 0.523438 16.5469C0.78125 17.207 1.12109 17.7656 1.67969 18.3203C2.23438 18.875 2.79297 19.2188 3.44922 19.4727C4.08594 19.7188 4.8125 19.8906 5.875 19.9375C6.94141 19.9844 7.28125 19.9961 9.99609 19.9961C12.7109 19.9961 13.0508 19.9844 14.1172 19.9375C15.1797 19.8906 15.9102 19.7188 16.543 19.4727C17.1992 19.2188 17.7578 18.875 18.3125 18.3203C18.8672 17.7656 19.2109 17.207 19.4648 16.5508C19.7109 15.9141 19.8828 15.1875 19.9297 14.125C19.9766 13.0586 19.9883 12.7188 19.9883 10.0039C19.9883 7.28906 19.9766 6.94922 19.9297 5.88281C19.8828 4.82031 19.7109 4.08984 19.4648 3.45703C19.2188 2.79297 18.8789 2.23438 18.3203 1.67969C17.7656 1.125 17.207 0.78125 16.5508 0.527344C15.9141 0.28125 15.1875 0.109375 14.125 0.0625C13.0547 0.0117188 12.7148 0 10 0Z" fill="#475467"></path><path d="M10 4.86328C7.16406 4.86328 4.86328 7.16406 4.86328 10C4.86328 12.8359 7.16406 15.1367 10 15.1367C12.8359 15.1367 15.1367 12.8359 15.1367 10C15.1367 7.16406 12.8359 4.86328 10 4.86328ZM10 13.332C8.16016 13.332 6.66797 11.8398 6.66797 10C6.66797 8.16016 8.16016 6.66797 10 6.66797C11.8398 6.66797 13.332 8.16016 13.332 10C13.332 11.8398 11.8398 13.332 10 13.332Z" fill="#475467"></path><path d="M16.5391 4.66016C16.5391 5.32422 16 5.85938 15.3398 5.85938C14.6758 5.85938 14.1406 5.32031 14.1406 4.66016C14.1406 3.99609 14.6797 3.46094 15.3398 3.46094C16 3.46094 16.5391 4 16.5391 4.66016Z" fill="#475467"></path></g><defs><clipPath id="clip0_3318_17504"><rect width="20" height="20" fill="white"></rect></clipPath></defs></svg>
                    </a>
                    <a href="https://www.facebook.com/novatrlearning/" target="_blank" rel="noopener noreferrer" className="sc-92373a90-0 iUTMbS">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><g clipPath="url(#clip0_3318_17509)"><path d="M20 10C20 4.47715 15.5229 0 10 0C4.47715 0 0 4.47715 0 10C0 14.9912 3.65684 19.1283 8.4375 19.8785V12.8906H5.89844V10H8.4375V7.79688C8.4375 5.29063 9.93047 3.90625 12.2146 3.90625C13.3084 3.90625 14.4531 4.10156 14.4531 4.10156V6.5625H13.1922C11.95 6.5625 11.5625 7.3334 11.5625 8.125V10H14.3359L13.8926 12.8906H11.5625V19.8785C16.3432 19.1283 20 14.9912 20 10Z" fill="#475467"></path></g><defs><clipPath id="clip0_3318_17509"><rect width="20" height="20" fill="white"></rect></clipPath></defs></svg>
                    </a>
                    <a href="https://www.linkedin.com/company/novatrlearning/" target="_blank" rel="noopener noreferrer" className="sc-92373a90-0 iUTMbS">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><g clipPath="url(#clip0_3318_17511)"><path d="M18.5195 0H1.47656C0.660156 0 0 0.644531 0 1.44141V18.5547C0 19.3516 0.660156 20 1.47656 20H18.5195C19.3359 20 20 19.3516 20 18.5586V1.44141C20 0.644531 19.3359 0 18.5195 0ZM5.93359 17.043H2.96484V7.49609H5.93359V17.043ZM4.44922 6.19531C3.49609 6.19531 2.72656 5.42578 2.72656 4.47656C2.72656 3.52734 3.49609 2.75781 4.44922 2.75781C5.39844 2.75781 6.16797 3.52734 6.16797 4.47656C6.16797 5.42188 5.39844 6.19531 4.44922 6.19531ZM17.043 17.043H14.0781V12.4023C14.0781 11.2969 14.0586 9.87109 12.5352 9.87109C10.9922 9.87109 10.7578 11.0781 10.7578 12.3242V17.043H7.79688V7.49609H10.6406V8.80078H10.6797C11.0742 8.05078 12.043 7.25781 13.4844 7.25781C16.4883 7.25781 17.043 9.23438 17.043 11.8047V17.043Z" fill="#475467"></path></g><defs><clipPath id="clip0_3318_17511"><rect width="20" height="20" fill="white"></rect></clipPath></defs></svg>
                    </a>
                    <a href="https://www.youtube.com/@novatrlearning" target="_blank" rel="noopener noreferrer" className="sc-92373a90-0 hUMDcf">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M19.8008 6C19.8008 6 19.6055 4.62109 19.0039 4.01563C18.2422 3.21875 17.3906 3.21484 17 3.16797C14.2031 2.96484 10.0039 2.96484 10.0039 2.96484H9.99609C9.99609 2.96484 5.79688 2.96484 3 3.16797C2.60938 3.21484 1.75781 3.21875 0.996094 4.01563C0.394531 4.62109 0.203125 6 0.203125 6C0.203125 6 0 7.62109 0 9.23828V10.7539C0 12.3711 0.199219 13.9922 0.199219 13.9922C0.199219 13.9922 0.394531 15.3711 0.992187 15.9766C1.75391 16.7734 2.75391 16.7461 3.19922 16.832C4.80078 16.9844 10 17.0313 10 17.0313C10 17.0313 14.2031 17.0234 17 16.8242C17.3906 16.7773 18.2422 16.7734 19.0039 15.9766C19.6055 15.3711 19.8008 13.9922 19.8008 13.9922C19.8008 13.9922 20 12.375 20 10.7539V9.23828C20 7.62109 19.8008 6 19.8008 6ZM7.93359 12.5938V6.97266L13.3359 9.79297L7.93359 12.5938Z" fill="#475467"></path></svg>
                    </a>
                  </div>
                  <div className="text-xs text-[#475467]">
                    Join thousands of people who organise <br />work and life with Novatr.
                  </div>
                </div>
              </div>
            </div>
            {/* Overlay */}
            <div
              className="fixed inset-0 bg-black bg-opacity-40 pointer-events-auto"
              style={{
                zIndex: 30,
                opacity: showMobileMenu ? 1 : 0,
                transition: 'opacity 0.3s cubic-bezier(0.4,0,0.2,1)',
                pointerEvents: showMobileMenu ? 'auto' : 'none',
              }}
              onClick={() => setShowMobileMenu(false)}
            ></div>
          </div>
        </div>
        <style>
          {`
            @media (min-width: 768px) {
              .mobile-menu-slide {
                display: none !important;
              }
            }
            /* Make sure sticky nav is above overlays */
            .sticky {
              position: sticky;
              top: 0;
              z-index: 100;
              background: white;
            }
          `}
        </style>
      </header>
    </>
  );
}

export default Header;
