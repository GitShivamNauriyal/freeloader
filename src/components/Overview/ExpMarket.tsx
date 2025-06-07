"use client";
import { motion } from "framer-motion";

const ExperienceMarketingSection = () => {
    return (
        <div className="w-full bg-white pt-20 md:py-20 p-6 pr-0 md:px-4 overflow-hidden">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 md:gap-8 relative">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -30, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="max-w-2xl md:w-2/3 relative font-[freepara] z-10 mr-6 md:mr-0"
                >
                    {/* Background Prop Image */}
                    <img
                        src="/assets/images/TangibleBgProp.png"
                        alt="Tangible Background Prop"
                        className="absolute -top-10 md:-top-16 -left-16 md:-left-32 w-28 md:w-52 h-28 md:h-52 object-contain z-0 opacity-100"
                    />

                    {/* Heading Block */}
                    <motion.h2
                        initial={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="text-3xl md:text-6xl font-extrabold text-black/80 leading-8 md:leading-[4rem] mb-6 z-10 font-[AgrandirHeavy]"
                    >
                        <div className="relative inline-block z-10">
                            <span>EXPERIENCE</span>
                            <div className="absolute font-[AgrandirWide] -top-4 -right-12 rotate-8 bg-[#5e17eb] text-white font-semibold px-4 py-1 text-xs sm:text-base shadow-lg rounded-md">
                                OUR SOLUTION
                            </div>
                        </div>
                        <br />
                        MARKETING
                    </motion.h2>

                    {/* Paragraphs */}
                    <motion.p
                        initial={{ opacity: 0, x: -20, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="mt-2 md:mt-4 text-neutral-700 text-sm md:text-lg leading-4 md:leading-tight"
                    >
                        Experience Marketing is our way to solve various
                        problems faced by brands today, from reduced brand
                        recall, to decreasing brand engagement.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, x: -20, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="mt-2 md:mt-4 text-neutral-700 text-sm md:text-lg leading-4 md:leading-tight"
                    >
                        As per our philosophy, a brand experience takes place
                        when your audience makes a tangible & physical contact
                        with your brand, without the distraction of doom
                        scrolling and the ever decreasing attention span, which
                        can either be through an event, merch or even
                        influencers.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, x: -20, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="mt-2 md:mt-4 text-neutral-700 text-sm md:text-lg leading-4 md:leading-tight"
                    >
                        It is in that moment when your audience experiences your
                        brand with full attention and their whole being.
                    </motion.p>
                </motion.div>

                {/* Desktop: Video absolutely positioned to the right */}
                <motion.div
                    className="hidden lg:block absolute right-[-7rem] top-1/2 -translate-y-1/2 z-20"
                    initial={{ opacity: 0, x: 80, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, x: 0, filter: "blur(0)" }}
                    transition={{
                        ease: "easeIn",
                        duration: 0.6,
                    }}
                >
                    <div className="relative w-[42rem] aspect-[2/1] translate-x-48">
                        {" "}
                        {/* Increased width */}
                        {/* Video Layer */}
                        <div className="absolute inset-0 h-[94%] top-2 z-0">
                            <video
                                src={`/assets/video/exp_marketing.mp4`}
                                className="w-full h-full object-cover rounded-4xl"
                                autoPlay
                                loop
                                muted
                                playsInline
                            />
                        </div>
                        {/* Rotated Phone Frame */}
                        <div className="absolute inset-0 z-10 pointer-events-none">
                            <img
                                src="/assets/images/iPhoneFrameRotatedRight.png"
                                alt="Work Glance"
                                className="object-contain rounded-xl scale-x-[1.02]"
                            />
                        </div>
                    </div>
                </motion.div>

                {/* Mobile: Video in next row, comes in from right, overflows */}
                <motion.div
                    className="block lg:hidden w-full relative overflow-hidden mt-8"
                    initial={{ opacity: 0, x: 80, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, x: 0, filter: "blur(0)" }}
                    transition={{
                        ease: "easeInOut",
                        duration: 0.6,
                    }}
                >
                    <div className="absolute right-[-2rem] top-0 w-[22rem] aspect-[2/1] z-20 mt-2">
                        {/* Video Layer */}
                        <div className="absolute inset-0 h-[94%] top-2 z-0">
                            <video
                                src={`/assets/video/exp_marketing.mp4`}
                                className="w-full h-full object-cover rounded-4xl"
                                autoPlay
                                loop
                                muted
                                playsInline
                            />
                        </div>
                        {/* Rotated Phone Frame */}
                        <div className="absolute inset-0 z-10 pointer-events-none">
                            <img
                                src="/assets/images/iPhoneFrameRotatedRight.png"
                                alt="Work Glance"
                                className="object-contain rounded-xl scale-y-105"
                            />
                        </div>
                    </div>
                    {/* Spacer to reserve height for the video so it doesn't overlap next section */}
                    <div className="h-56"></div>{" "}
                    {/* Increased height for larger video */}
                </motion.div>
            </div>
        </div>
    );
};

export default ExperienceMarketingSection;
