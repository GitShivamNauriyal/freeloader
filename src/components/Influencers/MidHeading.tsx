"use client";

// import { FaArrowDown } from "react-icons/fa";

const MidHeading = () => {
    return (
        <div className="px-6 py-12 md:p-16 lg:py-28 bg-white wavy-light-background">
            <h1 className="font-[AgrandirHeavy] px-2 md:px-16 lg:px-28 lg:pl-40 max-w-screen-xl mx-auto text-lg sm:text-xl lg:text-3xl text-cente  text-[#5e17eb] font-bold leading-5 md:leading-8 tracking-wide uppercase">
                67% of Indians trust influencerS more than traditional ads,
                highlighting the impact of authentic brand endorsements.
            </h1>

            {/* Arrow and "Showreel" text */}
            {/* <div className="mt-4 lg:mt-6 flex flex-col items-center">
                <span className="text-cyan-500 font-medium">Showreel</span>
                <FaArrowDown className="text-cyan-500 text-xl mb-1" />
            </div> */}
        </div>
    );
};

export default MidHeading;
