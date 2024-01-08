import aboutImg from "../../assets/images/about.png"
import aboutCardImg from "../../assets/images/about-card.png"
import {Link} from 'react-router-dom'

const About = () => {
    return (
        <section>
            <div className="container">
                <div className="flex items-center justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row  ">
                    {/* ======About Img =========== */}
                    <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1" >
                        <img src={aboutImg} alt="" />
                        <div className="absolute bottom-4 z-20 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%] ">
                            <img src={aboutCardImg} alt="" />
                        </div>
                    </div>
                    {/* ======= About content ========= */}

                    <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
                        <h2 className="heading">Proud to be the nations best</h2>
                        <p className="text__para">
                            For two decades running, U.S. News & World Report has consistently distinguished us as a premier public hospital in the nation, proudly holding the top position in Texas.
                        </p>

                        <p className="text__para mt-[30px]">
                            We are dedicated to excellence every day, focusing on the care of our patients. Our commitment is not just about celebrating past achievements but, more importantly, looking forward to what we can achieve tomorrow. We consistently strive to deliver the highest standard of care.
                        </p>

                        <Link to='/'>
                        <button className="btn">
                            Learn More
                        </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About