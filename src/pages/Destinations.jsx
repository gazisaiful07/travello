import destinations from '../data/destinations';
import DestinationCard from '../components/DestinationCard';

const Destinations = () => {
  return (
    <section className="py-16 px-4 lg:px-16">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold">Explore Destinations</h1>
        <p className="text-gray-500 mt-3">
          Book your next trip to beautiful countries around the world.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {destinations.map((destination) => (
          <DestinationCard key={destination.id} destination={destination} />
        ))}
      </div>
    </section>
  );
};

export default Destinations;