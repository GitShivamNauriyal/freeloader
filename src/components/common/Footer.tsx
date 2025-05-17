import {
    FaInstagram,
    FaLinkedinIn,
    FaYoutube,
    FaXTwitter,
    FaFacebookF,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-black text-white px-6 md:px-12 lg:px-24 py-16">
            <div className="grid gap-10 md:grid-cols-3">
                {/* Left - Brand */}
                <div>
                    <h3 className="text-xl leading-5 font-bold tracking-widest mb-2 font-[AgrandirHeavy]">
                        FREE <br />
                        LOADER <br />
                        AGENCY
                    </h3>
                    <p className="text-gray-300 text-sm font-[freeheading]">
                        Freeloader Agency is an inclusive workplace. We welcome
                        people of all colors, genders, and beliefs.
                    </p>
                </div>

                {/* Navigation */}
                <nav aria-label="Main Navigation">
                    <h4 className="font-semibold text-lg mb-3 text-white font-[AgrandirWide]">
                        Navigation
                    </h4>
                    <ul className="space-y-2 text-gray-300 font-[freeheading]">
                        <li>
                            <Link
                                to="/experiences"
                                title="Explore our curated brand experiences"
                            >
                                Experiences
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/experiencial-gifting"
                                title="Corporate & personal gifting experiences"
                            >
                                Experiencial Gifting
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/influencers"
                                title="Discover our influencer collaborations"
                            >
                                Influencers
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/about-us"
                                title="Learn more about our team and mission"
                            >
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/blogs"
                                title="Learn more about our team and mission"
                            >
                                Blogs
                            </Link>
                        </li>
                    </ul>
                </nav>

                {/* Get in Touch */}
                <div className="font-[freeheading]">
                    <h4 className="font-semibold text-lg mb-3 text-white font-[AgrandirWide]">
                        Get in Touch
                    </h4>
                    <a
                        href="mailto:hi@freeloader.in"
                        className="text-violet-400 hover:underline block mb-1"
                    >
                        info@freeloader.in
                    </a>
                    <div className="mb-4">+91 9818848485</div>
                    <ul className="mb-4 list-disc ml-4">
                        <li>NEW DELHI</li>
                        <li>MUMBAI</li>
                        <li>BENGALURU</li>
                    </ul>
                    <div className="flex gap-4">
                        <a
                            href="#"
                            className="p-2 bg-neutral-800 rounded-full hover:bg-violet-500 transition"
                        >
                            <FaInstagram className="text-xl" />
                        </a>
                        <a
                            href="#"
                            className="p-2 bg-neutral-800 rounded-full hover:bg-violet-500 transition"
                        >
                            <FaLinkedinIn className="text-xl" />
                        </a>
                        <a
                            href="#"
                            className="p-2 bg-neutral-800 rounded-full hover:bg-violet-500 transition"
                        >
                            <FaYoutube className="text-xl" />
                        </a>
                        <a
                            href="#"
                            className="p-2 bg-neutral-800 rounded-full hover:bg-violet-500 transition"
                        >
                            <FaXTwitter className="text-xl" />
                        </a>
                        <a
                            href="#"
                            className="p-2 bg-neutral-800 rounded-full hover:bg-violet-500 transition"
                        >
                            <FaFacebookF className="text-xl" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="mt-16 border-t border-neutral-800 pt-6 flex flex-col md:flex-row justify-between text-sm text-gray-400">
                <p>Copyright © 2025 Freeloader Inc. All rights reserved.</p>
                <div className="flex gap-4 md:gap-6 mt-3 md:mt-0">
                    <a href="#" className="hover:text-white">
                        Privacy Policy
                    </a>
                    <a
                        href="/FICPL%20-%20Culture%20Handbook.pdf"
                        className="hover:text-white"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Culture Handbook
                    </a>
                    <a href="#" className="hover:text-white">
                        Terms of Service
                    </a>
                </div>
            </div>
        </footer>
    );
}
