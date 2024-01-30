import { formateDate } from './../../utils/formateDate'

const DoctorAbout = ({ name, about, qualifications, experiences }) => {
    return (
        <div>
            <div>
                <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2 ">
                    About of
                    <span className="text-irisBlueColor font-bold text-[24px] leading-9 ">
                        Dr. Christan Gale
                    </span>
                </h3>
                <p className="text__para">
                    Dr. Christian Gale is a highly regarded and accomplished surgeon, known for his exceptional contributions to the field of medicine. With an extensive background in surgical care, he has earned a reputation for excellence and compassion in patient treatment.
                    Dr. Gale's journey in medicine began with a profound dedication to healing and improving lives. Over the years, he has honed his surgical skills, demonstrating unparalleled precision and expertise in the operating room. His commitment to delivering the best possible care to his patients has made him a trusted and valued member of the healthcare community.
                    Beyond his surgical accomplishments, Dr. Gale is celebrated for his genuine concern for the well-being of his patients. His empathetic and patient-centered approach ensures that every individual under his care receives not only the finest medical treatment but also the support and understanding they deserve.
                    As a surgeon at Civil Hospital in Las Vegas, Dr. Christian Gale plays a pivotal role in the institution's mission to provide top-tier healthcare services. His dedication to enhancing patient outcomes and his relentless pursuit of medical excellence make him an integral part of the medical community, improving the lives of countless individuals. Dr. Gale's impact extends far beyond the operating room, as he embodies the values of commitment, expertise, and compassion in healthcare.
                </p>
            </div>

            <div className="mt-12">
                <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
                    Education
                </h3>

                <ul className="pt-4 md:p-5">
                    <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]  ">
                        <div>
                            <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                                Undergraduate Studies
                            </span>
                            <p className="text-[16px] leading-6 font-medium text-textColor ">
                                Dr. Gale began his academic journey with a solid foundation in the sciences. He completed his undergraduate studies, excelling in coursework related to biology, chemistry, and other fundamental subjects.
                            </p>
                            <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                                Medical School
                            </span>
                            <p className="text-[16px] leading-6 font-medium text-textColor ">
                                After completing his undergraduate studies, Dr. Gale enrolled in a reputable medical school where he gained in-depth knowledge of the human body, medical principles, and patient care. During this time, he honed his passion for surgery and developed a strong understanding of surgical techniques and procedures.
                            </p>
                            <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                                Residency
                            </span>
                            <p className="text-[16px] leading-6 font-medium text-textColor ">
                                Dr. Gale then dedicated several years to a demanding surgical residency program. This intensive training allowed him to specialize in his chosen field and provided extensive hands-on experience in surgical procedures. He worked alongside experienced surgeons, perfecting his skills and mastering the art of surgery.
                            </p>
                            <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                                Fellowships and Continued Learning
                            </span>
                            <p className="text-[16px] leading-6 font-medium text-textColor ">
                                Dr. Gale's commitment to excellence led him to pursue specialized fellowships and continued education. These experiences expanded his expertise and kept him up to date with the latest advancements in the field.
                            </p>
                            <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                                Board Certification
                            </span>
                            <p className="text-[16px] leading-6 font-medium text-textColor ">
                                Dr. Gale achieved board certification, demonstrating his proficiency and adherence to the highest medical standards. This certification assures patients of his qualifications and commitment to their well-being.
                            </p>
                        </div>
                    </li>
                </ul>

            </div>

            <div className="mt-12">
                <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
                    Experience
                </h3>
                <ul className='grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5'>
                    <li className='p-4 rounded bg-[#fff9ea]'>
                        <span className='text-yellowColor text-[15px] leading-6 font-semibold'>
                            Current
                        </span>
                        <p className='text-[16px] leading-6 font-medium text-textColor'>
                            Sr. Surgeon
                        </p>
                        <p className='text-[14px] leading-6 font-medium text-textColor'>
                            Civil Hospital, Las Vegas
                        </p>
                    </li >

                    <li className='p-4 rounded bg-[#fff9ea]'>
                        <span className='text-yellowColor text-[15px] leading-6 font-semibold'>
                            {formateDate("05-03-2015")} - {formateDate("11-25-2018")}
                        </span>
                        <p className='text-[16px] leading-6 font-medium text-textColor'>
                            Sr. Surgeon
                        </p>
                        <p className='text-[14px] leading-6 font-medium text-textColor'>
                            Metropolitan Medical Center
                        </p>
                    </li >
                </ul>

            </div>

        </div>

    )
}

export default DoctorAbout