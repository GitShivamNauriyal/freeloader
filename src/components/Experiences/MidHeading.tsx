"use client";
// import { FaArrowDown } from "react-icons/fa";
import { motion } from "framer-motion";

const MidHeading = () => {
    return (
        <div className="px-6 py-12 md:p-16 lg:pt-24 pb-8 bg-white wavy-light-background font-[AgrandirWide]">
            <motion.h1
                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
                transition={{ duration: 0.6 }}
                className="px-0 md:px-20 lg:px-40 max-w-screen-xl mx-auto text-lg sm:text-xl lg:text-5xl text-left md:text-center text-[#5e17eb] font-bold leading-5 md:leading-6 lg:leading-11 tracking-wide uppercase"
            >
                95% of marketers agree that live events provide attendees with a
                valuable opportunity to form in-person connections in an
                increasingly digital world
            </motion.h1>

            {/* Arrow and "Showreel" text */}
            <a href="#exp-reel">
                <div className="mt-0 md:mt-6 flex flex-col items-center">
                    <div className="flex gap-6 items-center mt-4 lg:mt-6">
                        <span className="text-[#5e17eb] font-medium mb-">
                            Showreel
                        </span>
                        <div className="bg-cyan-300 rounded-full w-16 h-16 flex items-center justify-center shadow-md">
                            <svg
                                width="40"
                                height="40"
                                viewBox="0 0 40 40"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <polyline
                                    points="10,16 20,26 30,16"
                                    fill="none"
                                    stroke="white"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    );
};

export default MidHeading;
