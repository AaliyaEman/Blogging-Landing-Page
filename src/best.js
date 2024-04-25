import React from 'react';
import image1 from './assets/image3.jpg';
import image2 from './assets/image2.jpg';
import image3 from './assets/image3.jpg';
import image4 from './assets/image2.jpg';
import image5 from './assets/image3.jpg';
import image6 from './assets/image2.jpg';
import image7 from './assets/image3.jpg';
import image8 from './assets/image2.jpg';
import image9 from './assets/image3.jpg';

const Best = () => {
  return (
    <section id="best" className="bg-babyblue flex flex-col justify-center items-center p-8">
      <div className='mt-8 md:mt-16'>
        <h1 className="text-black font-bold text-4xl md:text-5xl lg:text-6xl mb-8">Best Blogs</h1>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {/* Image 1 */}
        <div className="relative">
          <img src={image1} alt="Image 1" className="w-full h-40 rounded-lg transition duration-300 transform hover:opacity-75 hover:scale-95" />
          <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 transition duration-300 rounded-lg hover:opacity-75">
            <p className="text-white font-bold text-lg">React Js</p>
          </div>
        </div>

        {/* Image 2 */}
        <div className="relative">
          <img src={image2} alt="Image 2" className="w-full h-40 rounded-lg transition duration-300 transform hover:opacity-75 hover:scale-95" />
          <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 transition duration-300 rounded-lg hover:opacity-75">
            <p className="text-white font-bold text-lg">React Js</p>
          </div>
        </div>

        {/* Image 3 */}
        <div className="relative">
          <img src={image3} alt="Image 3" className="w-full h-40 rounded-lg transition duration-300 transform hover:opacity-75 hover:scale-95" />
          <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 transition duration-300 rounded-lg hover:opacity-75">
            <p className="text-white font-bold text-lg">React Js</p>
          </div>
        </div>

        {/* Image 4 */}
        <div className="relative">
          <img src={image4} alt="Image 4" className="w-full h-40 rounded-lg transition duration-300 transform hover:opacity-75 hover:scale-95" />
          <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 transition duration-300 rounded-lg hover:opacity-75">
            <p className="text-white font-bold text-lg">Mongo DB</p>
          </div>
        </div>

        {/* Image 5 */}
        <div className="relative">
          <img src={image5} alt="Image 5" className="w-full h-40 rounded-lg transition duration-300 transform hover:opacity-75 hover:scale-95" />
          <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 transition duration-300 rounded-lg hover:opacity-75">
            <p className="text-white font-bold text-lg">Mongo DB</p>
          </div>
        </div>

        {/* Image 6 */}
        <div className="relative">
          <img src={image6} alt="Image 6" className="w-full h-40 rounded-lg transition duration-300 transform hover:opacity-75 hover:scale-95" />
          <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 transition duration-300 rounded-lg hover:opacity-75">
            <p className="text-white font-bold text-lg">Mongo DB</p>
          </div>
        </div>

        {/* Image 7 */}
        <div className="relative">
          <img src={image7} alt="Image 7" className="w-full h-40 rounded-lg transition duration-300 transform hover:opacity-75 hover:scale-95" />
          <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 transition duration-300 rounded-lg hover:opacity-75">
            <p className="text-white font-bold text-lg">Node Js</p>
          </div>
        </div>

        {/* Image 8 */}
        <div className="relative">
          <img src={image8} alt="Image 8" className="w-full h-40 rounded-lg transition duration-300 transform hover:opacity-75 hover:scale-95" />
          <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 transition duration-300 rounded-lg hover:opacity-75">
            <p className="text-white font-bold text-lg">Node Js</p>
          </div>
        </div>

        {/* Image 9 */}
        <div className="relative">
          <img src={image9} alt="Image 9" className="w-full h-40 rounded-lg transition duration-300 transform hover:opacity-75 hover:scale-95" />
          <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 transition duration-300 rounded-lg hover:opacity-75">
            <p className="text-white font-bold text-lg">Node Js</p>
          </div>
        </div>
      </div>

      {/* Button */}
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8">Get Started</button>
    </section>
  );
}

export default Best;
