"use client";
import { motion } from "framer-motion";
import { memo } from "react";

const experiences = [
    {
        title: "HAMPER KITS",
        subtitle: "For Influencers, Employees & Events",
        image: "/assets/images/merchandise/Picture1.jpg",
    },
    {
        title: "FASHION WEAR",
        subtitle: "T-Shirts, Sneakers, Jackets, Joggers, Accessories and more",
        image: "/assets/images/merchandise/Picture2.jpg",
    },
    {
        title: "COLLECTIBLES",
        subtitle:
            "3D Printed, Figures, Patches, Stickers, Enamel, Retro, Magnets, Charms, and a lot more.",
        image: "/assets/images/merchandise/Picture3.jpg",
    },
    {
        title: "TECH-BASED",
        subtitle:
            "Magnetic, Voice Enabled, Sound boxes, Light boxes, AR VR, and more",
        image: "/assets/images/merchandise/Picture4.jpg",
    },
    {
        title: "FUNCTIONAL",
        subtitle: "Stationery, Backpacks, Sling bags, Drinkware, & more",
        image: "/assets/images/merchandise/Picture5.jpg",
    },
];

const fadeIn = (delay: number = 0) => ({
    initial: { opacity: 0, y: 20, filter: "blur(10px)" },
    whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
    transition: { delay, ease: "easeIn", duration: 0.4 },
});

const Merchandise = () => {
    return (
        <section className="w-full pb-16">
            {/* Top Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 mt-[72px] gap-4 md:gap-6 lg:gap-0 px-6 md:px-16 max-w-screen-xl mx-auto">
                {/* Title */}
                <motion.div
                    className="flex lg:col-span-2 items-start md:items-center justify-start relative"
                    {...fadeIn(0)}
                >
                    <img
                        src="/assets/images/TangibleBgProp.png"
                        alt="Tangible Background Prop"
                        width={208}
                        height={208}
                        className="absolute -top-14 -left-20 md:-left-32 w-32 md:w-52 h-32 md:h-52 object-contain z-0 opacity-100"
                    />
                    <h2 className="font-[AgrandirWide] text-[1.7rem] md:text-6xl font-bold leading-10 md:leading-16 z-10">
                        <span className="block text-lg md:text-4xl italic leading-4 md:leading-normal font-medium mb-0 md:mb-0.5 pr-4">
                            Customised & Personalised
                        </span>
                        EXPERIENCIAL GIFTING
                    </h2>
                </motion.div>

                {/* Description */}
                <motion.div
                    className="flex flex-col justify-center text-white font-[freepara]"
                    {...fadeIn(0.2)}
                >
                    <p className="text-base md:text-lg mb-4 leading-5">
                        Our team has deep specialization in creating brand
                        experience oriented hamper kits, fashion wear,
                        accessories and tech-based merchandise for your
                        audience.
                    </p>
                    <p className="font-bold uppercase">
                        WE MAKE COOL & AUTHENTIC MERCH THAT YOUR AUDIENCE LOVES.
                    </p>
                </motion.div>
            </div>

            {/* Bottom Section */}
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-2 lg:gap-6 px-4 md:px-16 mt-12 max-w-screen-xl mx-auto">
                {experiences.map((item, index) => (
                    <motion.div
                        key={item.title}
                        className={`font-[freepara] text-white border border-white/20 rounded lg:border-0 pb-2 ${
                            index === 0
                                ? "col-span-2 lg:col-span-1"
                                : "col-span-1"
                        }`}
                        {...fadeIn(index * 0.1)}
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            width={300}
                            height={200}
                            className={`w-full object-cover rounded-md ${
                                index === 0
                                    ? "max-h-64 md:max-h-none"
                                    : "h-auto"
                            }`}
                            loading="lazy"
                        />
                        <h3 className="text-lg font-bold mt-3 md:mt-4 px-1 md:pl-2">
                            {item.title}
                        </h3>
                        <p className="text-xs md:text-sm opacity-80 px-1 md:pl-2">
                            {item.subtitle}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default memo(Merchandise);
