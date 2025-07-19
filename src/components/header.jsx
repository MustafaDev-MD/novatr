import { useState } from 'react';

function Header() {
  // Add useState for the menu
  const [showMegaMenu, setShowMegaMenu] = useState(false);

  return (
    <>
      <header >
        <div className='flex justify-center items-center custom-gradient'>
          {/* Header Section */}
          <button className="top-btn">
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
        </div>

        {/* Navbar Section */}
        <div>
          <div className="flex items-center justify-between w-full bg-white px-[5rem]">
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
                            top: 'calc(80px + 64px)', // 80px for the top banner, 64px for navbar (adjust as needed)
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
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="black" varient="line" name="svg" class="sc-42e4aaa8-0 hQrIQv"><path d="M6 9L12 15L18 9" stroke="  " stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                  </a>
                </li>
                <li>
                  <a href="/hire-from-us" className='flex items-center py-8'>Hire From Us</a></li>
                <li><a href="/webinars" className='flex items-center py-8'>Events</a></li>
                <li><a href="/impact-on-aec" className='flex items-center py-8'>Our Impact</a></li>
                <li><a href="/career-quiz/questions/personal-details" className='flex items-center py-8'>Career Counselling</a></li>
              </ul>
            </nav>
            </div>
            <div className='login-btn'>
              <a href="/login" className="bg-white hover:bg-rgb(249, 245, 255) text-[#53389e] transition-all duration-300 px-5 py-3 rounded transition flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#4a1fb8" varient="line" name="svg" class="sc-42e4aaa8-0 bnXQJL"><path d="M3 20C5.33579 17.5226 8.50702 16 12 16C15.493 16 18.6642 17.5226 21 20M16.5 7.5C16.5 9.98528 14.4853 12 12 12C9.51472 12 7.5 9.98528 7.5 7.5C7.5 5.01472 9.51472 3 12 3C14.4853 3 16.5 5.01472 16.5 7.5Z" stroke="rgb(102 98 183)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
              <span>Log In</span>
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
