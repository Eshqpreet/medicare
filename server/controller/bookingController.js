import User from "../models/UserSchema.js"
import Doctor from "../models/DoctorSchema.js"
import Booking from "../models/BookingSchema.js"
import Stripe from "stripe"

// Controller function to get checkout session for booking
export const getCheckoutSession = async (req, res) => {
    try {
        // Fetch currently booked doctor and user
        const doctor = await Doctor.findById(req.params.doctorId)
        const user = await User.findById(req.userId)

        // Initialize Stripe with secret key
        const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

        // Create Stripe checkout session
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'], // Payment method types allowed
            mode: 'payment', // Mode of payment
            success_url: `${process.env.CLIENT_SITE_URL}/checkout-session`, // URL to redirect after successful payment
            cancel_url: `${req.protocol}://${req.get('host')}/doctor/${doctor.id}`, // URL to redirect if payment is cancelled
            customer_email: user.email, // Email of the customer
            client_reference_id: req.params.doctorId, // Reference ID for the doctor
            line_items: [
                {
                    price_data: {
                        currency: 'inr', // Currency for the payment
                        unit_amount: doctor.ticketPrice * 100, // Ticket price in smallest currency unit (in this case, paise)
                        product_data: {
                            name: doctor.name, // Name of the doctor
                            description: doctor.bio, // Bio/description of the doctor
                            images: [doctor.photo], // Array of images of the doctor
                        }
                    },
                    quantity: 1 // Quantity of the item (always 1 for booking)
                }
            ]
        })

        // Create new Booking object
        const booking = new Booking({
            doctor: doctor._id, // ID of the booked doctor
            user: user._id, // ID of the booking user
            ticketPrice: doctor.ticketPrice, // Ticket price of the doctor
            session: session.id // ID of the Stripe checkout session
        })

        // Save the booking in the database
        await booking.save()

        // Send success response with session details
        res.status(200).json({ success: true, message: "Successfully Paid", session })
    } catch (err) {
        console.log(err)
        // Send error response if any error occurs
        res.status(500).json({ success: false, message: "Error creating checkout session" })
    }
}
