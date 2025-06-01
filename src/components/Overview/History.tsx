import { motion } from "framer-motion";

const History = () => {
    return (
        <div className="w-screen  wavy-background">
            <div className="px-6 py-12 md:p-16 lg:py-28 flex justify-center items-center">
                <motion.h1
                    initial={{ filter: "blur(30px)" }}
                    whileInView={{ filter: "blur(0px)" }}
                    transition={{ duration: 0.4 }}
                    className="font-[AgrandirHeavy] font-extrabold px-0 md:px-20 inline lg:px-24 max-w-screen-xl text-3xl sm:text-5xl  lg:text-7xl  text-left md:text-center freeheading text-white leading-7 sm:leading-12 md:leading-12 lg:leading-16 tracking-normal uppercase"
                >
                    CREATING TANGIBLE
                    {/* <br /> */}
                    <br />
                    BRAND EXPERIENCES
                    <br />
                    SINCE 2009
                    {/* <br /> */}
                    <img
                        src="/assets/images/spring_m.png"
                        alt="Tangible Background Prop"
                        className="ml-1 md:ml-2 w-8 md:w-12 h-8 md:h-12 -translate-y-2 md:-translate-y-4 object-contain z-0 opacity-100 inline"
                    />
                </motion.h1>
            </div>
        </div>
    );
};

export default History;
