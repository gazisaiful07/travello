import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <section className="py-16 px-4 lg:px-16">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold">Contact Travello</h1>
        <p className="text-gray-500 mt-3">Have questions? Contact our travel team.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <div className="card bg-base-100 shadow-lg p-6 text-center">
          <FontAwesomeIcon icon={faPhone} className="text-4xl text-primary mx-auto mb-4" />
          <h3 className="font-bold text-xl">Phone</h3>
          <p className="text-gray-500 mt-2">+880 1234 567 890</p>
        </div>

        <div className="card bg-base-100 shadow-lg p-6 text-center">
          <FontAwesomeIcon icon={faEnvelope} className="text-4xl text-primary mx-auto mb-4" />
          <h3 className="font-bold text-xl">Email</h3>
          <p className="text-gray-500 mt-2">hello@travello.com</p>
        </div>

        <div className="card bg-base-100 shadow-lg p-6 text-center">
          <FontAwesomeIcon icon={faLocationDot} className="text-4xl text-primary mx-auto mb-4" />
          <h3 className="font-bold text-xl">Office</h3>
          <p className="text-gray-500 mt-2">Dhaka, Bangladesh</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;