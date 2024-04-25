import React, { useState, useEffect } from 'react';
import blog from './assets/blog.jpg';
import { FiMenu, FiX } from 'react-icons/fi'; // Import icons for menu and close buttons

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        section.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false); // Close the menu after clicking a link
    };

    return (
        <nav className="py-4 bg-white sticky-top">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <div>
                    <img src={blog} alt="Logo" className="h-12 w-auto" />
                </div>

                {/* Navbar Links (Desktop) */}
                <div className="hidden md:flex justify-center flex-grow">
                    <a href="#home" className="text-black px-4 py-2  hover:text-bluish">Home</a>
                    <a href="#trend" className="text-black px-4 py-2  hover:text-bluish">Trending Blogs</a>
                    <a href="#info" className="text-black px-4 py-2  hover:text-bluish">Informative Blogs</a>
                    <a href="#best" className="text-black px-4 py-2  hover:text-bluish">Best Blogs</a>
                    <a href="#testimonal" className="text-black px-4 py-2  hover:text-bluish">Testimonals</a>
                </div>

                {/* Menu Icon (Mobile) */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-black focus:outline-none">
                        {isMenuOpen ? <FiX className="h-8 w-8 fill-current" /> : <FiMenu className="h-8 w-8 fill-current" />}
                    </button>
                </div>

                {/* Dropdown Content */}
                {isMenuOpen && (
                    <div className="fixed top-0 left-0 w-full h-full text-black p-4 bg-white z-50">
                        <div className="flex justify-end">
                            <button onClick={toggleMenu} className="text-black focus:outline-none">
                                <FiX className="h-8 w-8 fill-current" />
                            </button>
                        </div>
                        <div className="mt-10 flex flex-col items-center">
                            <a href="#home" onClick={() => scrollToSection('home')} className="block py-4 text-xl hover:text-bluish border-b border-gray-400">Home</a>
                            <a href="#trend" onClick={() => scrollToSection('trend')} className="block py-4 text-xl  hover:text-bluish border-b border-gray-400">Trending Blogs</a>
                            <a href="#info" onClick={() => scrollToSection('info')} className="block py-4 text-xl  hover:text-bluish">Informative Blogs</a>
                            <a href="#best" onClick={() => scrollToSection('info')} className="block py-4 text-xl  hover:text-bluish">Best Blogs</a>
                            <a href="#testimonal" onClick={() => scrollToSection('info')} className="block py-4 text-xl  hover:text-bluish">Testimonals</a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
