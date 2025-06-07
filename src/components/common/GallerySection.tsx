import { useState, useMemo, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { X } from "lucide-react";

// Utility to chunk array
function chunkArray<T>(array: T[], chunkSize: number): T[][] {
    const chunks: T[][] = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
}

// Media query hook
function useMediaQuery(query: string): boolean {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(query);
        const listener = () => setMatches(media.matches);
        listener();
        media.addEventListener("change", listener);
        return () => media.removeEventListener("change", listener);
    }, [query]);

    return matches;
}

// Layouts
const defaultLayouts = [
    [
        "col-span-2 row-span-1",
        "col-span-1 row-span-2",
        "col-span-1 row-span-1",
        "col-span-1 row-span-1",
        "col-span-1 row-span-1",
        "col-span-1 row-span-1",
    ],
    [
        "col-span-1 row-span-2",
        "col-span-2 row-span-1",
        "col-span-1 row-span-1",
        "col-span-1 row-span-1",
        "col-span-1 row-span-1",
        "col-span-1 row-span-1",
    ],
];

const mobileLayouts = [
    [
        "col-span-1 row-span-1",
        "col-span-1 row-span-1",
        "col-span-1 row-span-1",
        "col-span-1 row-span-1",
        "col-span-1 row-span-1",
        "col-span-1 row-span-1",
    ],
];

interface GalleryCarouselProps {
    images: string[];
    imagesPerSlide?: number;
    title?: string;
}

export default function GalleryCarousel({
    images,
    imagesPerSlide = 6,
    title = "Gallery",
}: GalleryCarouselProps) {
    const [page, setPage] = useState(0);
    const [direction, setDirection] = useState(0);
    const isMobile = useMediaQuery("(max-width: 640px)");
    const [showScrollView, setShowScrollView] = useState(false);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (showScrollView && activeIndex !== null && scrollRef.current) {
            const target = scrollRef.current.children[
                activeIndex
            ] as HTMLElement;
            if (target) {
                scrollRef.current.scrollTo({
                    top: target.offsetTop,
                    behavior: "smooth",
                });
            }
        }
    }, [showScrollView, activeIndex]);

    const imageSlides = useMemo(
        () => chunkArray(images, imagesPerSlide),
        [images, imagesPerSlide]
    );
    const totalPages = imageSlides.length;
    const currentImages = imageSlides[page] || [];
    const currentLayout = isMobile
        ? mobileLayouts[page % mobileLayouts.length]
        : defaultLayouts[page % defaultLayouts.length];

    const paginate = (newDirection: number) => {
        setDirection(newDirection);
        setPage((prev) =>
            Math.max(0, Math.min(totalPages - 1, prev + newDirection))
        );
    };

    return (
        <div className="">
            <section className="max-w-5xl mx-auto px-6 py-12 md:py-20">
                <h2 className="font-[AgrandirWide] text-3xl md:text-5xl font-semibold text-neutral-100 mb-2">
                    {title}
                </h2>
                <hr className="border-t border-gray-300 mb-10" />

                <div className="relative overflow-hidden min-h-[420px]">
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.div
                            key={page}
                            className={`grid ${
                                isMobile
                                    ? "grid-cols-2"
                                    : "sm:grid-cols-2 md:grid-cols-4"
                            } gap-3 md:gap-4 auto-rows-[200px] absolute w-full`}
                            custom={direction}
                            initial={{
                                x: direction > 0 ? 300 : -300,
                                opacity: 0,
                            }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: direction < 0 ? 300 : -300, opacity: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            {currentImages.map((src, index) => (
                                <div
                                    key={index}
                                    className={`rounded-lg overflow-hidden bg-gray-200 ${
                                        currentLayout[index] || ""
                                    }`}
                                >
                                    <img
                                        src={src}
                                        alt={`Gallery ${index + 1}`}
                                        className="w-full h-full object-cover"
                                        onClick={() => {
                                            setActiveIndex(
                                                page * imagesPerSlide + index
                                            );
                                            setShowScrollView(true);
                                        }}
                                    />
                                </div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Controls */}
                <div className="flex justify-center items-center gap-4 mt-8 md:mt-12">
                    <button
                        onClick={() => paginate(-1)}
                        disabled={page === 0}
                        className="p-2 rounded-md border border-gray-400 hover:bg-gray-500 transition disabled:opacity-30"
                    >
                        <ChevronLeft />
                    </button>
                    <span className="text-gray-200 font-mono">
                        {String(page + 1).padStart(2, "0")} /{" "}
                        {String(totalPages).padStart(2, "0")}
                    </span>
                    <button
                        onClick={() => paginate(1)}
                        disabled={page === totalPages - 1}
                        className="p-2 rounded-md border border-gray-400 hover:bg-gray-500 transition disabled:opacity-30"
                    >
                        <ChevronRight />
                    </button>
                </div>
                <AnimatePresence>
                    {showScrollView && (
                        <motion.div
                            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setShowScrollView(false)} // Close on backdrop click
                        >
                            <motion.div
                                className={`bg-white rounded-xl overflow-y-scroll scroll-smooth relative ${
                                    isMobile
                                        ? "w-[80vw] h-[80vh]"
                                        : "w-[50vw] h-[80vh]"
                                }`}
                                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 50 }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                                onClick={(e) => e.stopPropagation()} // Prevent close on inner click
                                ref={scrollRef}
                            >
                                {/* Close Button (absolute inside modal) */}
                                <button
                                    onClick={() => setShowScrollView(false)}
                                    className="absolute top-4 right-4 z-50 bg-black text-white p-2 rounded-full shadow-lg hover:bg-gray-800 transition"
                                >
                                    <X size={20} />
                                </button>

                                {/* Image container */}
                                <div
                                    className={`p-6 gap-4 ${
                                        isMobile
                                            ? "flex flex-col"
                                            : "flex flex-wrap justify-between"
                                    }`}
                                >
                                    {images.map((src, idx) => (
                                        <img
                                            key={idx}
                                            src={src}
                                            alt={`Full ${idx + 1}`}
                                            className={`rounded-md mb-4 max-w-full h-auto object-cover ${
                                                isMobile ? "w-full" : "w-[48%]"
                                            }`}
                                        />
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </section>
        </div>
    );
}
