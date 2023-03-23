import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link href="/Home">
          <button className="text-white font-bold text-lg  hover:text-blue-500">
            Market-watch
          </button>
        </Link>
        <nav>
          <ul className="flex space-x-8 text-gray-300">
            <li>
              <Link href="/Home">
                <button className="text-white hover:text-blue-500">Home</button>
              </Link>
            </li>
            <li>
              <Link href="/About">
                <button className="text-white hover:text-blue-500">
                  About
                </button>
              </Link>
            </li>
            <li>
              <Link href="/Latestnews">
                <button className="text-white hover:text-blue-500">
                  Latest News
                </button>
              </Link>
            </li>
            <li>
              <Link href="/Blogs">
                <button className="text-white hover:text-blue-500">
                  Blogs
                </button>
              </Link>
            </li>
            <li>
              <Link href="/Privacy-policy">
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
