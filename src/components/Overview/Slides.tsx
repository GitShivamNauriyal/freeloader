import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const motionSpanProps = {
    initial: { opacity: 0, y: 10 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
    viewport: { once: false },
};

export const HeroFirstSlide = () => (
    <div className="flex flex-col justify-between h-full w-full  px-4 lg:px-12 py-8">
        <div />
        <div className="text-left pl-2 md:pl-8 flex ">
            <div>
                <h1 className="z-10 text-5xl sm:text-8xl md:text-9xl lg:text-[8rem] font-[900] leading-[0.9] tracking-[0.1rem] text-white font-[AgrandirHeavy]">
                    FREE
                    <br />
                    LOADER
                    <br />
                    AGENCY
                </h1>
                <p className="text-sm sm:text-lg font-light tracking-wide text-gray-200 mt-2 font-[freeheading] flex flex-wrap gap-1">
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
        </div>
    </div>
);

export const HeroSecondSlide = () => (
    <div
        className="text-white text-center w-full h-full flex items-center justify-center"
        style={{
            backgroundImage: "url(/assets/images/demo1.png",
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}
    >
        <h1 className="text-4xl md:text-6xl font-bold max-w-3xl mx-auto">
            Your Business. Our Services. One Reliable Partner —{" "}
            <span className="text-[#5e17eb]">Freeloader.</span>
        </h1>
    </div>
);

export const HeroThirdSlide = () => (
    <div
        className="text-white text-center w-full h-full flex items-center justify-center"
        style={{
            backgroundImage: "url(/assets/images/demo2.png",
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}
    >
        <h1 className="text-4xl md:text-6xl font-bold max-w-3xl mx-auto">
            Simplifying Success —{" "}
            <span className="text-[#6e26ff]">One Service at a Time.</span>
        </h1>
    </div>
);
