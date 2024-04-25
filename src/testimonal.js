import React from 'react';
import m1 from './assets/man1.png';
import m2 from './assets/man2.png';
import m3 from './assets/man3.png';
import girl from './assets/girl.jpg';

const Testimonial = () => {
  return (
    <section id="testimonal">
      {/* First Section */}
      <div className="h-screen flex flex-col justify-center items-center relative">
        
        {/* Rectangle holding Image */}
        <div className="w-3/4 h-4/5 bg-blue-400 bg-opacity-40 rounded-lg flex justify-center items-center relative">
          <img src={girl} alt="Testimonial Image" className="w-full h-full rounded-lg" />
          <div className="absolute inset-0 bg-blue-400 opacity-40 rounded-lg"></div>
        </div>
        
        {/* Text on Image */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white">Blogs</h3>
          <p className="text-lg md:text-xl text-black">Our Best Blogs related to Technology</p>
          <p className="text-lg md:text-xl text-white">Our employees are our number one asset. Our goal is to recruit the best candidates in the industry <br />and retain them for a long, progressive career. HBK is a fast-paced, team-centered <br /> environment with unlimited growth potential.Our long list of established clients provides employees <br/> with the opportunity to work on dynamic and challenging projects every day. We offer an exciting and<br /> gainful work environment encouraging professional, personal and organizational growth. Our team of<br/> multi-talented employees contributes to an entrepreneurial-minded atmosphere where ideas,<br /> creativity and solutions are cultivated.</p>
        </div>
        
      </div>

      {/* Second Section */}
      <div className="bg-bluish py-12 text-center">
        <h1 className="text-white font-bold text-4xl mb-8">Testimonials</h1>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto grid grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <img className="w-full h-48 object-cover" src={m2} alt="Card 1" />
              <div className="px-4 py-4">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Mr John</h3>
                <p className="text-gray-600">Best Blog Website for Reading Blogs</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <img className="w-full h-48 object-cover" src={m3} alt="Card 2" />
              <div className="px-4 py-4">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Mr David</h3>
                <p className="text-gray-600">Highly Recommended Blog Website</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <img className="w-full h-48 object-cover" src={m1} alt="Card 3" />
              <div className="px-4 py-4">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Mr Salil</h3>
                <p className="text-gray-600">Best Website  for technology Blogs</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Button */}
        <button className="mt-8 bg-white text-bluish font-bold py-2 px-4 rounded hover:bg-bluish hover:text-white">More News</button>
      </div>
    </section>
  );
}

export default Testimonial;
