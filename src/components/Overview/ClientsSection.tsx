"use client";

import Marquee from "react-fast-marquee";

const clients = Array.from(
    { length: 29 },
    (_, i) => `/assets/images/clients/c${i + 1}.png`
);

const firstHalf = clients.slice(0, Math.ceil(clients.length / 2));
const secondHalf = clients.slice(Math.ceil(clients.length / 2));

export default function ClientsSection() {
    return (
        <section className="border-t border-b w-screen py-20 md:py-24 wavy-background overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <h2 className="text-4xl mb-8 md:mb-0 lg:text-6xl font-bold text-white font-[AgrandirWide]">
                    OUR CLIENTS
                </h2>

                {/* Desktop: Single marquee */}
                <div className="hidden md:block mt-4 lg:mt-10">
                    <Marquee speed={50} gradient={false} pauseOnHover={true}>
                        {clients.map((src, i) => (
                            <div
                                key={i}
                                className="mx-6 flex items-center justify-center"
                                style={{ height: "64px" }}
                            >
                                <img
                                    src={src}
                                    alt={`Client ${i + 1}`}
                                    className="object-contain"
                                    style={{
                                        height: "64px",
                                        width: "auto",
                                        maxWidth: "240px",
                                    }}
                                />
                            </div>
                        ))}
                    </Marquee>
                </div>

                {/* Mobile: Two marquees in opposite directions */}
                <div className="block md:hidden mt-4 space-y-8">
                    <Marquee speed={40} gradient={false} pauseOnHover={true}>
                        {firstHalf.map((src, i) => (
                            <div
                                key={i}
                                className="mx-4 flex items-center justify-center"
                                style={{ height: "64px" }}
                            >
                                <img
                                    src={src}
                                    alt={`Client ${i + 1}`}
                                    className="object-contain"
                                    style={{
                                        height: "64px",
                                        width: "auto",
                                        maxWidth: "240px",
                                    }}
                                />
                            </div>
                        ))}
                    </Marquee>
                    <Marquee
                        speed={40}
                        gradient={false}
                        pauseOnHover={true}
                        direction="right"
                    >
                        {secondHalf.map((src, i) => (
                            <div
                                key={i}
                                className="mx-4 flex items-center justify-center"
                                style={{ height: "64px" }}
                            >
                                <img
                                    src={src}
                                    alt={`Client {i + 1 + firstHalf.length}`}
                                    className="object-contain"
                                    style={{
                                        height: "64px",
                                        width: "auto",
                                        maxWidth: "240px",
                                    }}
                                />
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </section>
    );
}
