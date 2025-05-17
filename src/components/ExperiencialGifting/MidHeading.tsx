"use client";

// import { FaArrowDown } from "react-icons/fa";
import { motion } from "framer-motion";

const MidHeading = () => {
    return (
        <div className="px-6 py-12 md:p-16 lg:pt-24 pb-12 bg-white">
            <motion.h1
                initial={{
                    opacity: 0,
                    y: 20,
                    filter: "blur(10px)",
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                    filter: "blur(0)",
                }}
                transition={{ ease: "easeInOut", duration: 0.3 }}
                className="font-[AgrandirHeavy] px-4 md:px-20 lg:px-28 max-w-screen-xl mx-auto text-lg sm:text-xl lg:text-3xl text-center md:text-left text-[#5e17eb] font-bold leading-5 md:leading-8 tracking-wide uppercase"
            >
                Physical merchandise provides a tangible way for YOUR AUDIENCE
                to interact with a brand, often leading to a more memorable and
                impactful brand experience than digital or print adS.
            </motion.h1>

            <motion.div
                initial={{
                    opacity: 0,
                    y: 20,
                    filter: "blur(10px)",
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                    filter: "blur(0)",
                }}
                transition={{ ease: "easeInOut", duration: 0.3, delay: 0.2 }}
                className="flex flex-col items-center"
            >
                <div className="flex flex-col items-center">
                    <div className="flex gap-6 items-center mt-4">
                        <span className="text-[#5e17eb] font-medium mb-2 font-[freepara] italic">
                            Check-out our Hamper Innovations
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
            </motion.div>
        </div>
    );
};

export default MidHeading;
