"use client";

import BrandExperiences from "./BrandExp";
import MidHeading from "./MidHeading";
import ReelGlance from "./ReelGlance";
import GallerySection from "../common/GallerySection";
import CokeGlance from "./CokeGlance";

const imageList = Array.from(
    { length: 30 },
    (_, i) => `/assets/images/experience_new/gal${i + 1}.png`
);

const page = () => {
    return (
        <div
        //  style={{ fontFamily: "AgrandirWide, sans-serif" }}
        >
            <BrandExperiences />
            <MidHeading />
            <ReelGlance />
            <GallerySection
                images={imageList}
                title="Event Moments"
                imagesPerSlide={6}
            />
            <CokeGlance />
        </div>
    );
};

export default page;
