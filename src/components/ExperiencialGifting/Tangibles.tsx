"use client";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function MerchSubsection() {
    return (
        <div className="bg-white w-screen wavy-light-background">
            <section className="max-w-5xl mx-auto px-2 md:px-4 py-32 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="text-[1.4rem] md:text-4xl font-bold text-[#5e17eb] mb-2 md:mb-4 font-[AgrandirWide]"
                >
                    Explore Our Merch & Gift Shop
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 100, filter: "blur(100px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                    className="text-[#5e17ebdd] max-w-2xl leading-4  md:leading-normal mx-auto mb-8 font-[freepara]"
                >
                    Discover a curated collection of high-quality merch,
                    hand-picked accessories, and thoughtful gifts — all designed
                    to reflect your style and story. Whether you&apos;re repping
                    the brand or surprising someone special, there&apos;s
                    something for everyone.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                >
                    <Link
                        to="https://future-culture-next-js-frontend.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-[AgrandirWide] inline-block px-6 py-3 text-sm font-semibold rounded-md bg-[#5e17eb] hover:bg-[#5e17ebd1] hover:-translate-y-1 text-white transition"
                    >
                        Tangibles →
                    </Link>
                </motion.div>
            </section>
        </div>
    );
}
