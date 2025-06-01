import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const motionSpanProps = {
    initial: { opacity: 0, y: 10 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
    viewport: { once: false },
};

const HeroSection = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <main className="relative w-full md:min-h-[500px] h-[40vh] lg:h-[90vh] flex flex-col justify-between px-4 lg:px-12 py-10">
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover -z-10 -scale-x-100"
                    src="/assets/video/hero_bg.webm"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                <div /> {/* Spacer */}
                <div className="text-left pl-2 md:pl-8">
                    <h1 className="z-10 text-5xl sm:text-8xl md:text-9xl lg:text-[8rem] font-[900] leading-[0.9] tracking-[0.1rem] text-white font-[AgrandirHeavy]">
                        FREE
                        <br />
                        LOADER
                        <br />
                        AGENCY
                    </h1>
                    <p className="text-sm sm:text-lg font-light tracking-wide text-gray-300 mt-2 font-[freeheading] flex flex-wrap gap-1">
                        <motion.span {...motionSpanProps}>
                            <Link to="/experiences">EXPERIENCES</Link>
                        </motion.span>
                        <span className="mx-1">•</span>
                        <motion.span
                            {...motionSpanProps}
                            transition={{
                                ...motionSpanProps.transition,
                                delay: 0.3,
                            }}
                        >
                            <Link to="/experiencial-gifting">
                                EXPERIENCIAL GIFTING
                            </Link>
                        </motion.span>
                        <span className="mx-1">•</span>
                        <motion.span
                            {...motionSpanProps}
                            transition={{
                                ...motionSpanProps.transition,
                                delay: 0.6,
                            }}
                        >
                            <Link to="/influencers">INFLUENCERS</Link>
                        </motion.span>
                    </p>
                </div>
            </main>

            <div className="w-screen bg-cyan-400 text-[#5e17eb] font-bold tracking-wider text-center font-[AgrandirWide] py-4 px-4 text-sm sm:text-lg lg:text-2xl">
                <motion.h2
                    initial={{ x: 20, filter: "blur(10px)" }}
                    whileInView={{ x: 0, filter: "blur(0px)" }}
                    transition={{ ease: "easeIn", duration: 0.4 }}
                >
                    16+ YEAR JOURNEY • 500+ EXPERIENCES DELIVERED • OVER 60
                    BRANDS
                </motion.h2>
            </div>
        </div>
    );
};

export default HeroSection;
