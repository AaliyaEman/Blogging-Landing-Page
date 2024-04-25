import React from 'react';
import image from './assets/man.png'; // Replace 'path/to/your/image.jpg' with the actual path to your image

const Home = () => {
  return (
    <section id="home" className="flex flex-col justify-center items-center mt-12 md:mt-24 pb-14 md:pb-28"> {/* Increased padding bottom */}
      {/* Container for image and text */}
      <div className="flex flex-col md:flex-row items-center">
        {/* Text */}
        <div className="text-center md:text-left md:mr-8 mb-4 md:mb-0">
          <h1 className="font-poppins text-5xl md:text-6xl font-bold">
            <span className="font-extrabold text-8xl">S</span>tay <span>curious</span>
          </h1>
          <p className="text-lg md:text-xl font-bold mt-2 md:mt-0 md:ml-2">Discover stories, thinking, and expertise from <br />writers on any topic.</p>
          <button className="hidden md:block bg-bluish text-white px-8 py-4 mt-4">Explore Projects</button>
        </div>

        {/* Image */}
        <img src={image} alt="Your Image" className="w-full md:w-auto h-auto md:max-w-lg" />{/* Adjust width and height as needed */}
      </div>

      {/* Button (For smaller screens, move it inside the text container to ensure it stays centered) */}
      <div className="md:hidden text-center mt-4"> {/* Added margin top */}
        <button className="bg-bluish text-white px-8 py-4 rounded-lg">Explore Projects</button>
      </div>
    </section>
  );
}

export default Home;
