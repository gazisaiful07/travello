import { Link } from 'react-router-dom';
import destinations from '../data/destinations';
import DestinationCard from '../components/DestinationCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faHotel, faHeadset } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  return (
    <div>
      <section className="hero min-h-[80vh] bg-[url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80')]">
        <div className="hero-overlay bg-black bg-opacity-50"></div>

        <div className="hero-content text-center text-white">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-5">
              Explore The World With Travello
            </h1>
            <p className="text-lg mb-8">
              Best travel packages, easy booking, and unforgettable experiences around the world.
            </p>
            <Link to="/booking" className="btn btn-primary btn-lg">
              Start Booking
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 lg:px-16">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold">Why Choose Travello?</h2>
          <p className="mt-3 text-gray-500">We make your journey simple, safe, and memorable.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="card bg-base-100 shadow-lg p-6 text-center">
            <FontAwesomeIcon icon={faGlobe} className="text-5xl text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold">Worldwide Tours</h3>
            <p className="text-gray-500 mt-2">Choose from many beautiful countries and cities.</p>
          </div>

          <div className="card bg-base-100 shadow-lg p-6 text-center">
            <FontAwesomeIcon icon={faHotel} className="text-5xl text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold">Hotel Support</h3>
            <p className="text-gray-500 mt-2">Comfortable hotel and travel support included.</p>
          </div>

          <div className="card bg-base-100 shadow-lg p-6 text-center">
            <FontAwesomeIcon icon={faHeadset} className="text-5xl text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold">24/7 Support</h3>
            <p className="text-gray-500 mt-2">Our team is ready to help you anytime.</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 lg:px-16 bg-base-200">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold">Popular Destinations</h2>
          <p className="mt-3 text-gray-500">Pick your dream destination and book today.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.slice(0, 3).map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/destinations" className="btn btn-outline btn-primary">
            View All Destinations
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;