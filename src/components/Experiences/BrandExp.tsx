"use client";

import { motion } from "framer-motion";

const experiences = [
    {
        title: "INFLUENCER EVENTS",
        subtitle: "Conceptual parties & meet-ups",
        image: "/assets/images/experience_new/Picture1.jpg",
    },
    {
        title: "CORPORATE SHOWS",
        subtitle: "Dealer Meets, Press Launches & Employee Celebrations",
        image: "/assets/images/experience_new/Picture2.jpg",
    },
    {
        title: "FASHION SHOWS",
        subtitle: "Bespoke designer shows & Fashion weeks",
        image: "/assets/images/experience_new/Picture3.jpg",
    },
    {
        title: "POP-UPS",
        subtitle: "Activation & Guerilla Marketing",
        image: "/assets/images/experience_new/Picture4.jpg",
    },
];

const BrandExperiences = () => {
    return (
        <section className="w-full pb-16">
            {/* Top Section */}
            <div className="grid grid-cols-1 my-16 lg:grid-cols-2 gap-6 lg:gap-8 px-4 md:px-16 max-w-screen-xl mx-auto relative">
                <img
                    src="/assets/images/TangibleBgProp.png"
                    alt="Tangible Background Prop"
                    className="absolute -top-10 md:-top-16 -left-16 md:-left-12 w-32 md:w-52 h-32 md:h-52 object-contain z-0 opacity-100"
                />
                <motion.div
                    initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
                    transition={{ delay: 0, ease: "easeIn", duration: 0.4 }}
                    className="flex items-start md:items-center justify-start z-10"
                >
                    <h2 className="text-4xl sm:text-7xl font-bold leading-8 lg:leading-16 font-[AgrandirWide]">
                        <span className="block text-3xl italic font-medium">
                            Brand
                        </span>
                        EXPERIENCES
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
                    transition={{ delay: 0.2, ease: "easeIn", duration: 0.4 }}
                    className="flex flex-col justify- leading-5 md:leading-normal text-white font-[freepara]"
                >
                    <p className="text-base mb-4 leading-4">
                        From conceptual brand launches, to theme based on–ground
                        campaigns, to most happening night of the town…
                        on–ground experiences come in many flavors and a lot of
                        shades.
                    </p>
                    <p className="font-bold uppercase">
                        We specialise in creating unforgettable concept based
                        experiences for brands and their audience.
                    </p>
                </motion.div>
            </div>

            {/* Bottom Section: Cards */}
            <div className="font-[freepara] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 px-4 md:px-16 mt-12 max-w-screen-xl mx-auto">
                {experiences.map((item, index) => (
                    <motion.div
                        key={index}
                        className="text-white border-[1px] border-white/20 rounded lg:border-0 pb-2"
                        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
                        transition={{ delay: index * 0.1, duration: 0.4 }}
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-auto object-cover rounded-md"
                        />
                        <h3 className="text-lg freeheading font-bold mt-4 pl-2">
                            {item.title}
                        </h3>
                        <p className="text-sm opacity-80 pl-2">
                            {item.subtitle}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default BrandExperiences;
