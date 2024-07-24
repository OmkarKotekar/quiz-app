// components/Footer.js
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h4 className="font-bold text-lg mb-2">Quiz App</h4>
            <p>Your go-to platform for interactive quizzes and learning.</p>
          </div>
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h4 className="font-bold text-lg mb-2">Useful Links</h4>
            <ul>
              <li>
                <Link href="/">
                  <div className="hover:underline">Home</div>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <div className="hover:underline">About Us</div>
                </Link>
              </li>
              <li>
                <Link href="/quizzes">
                  <div className="hover:underline">Quizzes</div>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <div className="hover:underline">Contact</div>
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h4 className="font-bold text-lg mb-2">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 2a4 4 0 00-4 4v4H8v4h6v8h4v-8h6v-4h-6V6a2 2 0 012-2h4V2h-4z" />
                </svg>
              </a>
              <a href="#" className="hover:text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8a6 6 0 00-11.52 2 9 9 0 0110.05 7A5 5 0 1016 8zM14 20a2 2 0 11-2-2 2 2 0 012 2z" />
                </svg>
              </a>
              <a href="#" className="hover:text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 4v16H4V4h16zM4 2a2 2 0 00-2 2v16a2 2 0 002 2h16a2 2 0 002-2V4a2 2 0 00-2-2H4zm8 2h4v8h-4V4zm0 10h4v4h-4v-4z" />
                </svg>
              </a>
              <a href="#" className="hover:text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2.5a10 10 0 0110 10V14l-4-1.5-2 1.5V14l-2 1.5v1.5l-2-1.5V10l-4 3v-2.5a10 10 0 0110-10z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/4">
            <h4 className="font-bold text-lg mb-2">Contact Us</h4>
            <p>Email: support@quizapp.com</p>
            <p>Phone: +123 456 7890</p>
            <p>Address: 123 Quiz App Lane, Knowledge City, 56789</p>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p>&copy; {new Date().getFullYear()} Quiz App. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
