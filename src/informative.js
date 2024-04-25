import React from 'react';
import man from './assets/sitman.png';

const Informative = () => {
  return (
    <section id="info" className="flex flex-col justify-center items-center mt-14 md:mt-28 pb-14 md:pb-28"> {/* Increased padding bottom */}
      {/* Container for image and text */}
      <div className="flex flex-col md:flex-row items-center">
        {/* Image */}
        <img src={man} alt="Your Image" className="w-full md:w-auto h-auto md:max-w-lg order-1 md:order-none rounded-lg" />{/* Adjust width and height as needed */}

        {/* Text */}
        <div className="text-center md:text-left md:ml-8 order-2 md:order-none mb-4 md:mb-0 md:mr-8"> {/* Adjusted margin and flex order */}
          <h1 className="font-poppins text-2xl md:text-3xl font-bold">
            Short and Informative Blogs
          </h1>
          <p className="text-lg md:text-xl  mt-2 md:mt-0 md:ml-2">Discover stories, thinking, and expertise from <br />writers on any topic.</p>
          <button className="hidden md:block bg-bluish text-white px-8  rounded-lg py-4 mt-4">Explore Projects</button>
        </div>
      </div>

      {/* Button (For smaller screens, move it inside the text container to ensure it stays centered) */}
      <div className="md:hidden text-center mt-4"> {/* Added margin top */}
        <button className="bg-bluish text-white px-8 py-4 rounded-lg">Explore Projects</button>
      </div>
    </section>
  );
}

export default Informative;
