import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const menuItems = [
    { label: "overview", path: "/" },
    { label: "experiences", path: "/experiences" },
    { label: "experiencial gifting", path: "/experiencial-gifting" },
    { label: "influencers", path: "/influencers" },
    { label: "about us", path: "/about-us" },
    { label: "blogs", path: "/blogs" },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    return (
        <nav className="fixed w-full bg-black/30 backdrop-blur-md z-[999]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 font-[AgrandirWide]">
                        <Link
                            to="/"
                            className="text-white text-xl font-extrabold"
                        >
                            <div className="translate-y-1">FREE</div>
                            <div className="-translate-y-1">LOADER</div>
                        </Link>
                        {/* <Link
                            to="/"
                            className="text-white text-xl font-extrabold leading-4"
                        >
                            <div className="translate-y-">FREE</div>
                            <div className="-translate-y-">LOADER</div>
                            <div className="-translate-y-">AGENCY</div>
                        </Link> */}
                    </div>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex items-center space-x-8 font-[freeheading] uppercase text-white text-sm">
                        {menuItems.map(({ label, path }) => (
                            <li key={path} className="relative group">
                                <Link
                                    to={path}
                                    className={`transition-colors duration-300 hover:text-gray-200 ${
                                        location.pathname === path
                                            ? "text-purple-300"
                                            : ""
                                    }`}
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Menu Button */}
                    <div className="flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            aria-expanded={isOpen}
                            className="text-white focus:outline-none"
                        >
                            <motion.div
                                initial={false}
                                animate={{
                                    rotate: isOpen ? 90 : 0,
                                    scale: isOpen ? 1.1 : 1,
                                }}
                                transition={{ duration: 0.3 }}
                                className="w-6 h-6 flex flex-col justify-between space-y-1"
                            >
                                <span className="block w-full h-0.5 bg-white"></span>
                                <span className="block w-full h-0.5 bg-white"></span>
                                <span className="block w-full h-0.5 bg-white"></span>
                            </motion.div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className=" font-[freeheading] md:hidden bg-[#5e17eb]/90 backdrop-blur-md absolute top-16 left-0 w-full px-4 py-4 space-y-2 z-[998]"
                    >
                        {menuItems.map(({ label, path }, i) => (
                            <motion.div
                                key={label}
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 30 }}
                                transition={{ delay: i * 0.1, duration: 0.3 }}
                            >
                                <Link
                                    to={path}
                                    className="block px-3 py-2 text-lg font-medium text-white hover:text-purple-200 transition"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {label}
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
