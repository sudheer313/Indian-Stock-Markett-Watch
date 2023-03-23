import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-4 mt-8">
      <div className="container mx-auto px-4 text-center text-white">
        <p className="text-sm">&copy; {new Date().getFullYear()} Indian Stock Market Watch. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
