// Imports 
import heroImg01 from "../assets/images/hero-img01.png"
import heroImg02 from "../assets/images/hero-img02.png"
import heroImg03 from "../assets/images/hero-img03.png"
import icon01 from "../assets/images/icon01.png"
import icon02 from "../assets/images/icon02.png"
import icon03 from "../assets/images/icon03.png"
import { Link } from "react-router-dom"
import { BsArrowRight } from "react-icons/bs"
import About from "../components/About/About"
import ServiceList from "../components/Services/ServiceList"
import featureImg from '../assets/images/feature-img.png'
import videoIcon from "../assets/images/video-icon.png"
import avatarIcon from "../assets/images/avatar-icon.png"
import DoctorList from "../components/Doctors/DoctorList"
import faqImg from "../assets/images/faq-img.png"
import FaqList from "../components/Faqs/FaqList"
import Testimonial from "../components/Testimonial/Testimonial"


const Home = () => {
  var today = new Date()
  var date = today.toLocaleString("en-US", { month: "long" }) + ', ' + today.getDate()
  return (
    <>
      {/* ==========Hero Section ================= */}
      <section className="hero__section pt-[60px] 2xl:h-[800px]  ">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">

            {/* =======Hero Content ========== */}

            <div>
              <div className="lg:w-[570px] ">
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px] ">
                  We assist individuals in leading a longer and healthier life.</h1>
                <p className="text__para ">
                  Our mission is to help you lead a longer, healthier life. We believe in giving everyone the chance to live their best life. With our dedicated healthcare team and innovative solutions, we offer complete support, whether you aim for better health, chronic condition management, or enhanced well-being. Join us in embracing a future filled with vitality, wellness, and longevity, as at Medicare, your well-being is our utmost priority.
                </p>

                <button className="btn">Request an Appointment</button>
              </div>

              {/* ====== hero counter ========= */}
              <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px] ">
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">20+</h2>
                  <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para ">Years of Experience</p>
                </div>

                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">10+</h2>
                  <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para ">Clinic Locations</p>
                </div>

                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">100%</h2>
                  <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para ">Patient Satisfaction</p>
                </div>
              </div>


            </div>
            {/* ====== Hero Content ========= */}

            <div className="flex gap-[30px] justify-end">
              <div>
                <img className="w-full" src={heroImg01} alt="" />
              </div>
              <div className="mt-[30px]">
                <img src={heroImg02} alt="" className="w-full mb-[30px]" />
                <img src={heroImg03} alt="" className="w-full" />
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* ==========Hero Section End================= */}

      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">
              Delivering top-tier healthcare services.
            </h2>
            <p className="text__para text-center">
              Top-tier healthcare accessible to all. Our healthcare system provides unparalleled, specialized medical services.
            </p>
          </div>

          <div className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">

            <div className="py-[30px] px-5 ">
              <div className="flex items-center justify-center">
                <img src={icon01} alt="" />
              </div>
              <div className="mt-[30px] ">
                <h2 className="text-[26px] text-headingColor leading-9 font-[700] text-center">
                  Find a Doctor
                </h2>
                <p className="text-textColor text-[16px] leading-7 font-[400] mt-4 text-center">
                  Discover your ideal healthcare partner with our <b>Find a Doctor</b>  feature. Easily locate experienced medical professionals who prioritize your well-being and cater to your unique needs.
                </p>

                <Link to='/doctors' className="w-[44px] h-[44px] rounded-full border border-solid border-[#181AE] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>

            <div className="py-[30px] px-5 ">
              <div className="flex items-center justify-center">
                <img src={icon02} alt="" />
              </div>
              <div className="mt-[30px] ">
                <h2 className="text-[26px] text-headingColor leading-9 font-[700] text-center">
                  Find a Location
                </h2>
                <p className="text-textColor text-[16px] leading-7 font-[400] mt-4 text-center">
                  Explore our locations effortlessly with our <strong>Find a Location tool</strong>. Discover conveniently situated facilities designed to provide you with accessible, quality healthcare.
                </p>

                <Link to='/doctors' className="w-[44px] h-[44px] rounded-full border border-solid border-[#181AE] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>

            <div className="py-[30px] px-5 ">
              <div className="flex items-center justify-center">
                <img src={icon03} alt="" />
              </div>
              <div className="mt-[30px] ">
                <h2 className="text-[26px] text-headingColor leading-9 font-[700] text-center">
                  Book Appointment
                </h2>
                <p className="text-textColor text-[16px] leading-7 font-[400] mt-4 text-center">
                  Booking an appointment has never been easier. Use our convenient <strong>Book an Appointment</strong> feature to schedule your visit and take the first step toward better health today.
                </p>

                <Link to='/doctors' className="w-[44px] h-[44px] rounded-full border border-solid border-[#181AE] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ===========About Start=============== */}
      <About />
      {/* ===============About End =============== */}

      {/* =========Service Section Start==============*/}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">
              Our Medical Services
            </h2>
            <p className="text__para text-center">
              Exceptional healthcare accessible to all. Our health system delivers unparalleled expertise in medical care.
            </p>
          </div>

          <ServiceList />
        </div>
      </section>
      {/* =========Service Section  End==============*/}

      {/* ============= Feature Section =========== */}
      <section>
        <div className="container">
          <div className="flex items-center justify-between flex-col lg:flex-row">
            {/* ============== feature content ========== */}
            <div className="xl:w-[670px]">
              <h2 className="heading">
                Get Virtual Treatment <br />Anytime.
              </h2>
              <ul className="pl-4">
                <li className="text__para">
                  1. Easily book your appointment directly with us.
                </li>
                <li className="text__para">
                  2. Find your preferred physician here, and reach out to their office effortlessly.
                </li>
                <li className="text__para">
                  3. Discover our list of physicians welcoming new patients, and utilize our user-friendly online scheduling tool to choose a convenient appointment slot.
                </li>
              </ul>
              <Link to='/'>
                <button className="btn">Learn More</button>
              </Link>
            </div>
            {/* =========Feature Image =========== */}
            <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
              <img src={featureImg} className="w-3/4" alt="" />
              <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[6px] lg:gap-3">
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]">
                      {date}
                    </p>
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor font-[400]">
                      10:30AM
                    </p>
                  </div>
                  <span className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center jusitfy-center bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]">
                    <img src={videoIcon} alt="" />
                  </span>
                </div>

                <div className="rounded-full w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4">
                  Consultation
                </div>

                <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
                  <img src={avatarIcon} alt="" />
                  <h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor ">Jack Napier</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ============= Feature Section  End=========== */}

      {/* ==============Our Great Docs ============= */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">
              Our Great Doctors
            </h2>
            <p className="text__para text-center">
              Our exceptional doctors are the heart of our healthcare family. With years of expertise, unwavering dedication, and genuine compassion, they lead the way in providing top-notch medical care. Trust in their knowledge and commitment as they guide you on your path to better health.
            </p>
          </div>

          <DoctorList />
        </div>
      </section>
      {/* ==============Our Great Docs End============= */}

      {/* ============= FAQs Section =========== */}
      <section>
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-0 ">
            <div className="w-1/2 hidden md:block">
              <img src={faqImg} alt="" />
            </div>

            <div className="w-full md:w-1/2">
              <h2 className="heading">
                Most Questions by our beloved patients.
              </h2>

              <FaqList />
            </div>

          </div>
        </div>
      </section>

      {/* ============= FAQs Section End=========== */}

      {/* =========== Testimonials ========== */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">
              What Our Patient Says
            </h2>
            <p className="text__para text-center">
              At Medicare, we take great pride in the care and support we provide to our patients. But do not just take our word for it—listen to what our patients have to say. We value their feedback, stories, and experiences, and we are delighted to share their testimonials with you. Read on to discover how our dedicated team has made a difference in the lives of those we have had the privilege to serve.
            </p>
          </div>
        </div>

        <Testimonial />
      </section>
      {/* =========== Testimonials End========== */}

    </>
  )
}

export default Home