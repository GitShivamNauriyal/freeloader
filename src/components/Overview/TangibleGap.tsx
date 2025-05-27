"use client";
import { motion } from "framer-motion";

const TangibleGap = () => {
    return (
        <div className="bg-white w-full pt-24 pb-0 md:py-24 px-4 overflow-hidden">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -30, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="max-w-2xl relative font-[freepara] z-10"
                >
                    {/* Background Prop Image */}
                    <img
                        src="/assets/images/TangibleBgProp.png"
                        alt="Tangible Background Prop"
                        className="absolute -top-10 md:-top-16 -left-16 md:-left-32 w-28 md:w-52 h-28  md:h-52 object-contain z-0 opacity-100"
                    />

                    {/* Heading Block */}
                    <motion.div
                        initial={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="relative z-10 font-[AgrandirHeavy] font-extrabold"
                    >
                        <div className="flex items-center gap-2">
                            <h2 className="text-2xl lg:text-6xl font-extrabold leading-tight text-black/80">
                                THE
                            </h2>
                            <span className="bg-[#5e17eb] -translate-y-0.5 font-[AgrandirWide] flex items-center justify-center text-xs md:text-xl text-white px-2 lg:px-4 py-2 font-bold text-md rounded-sm">
                                <p className="leading-none translate-y-0.5">
                                    WE HAVE A REAL PROBLEM
                                </p>
                            </span>
                        </div>
                        <h2 className="text-2xl lg:text-6xl font-extrabold text-black/80">
                            TANGIBLE GAP
                        </h2>
                    </motion.div>

                    {/* Paragraphs */}
                    <motion.p
                        initial={{ opacity: 0, x: -20, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="mt-2 md:mt-4 text-neutral-700 text-sm md:text-lg leading-4 md:leading-tight"
                    >
                        In an all digital era, brands are beginning to lose
                        tangible connection with their audience at an ever
                        increasing pace.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, x: -20, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="mt-2 md:mt-4 text-neutral-700 text-sm md:text-lg leading-4 md:leading-tight"
                    >
                        Instead of reactive & ad-hoc solutions to reconnect with
                        the audience, the demand for well thought out
                        experiences is increasing with every new marketing
                        initiative.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, x: -20, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="mt-2 md:mt-4 text-neutral-700 font-[freepara] text-sm md:text-lg leading-4 md:leading-tight"
                    >
                        Since 2009, we at FIC have constantly evolved towards
                        innovating and building new age{" "}
                        <strong>
                            ‘Design based–Tech forward–Pro human connection’
                        </strong>{" "}
                        solutions, pushing the boundaries of what an experience
                        really means.
                    </motion.p>
                </motion.div>

                {/* Video + Frame */}
                <motion.div
                    className="hidden md:block absolute right-0 top-[-2rem] z-20"
                    // You can tweak bottom-[-4rem] for how much it "comes out"
                    initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
                    transition={{
                        ease: "easeIn",
                        duration: 0.6,
                    }}
                >
                    <div className="relative w-64 md:w-80 aspect-[1/2]">
                        <video
                            src={`/assets/video/tangible_gap.mp4`}
                            className="absolute inset-0 w-[93%] left-2 h-full object-cover rounded-4xl z-0"
                            autoPlay
                            loop
                            muted
                            playsInline
                        />
                        <img
                            src="/assets/images/iPhoneFrame.png"
                            alt="Work Glance"
                            className="absolute inset-0 w-full h-full object-contain rounded-xl z-10 pointer-events-none scale-y-105"
                        />
                    </div>
                </motion.div>

                {/* Mobile: Stack video below text */}
                <motion.div
                    className="block md:hidden w-full overflow-hidden"
                    initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
                    transition={{
                        ease: "easeIn",
                        duration: 0.6,
                    }}
                >
                    <div className="relative mx-auto w-64 aspect-[1/2] -mb-16">
                        <video
                            src={`/assets/video/tangible_gap.mp4`}
                            className="absolute inset-0 w-[93%] left-2 h-full object-cover rounded-4xl z-0"
                            autoPlay
                            loop
                            muted
                            playsInline
                        />
                        <img
                            src="/assets/images/iPhoneFrame.png"
                            alt="Work Glance"
                            className="absolute inset-0 w-full h-full object-contain rounded-xl z-10 pointer-events-none scale-y-105"
                        />
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default TangibleGap;
