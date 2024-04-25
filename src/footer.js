import React from 'react';

function Footer() {
  return (
    <footer className="footer bg-blackish text-white py-8">
      <div className="container mx-auto px-3 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-7 gap-3 px-4">
          {/* Contact */}
          <div className="mb-4 col-span-3 md:col-span-2">
            <h1 className="text-5xl font-bold mb-4">Our application is beyond the wave</h1>
            <div className="mb-3">
              <h2>Designed to make it easy for developers using a complex API allows you to build innovative solutions</h2>
            </div>
            <div>
              <h1 className="font-bold mt-8">BLOG DEV</h1>
            </div>
            <div className="mb-7 mt-7">
              <h2>Designed to make it easy for developers using a complex API allows you to build innovative solutions</h2>
            </div>
          </div>

          {/* Compliance */}
          <div className="mb-4 col-span-1 mt-52 px-5">
            <h5 className="text-lg font-semibold mb-2">Compliance.io</h5>
            <div className="mb-1">
              <a href="#">Home</a>
            </div>
            <div className="mb-1">
              <a href="#">Product</a>
            </div>
            <div className="mb-1">
              <a href="#">What's New</a>
            </div>
            <div className="mb-1">
              <a href="#">Pricing</a>
            </div>
            <div className="mb-1">
              <a href="#">Business</a>
            </div>
            <div className="mb-1">
              <a href="#">Enterprise</a>
            </div>
            <div className="mb-1">
              <a href="#">CustomerSuccess</a>
            </div>
          </div>
          
          {/* Resources */}
          <div className="mb-4 col-span-1 mt-52 px-5">
            <h5 className="text-lg font-semibold mb-2">About</h5>
            <div className="mb-1">
              <a href="#">Company</a>
            </div>
            <div className="mb-1">
              <a href="#">Customers</a>
            </div>
            <div className="mb-1">
              <a href="#">Careers</a>
            </div>
            <div className="mb-1">
              <a href="#">Press</a>
            </div>
            <div className="mb-1">
              <a href="#">Blogs</a>
            </div>
            <div className="mb-1">
              <a href="#">Sitemap</a>
            </div>
            <div className="mb-1">
              <a href="#">Pricing FAQ</a>
            </div>
          </div>

          {/* Learn */}
          <div className="mb-4 col-span-1 mt-52 px-5">
            <h5 className="text-lg font-semibold mb-2">Resources</h5>
            <div className="mb-1">
              <a href="#">Help Center</a>
            </div>
            <div className="mb-1">
              <a href="#">Forum</a>
            </div>
            <div className="mb-1">
              <a href="#">Support</a>
            </div>
            <div className="mb-1">
              <a href="#">Developers & API</a>
            </div>
            <div className="mb-1">
              <a href="#">Partners</a>
            </div>
            <div className="mb-1">
              <a href="#">Events</a>
            </div>
          </div>

          {/* About */}
          <div className="mb-4 col-span-1 md:col-span-1 mt-52 px-5">
            <h5 className="text-lg font-semibold mb-2">Learn</h5>
            <div className="mb-1">
              <a href="#">ZATCA  E-Invoicing</a>
            </div>
            <div className="mb-1">
              <a href="#">ERP Integration</a>
            </div>
            <div className="mb-1">
              <a href="#">ERP Implementation</a>
            </div>
            <div className="mb-1">
              <a href="#">ERP Customisation</a>
            </div>
            <div className="mb-1">
              <a href="#">QR Code Generation</a>
            </div>
          </div>

          {/* Workflow Solution */}
          <div className="mb-4 col-span-1 md:col-span-1 mt-52 px-5">
            <h5 className="text-lg font-semibold mb-2">Workflow Solution</h5>
            <div className="mb-1">
              <a href="#">Phase-1</a>
            </div>
            <div className="mb-1">
              <a href="#">Phase-2</a>
            </div>
            <div className="mb-1">
              <a href="#">Booklet</a>
            </div>
          </div>
        </div>
        <hr className="border-t border-white mt-8" />
        
        {/* Additional Links */}
        <div className="flex justify-between mt-4">
          <div>
            <a href="#" className="text-white mr-6">Privacy Policy</a>
            <a href="#" className="text-white mr-6">Terms and Conditions</a>
            <a href="#" className="text-white">Support</a>
          </div>
          <div>
            <p className="text-white">Copyright 2023 @ compliance.io</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

