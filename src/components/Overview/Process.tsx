"use client";

import { motion } from "framer-motion";
import { HeroHighlight } from "./DottedHighlight";
import { FiSearch } from "react-icons/fi"; // DEEP RESEARCH
import { BsPalette } from "react-icons/bs"; // DESIGNING
import { TbSettingsCog } from "react-icons/tb"; // PROTOTYPING
import { BsRocketTakeoff } from "react-icons/bs"; // EXECUTION

const steps = [
    {
        title: "DEEP RESEARCH",
        icon: <FiSearch className="text-white text-3xl mb-2" />,
        content1:
            "Inspired by your brief, our team dives deep into researching all feasible aspects of probable possibilities leading to logical conclusion, that fits best to meet the timelines and quality expectation.",
        content2:
            "This information is then packaged in a brief summary for the design team.",
    },
    {
        title: "DESIGNING",
        icon: <BsPalette className="text-white text-3xl mb-2" />,
        content1:
            "Our designers use latest tools available in the market to create references and mockups that are not just aesthetically pleasing but also provide a clear direction for the project.",
    },
    {
        title: "PROTOTYPING",
        icon: <TbSettingsCog className="text-white text-3xl mb-2" />,
        content1:
            "With the help of 3D printing, machinery, digital offset, Laser, enamel etching and other technologies, we create a physical sample that is 99% identical to the design mockup.",
    },
    {
        title: "EXECUTION",
        icon: <BsRocketTakeoff className="text-white text-3xl mb-2" />,
        content1:
            "As per your feedback and approval, after multiple samples, we move into final production of the desired Experience, bringing your marketing objective into the tangible world.",
    },
];

