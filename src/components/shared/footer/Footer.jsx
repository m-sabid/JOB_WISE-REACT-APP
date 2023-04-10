import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-800 text-white">
        <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Job Wise</h3>
              <p className="text-sm mb-4">
                We provide job listings and career advice for professionals in
                various industries.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-gray-300">
                  <FaFacebook size={24} />
                </a>
                <a href="#" className="text-white hover:text-gray-300">
                  <FaTwitter size={24} />
                </a>
                <a href="#" className="text-white hover:text-gray-300">
                  <FaInstagram size={24} />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Company</h3>
              <ul className="ml-2">
                <li>
                  <a href="#" className="text-white hover:text-gray-300">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-gray-300">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-gray-300">
                    Press
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Product</h3>
              <ul className="ml-2">
                <li>
                  <a href="#" className="text-white hover:text-gray-300">
                    Job Listings
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-gray-300">
                    Resume Builder
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-gray-300">
                    Career Advice
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Support</h3>
              <ul className="ml-2">
                <li>
                  <a href="#" className="text-white hover:text-gray-300">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-gray-300">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-gray-300">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Contact</h3>
              <ul className="ml-2">
                <li>
                  <span className="text-sm">123 Main St</span>
                </li>
                <li>
                  <span className="text-sm">San Francisco, CA 12345</span>
                </li>
                <li>
                  <a
                    href="tel:1234567890"
                    className="text-white hover:text-gray-300"
                  >
                    123-456-7890
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
