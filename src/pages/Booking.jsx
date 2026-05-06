import BookingForm from '../components/BookingForm';

const Booking = () => {
  return (
    <section className="py-16 px-4 lg:px-16 bg-base-200">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold">Book Your Trip</h1>
        <p className="text-gray-500 mt-3">
          Fill up the form and our travel expert will contact you soon.
        </p>
      </div>

      <BookingForm />
    </section>
  );
};

export default Booking;