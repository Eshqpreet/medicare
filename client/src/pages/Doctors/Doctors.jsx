import DoctorCard from "./../../components/Doctors/DoctorCard"
import Testimonial from "../../components/Testimonial/Testimonial"
import { BASE_URL } from './../../../config'
import useFetchData from './../../hooks/useFetchData'
import Loader from './../../components/Loader/Loading'
import Error from './../../components/Error/Error'
import { useEffect, useState } from "react"

const Doctors = () => {

  const [query, setQuery] = useState('')
  const [debounceQuery, setDebounceQuery] = useState('')

  const { data: doctors, loading, error } = useFetchData(`${BASE_URL}/doctors?query=${debounceQuery}`)

  const hanldeSerach = () => {
    setQuery(query.trim())

    console.log('handle search');
  }


  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceQuery(query)
    }, 700)

    return () => clearTimeout(timeout)
  }, [query])


  return (
    <>
      <section className="bg-[#fff9ea]">
        <div className="container text-center">
          <h2 className="heading">
            Find a Doctor
          </h2>
          <div className="max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between">
            <input
              type="search"
              className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer"
              placeholder="Search Doctor by name or specification"
              value={query}
              onChange={e => setQuery(e.target.value)}
            />
            <button className="btn rounded-[0px] mt-0 rounded-r-md" onClick={hanldeSerach}>
              Search
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className="container">

          {loading && <Loader />}
          {error && <Error />}

          {!loading && !error &&
            (<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:grid-cols-4 '>
              {doctors.map((doctor) => (
                <DoctorCard key={doctor.id} doctor={doctor} />
              ))}
            </div>)
          }

        </div>
      </section>

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
    </>
  )
}

export default Doctors