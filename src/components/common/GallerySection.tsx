import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
            <section className="max-w-5xl mx-auto px-4 py-12 md:py-20">
                <h2 className="font-[AgrandirWide] text-3xl md:text-5xl font-semibold text-neutral-100 mb-6">
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
                            } gap-4 auto-rows-[200px] absolute w-full`}
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
                                    />
                                </div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Controls */}
                <div className="flex justify-center items-center gap-4 mt-12">
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
            </section>
        </div>
    );
}
