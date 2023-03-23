import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link href="/">
          <button className="text-white font-bold text-lg">My App</button>
        </Link>
        <nav>
          <ul className="flex space-x-4 text-gray-300">
            <li>
              <Link href="/">
                <button className="text-white hover:text-blue-500">Home</button>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <button className="text-white hover:text-blue-500">
                  About
                </button>
              </Link>
            </li>
            <li>
              <Link href="/latest-news">
                <button className="text-white hover:text-blue-500">
                  Latest News
                </button>
              </Link>
            </li>
            <li>
              <Link href="/blogs">
                <button className="text-white hover:text-blue-500">
                  Blogs
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
