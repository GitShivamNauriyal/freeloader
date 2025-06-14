"use client";

import { motion } from "framer-motion";

const experiences = [
    {
        title: "CELEBRITIES",
        subtitle:
            "From Bollywood to Youtube, we bring down stars on demand, for your events, collaborations & employee engagement",
        image: "/assets/images/influencer/Picture1.jpg",
    },
    {
        title: "TOP INFLUENCERS",
        subtitle: "Cat A to Cat C, for all your marketing objectives",
        image: "/assets/images/influencer/Picture2.jpg",
    },
    {
        title: "HOSTS",
        subtitle: "Guestlisting Hosts for Parties & events",
        image: "/assets/images/influencer/Picture3.jpg",
    },
];

const TopInfluencers = () => {
    return (
        <section className="w-full pb-16">
            {/* Top Section: Heading and Text */}
            <div className="grid grid-cols-1 mt-[72px] md:grid-cols-2 gap-2 lg:gap-0 px-6 md:px-16 max-w-screen-xl mx-auto relative">
                {/* Background Prop Image */}
                <img
                    src="/assets/images/TangibleBgProp.png"
                    alt="Tangible Background Prop"
                    className="absolute -top-10 md:-top-16 -left-16 md:-left-20 md:w-52 w-32 md:h-52 h-32 object-contain z-0 opacity-100"
                />

                {/* Left - Title */}
                <motion.div
                    initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.5 }}
                    className="flex items-start md:items-center justify-start z-10"
                >
                    <h2 className="text-4xl sm:text-7xl font-bold leading-10 lg:leading-16 font-[AgrandirWide]">
                        <span className="block text-4xl italic font-medium">
                            Top
                        </span>
                        INFLUENCERS
                    </h2>
                </motion.div>

                {/* Right - Description */}
                <motion.div
                    initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="flex flex-col justify-center text-white text-sm md:text-base font-[freepara]"
                >
                    <p className="text-base mb-4 leading-tight">
                        We work closely with influencers from various fields,
                        for your Social Media campaigns, events, parties,
                        endorsement, shoots & more.
                    </p>
                    <p className="font-bold uppercase">
                        WITH THE RIGHT FACE AND VOICE, YOUR BRAND CAN AMPLIFY
                        ITS PRESENCE IN A HIGHLY IMPACTFUL AND PERSONALISED
                        MANNER.
                    </p>
                </motion.div>
            </div>

            {/* Grid of Influencer Types */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 px-6 md:px-16 mt-10 lg:mt-12 max-w-screen-xl mx-auto">
                {experiences.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className="text-white border-white/20 border-[1px] rounded lg:border-0 pb-2 font-[freepara]"
                    >
                        <div className="relative w-full aspect-[3/2] rounded-md overflow-hidden">
                            <img
                                src={item.image}
                                alt={item.title}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 300px"
                                className="object-cover"
                            />
                        </div>

                        <h3 className="text-lg font-bold mt-4 pl-2 freeheading">
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

export default TopInfluencers;
