import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faClock, faDollarSign } from '@fortawesome/free-solid-svg-icons';

const DestinationCard = ({ destination }) => {
  const { country, city, price, days, image } = destination;

  return (
    <div className="card bg-base-100 shadow-xl overflow-hidden">
      <figure>
        <img
          src={`${image}?auto=format&fit=crop&w=900&q=80`}
          alt={country}
          className="h-56 w-full object-cover hover:scale-105 duration-300"
        />
      </figure>

      <div className="card-body">
        <h3 className="card-title text-2xl">{country}</h3>

        <p className="flex items-center gap-2">
          <FontAwesomeIcon icon={faLocationDot} className="text-primary" />
          {city}
        </p>

        <p className="flex items-center gap-2">
          <FontAwesomeIcon icon={faClock} className="text-primary" />
          {days}
        </p>

        <p className="flex items-center gap-2 font-semibold">
          <FontAwesomeIcon icon={faDollarSign} className="text-primary" />
          Starting from ${price}
        </p>

        <div className="card-actions justify-end mt-3">
          <Link to="/booking" className="btn btn-primary">
            Book Trip
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;