import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import Destinations from '../pages/Destinations';
import Booking from '../pages/Booking';
import Contact from '../pages/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'destinations', element: <Destinations /> },
      { path: 'booking', element: <Booking /> },
      { path: 'contact', element: <Contact /> }
    ]
  }
]);

export default router;