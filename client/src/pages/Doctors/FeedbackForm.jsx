import { useState } from "react";
import { AiFillStar } from "react-icons/ai";

const FeedbackForm = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [reviewText,setReviewText] = useState(0);

    const handleSubmitReview = async e=>{
        e.preventDefault();

        //API
    }

    return (
        <form action="">
            <div>
                <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4 mt-0">
                    How was your journey with us?*
                </h3>

                <div>
                    {[...Array(5).keys()].map((index) => {
                        const starValue = index + 1;

                        return (
                            <button
                                key={index}
                                type="button"
                                className={`${starValue <= (hover || rating) ? "text-yellowColor" : "text-gray-400"
                                    } bg-transparent border-none outline-none text-[22px] cursor-pointer`}
                                onClick={() => setRating(starValue)}
                                onMouseEnter={() => setHover(starValue)}
                                onMouseLeave={() => setHover(0)}
                                onDoubleClick={() => {
                                    setHover(0);
                                    setRating(0);
                                }}
                            >
                                <span>
                                    <AiFillStar />
                                </span>
                            </button>
                        );
                    })}
                </div>
            </div>

            <div className="mt-[30px]">
                <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4 mt-0">
                    Share your thoughts and help us enhance your experience!*
                </h3>

                <textarea 
                className="border border-solid border-[#0066ff34] focus:outline outline-primaryColor w-full px-4 py-3 rounded-md" 
                rows="5"
                placeholder="Write your message"
                onChange={(e)=>setReviewText(e.target.value)}
                >

                </textarea>
            </div>

            <button type="submit" onClick={handleSubmitReview} className="btn">
                Submit Feedback
            </button>
        </form>
    );
}

export default FeedbackForm;