const Process = () => {
    return (
        <div className="w-full">
            <HeroHighlight>
                <div className="w-full py-20 px-6 relative bg-neutral-80 overflow-hidden">
                    {/* Optional grid background, low opacity */}
                    {/* <div className="absolute inset-0 opacity-10 pointer-events-none">
                            <div className="grid grid-cols-12 h-full">
                                {Array.from({ length: 12 }).map((_, i) => (
                                    <div key={i} className="border-r-2 border-white"></div>
                                ))}
                            </div>
                     </div> */}

                    <section id="process" className="text-white">
                        <div className="container mx-auto lg:px-4 relative">
                            {/* Header */}
                            <div className="max-w-4xl mx-auto text-center mb-16 z-10 cursor-default">
                                <motion.h2
                                    initial={{
                                        opacity: 0,
                                        y: 20,
                                        filter: "blur(10px)",
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                        filter: "blur(0px)",
                                    }}
                                    transition={{
                                        duration: 0.3,
                                        ease: "easeOut",
                                    }}
                                    className="text-4xl font-[AgrandirWide] md:text-6xl lg:text-7xl font-bold"
                                >
                                    OUR PROCESS
                                </motion.h2>
                                <motion.p
                                    initial={{
                                        opacity: 0,
                                        y: 20,
                                        filter: "blur(10px)",
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                        filter: "blur(0px)",
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        ease: "easeOut",
                                        delay: 0.2,
                                    }}
                                    className="text-base md:text-xl font-[freeheading] opacity-80"
                                >
                                    FOR BUILDING WORLD-CLASS EXPERIENCES
                                </motion.p>
                            </div>

                            {/* Timeline container */}
                            <div className="relative max-w-6xl mx-auto">
                                {/* Vertical center line */}
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        scaleY: 0.8,
                                        filter: "blur(10px)",
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        scaleY: 1,
                                        filter: "blur(0px)",
                                    }}
                                    transition={{
                                        duration: 0.6,
                                        ease: "easeOut",
                                    }}
                                    className="absolute left-1/2 top-0 bottom-0 w-1 bg-[#5e17eb] opacity-20 transform -translate-x-1/2 origin-top"
                                />
                                {/* 
                        <img
                            src="/assets/images/process_in.png"
                            alt="Process In"
                            className="absolute left-1/2 w-36 rotate-90 top-0 -translate-x-1/2 -translate-y-18 object-contain z-0"
                        />
                        <img
                            src="/assets/images/process_out.png"
                            alt="Process Out"
                            className="absolute left-1/2 w-32 rotate-90 bottom-0 -translate-x-1/2 translate-y-20 object-contain z-10"
                        /> 
                        */}

                                <div className="flex flex-col space-y-4">
                                    {steps.map((step, index) => {
                                        const isRight = index % 2 === 0;

                                        return (
                                            <motion.div
                                                key={index}
                                                initial={{
                                                    opacity: 0,
                                                    x: isRight ? -30 : 30,
                                                    filter: "blur(10px)",
                                                }}
                                                whileInView={{
                                                    opacity: 1,
                                                    x: 0,
                                                    filter: "blur(0px)",
                                                }}
                                                transition={{
                                                    duration: 0.6,
                                                    ease: "easeOut",
                                                }}
                                                className="flex justify-between items-start w-full relative"
                                            >
                                                {isRight ? (
                                                    <>
                                                        <div className="w-1/2 pr-2 md:pr-8 text-right font-[freepara]">
                                                            <div className="inline-block text-left">
                                                                <h3 className="font-[AgrandirWide] text-xl lg:text-2xl font-medium md:font-bold mb-2 leading-tight flex flex-col">
                                                                    {step.icon}
                                                                    {step.title}
                                                                </h3>

                                                                {/* <div className="hidden md:block">
                                                                    <p className="opacity-80 mb-2">
                                                                        {step.content1}
                                                                    </p>
                                                                    {step.content2 && (
                                                                        <p className="opacity-80">
                                                                            {
                                                                                step.content2
                                                                            }
                                                                        </p>
                                                                    )}
                                                                </div> */}
                                                                {/* Desktop (md+) view */}
                                                                <div className="hidden md:block">
                                                                    <p className="opacity-80 mb-2">
                                                                        {
                                                                            step.content1
                                                                        }
                                                                    </p>
                                                                    {step.content2 && (
                                                                        <p className="opacity-80">
                                                                            {
                                                                                step.content2
                                                                            }
                                                                        </p>
                                                                    )}
                                                                </div>

                                                                {/* Mobile-only view */}
                                                                <div className="block md:hidden mt-2">
                                                                    <p className="opacity-80 text-xs mb-2">
                                                                        {
                                                                            step.content1
                                                                        }
                                                                    </p>
                                                                    {step.content2 && (
                                                                        <p className="opacity-80 text-xs">
                                                                            {
                                                                                step.content2
                                                                            }
                                                                        </p>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/* Marker */}
                                                        <motion.div
                                                            initial={{
                                                                scale: 0,
                                                                filter: "blur(10px)",
                                                            }}
                                                            whileInView={{
                                                                scale: 1,
                                                                filter: "blur(0px)",
                                                            }}
                                                            transition={{
                                                                duration: 0.2,
                                                                ease: "easeOut",
                                                            }}
                                                            className="w-0 flex items-center justify-center relative"
                                                        >
                                                            <div className="w-5 h-5 bg-white border-4 rounded-full z-10"></div>
                                                        </motion.div>

                                                        <div className="w-1/2" />
                                                    </>
                                                ) : (
                                                    <>
                                                        <div className="w-1/2" />

                                                        {/* Marker */}
                                                        <motion.div
                                                            initial={{
                                                                scale: 0,
                                                                filter: "blur(10px)",
                                                            }}
                                                            whileInView={{
                                                                scale: 1,
                                                                filter: "blur(0px)",
                                                            }}
                                                            transition={{
                                                                duration: 0.6,
                                                                ease: "easeOut",
                                                            }}
                                                            className="w-0 flex items-center justify-center relative"
                                                        >
                                                            <div className="w-5 h-5 bg-white border-4 rounded-full z-10"></div>
                                                        </motion.div>

                                                        <div className="w-1/2 pl-4 lg:pl-8 text-left font-[freepara]">
                                                            <div>
                                                                <h3 className="font-[AgrandirWide] text-xl lg:text-2xl font-medium md:font-bold mb-2 leading-tight flex flex-col">
                                                                    {step.icon}
                                                                    {step.title}
                                                                </h3>

                                                                {/* <div className="hidden md:block">
                                                            <p className="opacity-80 mb-2">
                                                                {step.content1}
                                                            </p>
                                                            {step.content2 && (
                                                                <p className="opacity-80">
                                                                    {
                                                                        step.content2
                                                                    }
                                                                </p>
                                                            )}
                                                        </div> */}
                                                                {/* Desktop (md+) view */}
                                                                <div className="hidden md:block">
                                                                    <p className="opacity-80 mb-2">
                                                                        {
                                                                            step.content1
                                                                        }
                                                                    </p>
                                                                    {step.content2 && (
                                                                        <p className="opacity-80">
                                                                            {
                                                                                step.content2
                                                                            }
                                                                        </p>
                                                                    )}
                                                                </div>

                                                                {/* Mobile-only view */}
                                                                <div className="block md:hidden mt-2">
                                                                    <p className="opacity-80 text-xs mb-2">
                                                                        {
                                                                            step.content1
                                                                        }
                                                                    </p>
                                                                    {step.content2 && (
                                                                        <p className="opacity-80 text-xs">
                                                                            {
                                                                                step.content2
                                                                            }
                                                                        </p>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </>
                                                )}
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </HeroHighlight>
        </div>
    );
};

export default Process;
