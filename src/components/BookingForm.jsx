import { useState } from 'react';
import destinations from '../data/destinations';

const BookingForm = () => {
  const [booking, setBooking] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    date: '',
    travelers: 1,
    message: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setBooking((prevBooking) => ({
      ...prevBooking,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Thanks ${booking.name}! Your booking request has been received.`);
    setBooking({
      name: '',
      email: '',
      phone: '',
      destination: '',
      date: '',
      travelers: 1,
      message: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="card bg-base-100 shadow-xl p-6 max-w-3xl mx-auto">
      <div className="grid md:grid-cols-2 gap-4">
        <label className="form-control">
          <span className="label-text mb-1">Full Name</span>
          <input
            type="text"
            name="name"
            value={booking.name}
            onChange={handleChange}
            className="input input-bordered"
            required
          />
        </label>

        <label className="form-control">
          <span className="label-text mb-1">Email</span>
          <input
            type="email"
            name="email"
            value={booking.email}
            onChange={handleChange}
            className="input input-bordered"
            required
          />
        </label>

        <label className="form-control">
          <span className="label-text mb-1">Phone</span>
          <input
            type="tel"
            name="phone"
            value={booking.phone}
            onChange={handleChange}
            className="input input-bordered"
            required
          />
        </label>

        <label className="form-control">
          <span className="label-text mb-1">Destination</span>
          <select
            name="destination"
            value={booking.destination}
            onChange={handleChange}
            className="select select-bordered"
            required
          >
            <option value="">Choose Country</option>
            {destinations.map((item) => (
              <option key={item.id} value={item.country}>
                {item.country} - ${item.price}
              </option>
            ))}
          </select>
        </label>

        <label className="form-control">
          <span className="label-text mb-1">Travel Date</span>
          <input
            type="date"
            name="date"
            value={booking.date}
            onChange={handleChange}
            className="input input-bordered"
            required
          />
        </label>

        <label className="form-control">
          <span className="label-text mb-1">Travelers</span>
          <input
            type="number"
            name="travelers"
            min="1"
            value={booking.travelers}
            onChange={handleChange}
            className="input input-bordered"
            required
          />
        </label>
      </div>

      <label className="form-control mt-4">
        <span className="label-text mb-1">Message</span>
        <textarea
          name="message"
          value={booking.message}
          onChange={handleChange}
          className="textarea textarea-bordered h-28"
          placeholder="Tell us about your travel plan..."
        />
      </label>

      <button type="submit" className="btn btn-primary mt-6">
        Submit Booking
      </button>
    </form>
  );
};

export default BookingForm;