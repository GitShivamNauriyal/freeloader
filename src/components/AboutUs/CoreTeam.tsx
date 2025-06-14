"use client";
import { motion } from "framer-motion";

const experiences = [
    {
        title: "Bhuvanesh S Manhas",
        subtitle: "Creative Director",
        image: "/assets/images/team/Picture1.png",
    },
    {
        title: "Nikhell Lall",
        subtitle: "Operations Director",
        image: "/assets/images/team/Picture2.png",
    },
    {
        title: "Sarthak Vig",
        subtitle: "Tech Lead",
        image: "/assets/images/team/Picture3.png",
    },
    {
        title: "Surbhe Singgla",
        subtitle: "Sourcing Lead",
        image: "/assets/images/team/Picture4.png",
    },
];

const CoreTeam = () => {
    return (
        <section className="w-full pt-4 pb-8">
            {/* Top Section: Heading */}
            <motion.div
                initial={{ opacity: 0, x: 20, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="px-6 md:px-16 mt-12 md:mt-16 max-w-screen-xl mx-auto"
            >
                <div className="flex items-start md:items-center justify-start relative">
                    <img
                        src="/assets/images/TangibleBgProp.png"
                        alt="Tangible Background Prop"
                        className="absolute -top-12 md:-top-16 -left-20 md:-left-28 md:w-52 w-32 md:h-52 h-32 object-contain z-0 opacity-100"
                    />
                    <h2 className="font-[AgrandirWide] text-4xl sm:text-6xl font-bold leading-10 md:leading-12 z-10">
                        <span className="block text-3xl md:text-4xl italic font-medium">
                            Meet Our
                        </span>
                        CORE TEAM
                    </h2>
                </div>
            </motion.div>

            {/* Bottom Section: Team Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-6 px-4 md:px-16 mt-6 md:mt-12 max-w-screen-xl mx-auto">
                {experiences.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{
                            duration: 0.3,
                            ease: "easeOut",
                            delay: index * 0.1,
                        }}
                        className="text-white border border-white/10 rounded lg:border-0 pb-2"
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-auto object-cover rounded-md"
                        />
                        <div className="border-[1px] md:border-2 border-white rounded-full mt-2 md:mt-4 px-1 md:px-2 py-3 md:pt-4 leading-4 md:leading-normal">
                            <h3 className="text-base md:text-xl text-center font-bold font-[freepara] leading-4 md:">
                                {item.title}
                            </h3>
                            <p className="text-md text-center italic opacity-80">
                                {item.subtitle}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default CoreTeam;
