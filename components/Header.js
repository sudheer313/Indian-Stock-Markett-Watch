import React, { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);

  const handleOptionsToggle = () => {
    setIsOptionsOpen(!isOptionsOpen);
  };

  return (
    <header className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link href="/Home">
          <button className="text-white font-bold text-lg hover:text-blue-500">
            Bharat-Bull-Bear (Indian Stock Market Watch)
          </button>
        </Link>
        <div className="lg:hidden">
          <button
            className={`text-white hover:text-blue-500 ${isOptionsOpen ? "open" : ""}`}
            onClick={handleOptionsToggle}
          >
            <div className="hamburger"></div>
            <div className="hamburger"></div>
            <div className="hamburger"></div>
          </button>
        </div>
        <nav className="lg:flex">
          <ul className="flex space-x-8 text-gray-300">
            <li>
              <Link href="/Home">
                <button className="text-white hover:text-blue-500">Home</button>
              </Link>
            </li>
            <li>
              <Link href="/About">
                <button className="text-white hover:text-blue-500">About</button>
              </Link>
            </li>
            <li>
              <Link href="/Latestnews">
                <button className="text-white hover:text-blue-500">Latest News</button>
              </Link>
            </li>
            <li>
              <Link href="/Blogs">
                <button className="text-white hover:text-blue-500">Blogs</button>
              </Link>
            </li>
            <li>
              <Link href="/Robotics">
                <button className="text-white hover:text-blue-500">Algo Trading</button>
              </Link>
            </li>
            <li className="relative">
              <button
                className={`text-white hover:text-blue-500 ${isOptionsOpen ? "open" : ""}`}
                onClick={handleOptionsToggle}
                onMouseEnter={() => setIsOptionsOpen(true)}
                onMouseLeave={() => setIsOptionsOpen(false)}
              >
                <span className="mr-2">Options</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-4 w-4 transform transition-transform duration-200 ${
                    isOptionsOpen ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {isOptionsOpen && (
                <ul className="absolute left-0 ml-0 mt-2 bg-gray-800 py-2 rounded-lg">
                  <li>
                    <Link href="/NiftyOptions">
                      <button className="text-white hover:text-blue-500">
                        Nifty Options
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link href="/BankNiftyOptions">
                      <button className="text-white hover:text-blue-500">
                        Bank Nifty Options
                      </button>
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link href="/PrivacyPolicy">
                <button className="text-white hover:text-blue-500">
                  Privacy Policy
                </button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
