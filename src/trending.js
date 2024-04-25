import React from 'react';

const Trending = () => {
  return (
    
    <div className="about-section bg-white py-2 md:py-1 text-center mt-14 md:mt-28 pb-14 md:pb-28">
      <section id="trend">
      <h1 className="text-black text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-8">Trending on BlogDev</h1>
      <div className="flex flex-col md:flex-row justify-center md:gap-4">
        <div className="flex flex-col items-center md:items-start md:mr-4 mb-4 md:mb-0"> {/* Added margin bottom for smaller screens */}
          <div className="border hover:border-blackish rounded-lg px-4 py-2 mb-2 md:mb-4">Alex Klein in UX Collective<br /><span className="font-bold">Prompts should be designed — not <br /> 
engineered</span><br/><span>Apr 2, 2024  6 min read</span></div>
          <div className="border hover:border-blackish rounded-lg px-4 py-2 md:mb-4">Alex Klein in UX Collective<br /><span className="font-bold">Prompts should be designed — not <br /> 
engineered</span><br/><span>Apr 2, 2024  6 min read</span></div>
        </div>
        <div className="flex flex-col items-center md:items-start mt-2 md:mt-0">
          <div className="border hover:border-blackish rounded-lg px-4 py-2 mb-2 md:mb-4">Alex Klein in UX Collective<br /><span className="font-bold">Prompts should be designed — not <br /> 
engineered</span><br/><span>Apr 2, 2024  6 min read</span></div>
          <div className="border hover:border-blackish rounded-lg px-4 py-2">Alex Klein in UX Collective<br /><span className="font-bold">Prompts should be designed — not <br /> 
engineered</span><br/><span>Apr 2, 2024  6 min read</span></div>
        </div>
      </div>
      </section>
    </div>
   
  );
}

export default Trending;



